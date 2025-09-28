
'use client';

import React, { useState, useRef, MouseEvent } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { ZoomIn, ZoomOut, Search } from 'lucide-react';

interface ImageDialogProps {
  imageUrl: string;
  alt: string;
  children: React.ReactNode;
}

export function ImageDialog({ imageUrl, alt, children }: ImageDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => setScale(prev => Math.min(prev * 1.2, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev / 1.2, 1));

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (scale <= 1 || !imageRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const imageRect = imageRef.current.getBoundingClientRect();

    const offsetX = (imageRect.width - containerRect.width) / 2;
    const offsetY = (imageRect.height - containerRect.height) / 2;

    const x = Math.max(-offsetX, Math.min(e.clientX - containerRect.left - imageRect.width / 2, offsetX));
    const y = Math.max(-offsetY, Math.min(e.clientY - containerRect.top - imageRect.height / 2, offsetY));

    setPosition({ x, y });
  };
  
  const handleMouseLeave = () => {
    // Optional: Reset position when mouse leaves
    // setPosition({ x: 0, y: 0 });
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (!open) {
        resetZoom();
      }
    }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent 
        className="max-w-4xl w-full h-[90vh] p-0 border-0 flex flex-col items-center justify-center bg-transparent"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        <div className="relative w-full h-full overflow-hidden">
            <Image
                ref={imageRef}
                src={imageUrl}
                alt={alt}
                fill
                className="object-contain transition-transform duration-300"
                style={{
                  transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                  cursor: scale > 1 ? 'grab' : 'auto',
                }}
            />
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background/80 backdrop-blur-sm p-2 rounded-lg shadow-lg">
            <Button variant="outline" size="icon" onClick={handleZoomOut} disabled={scale <= 1}>
                <ZoomOut />
            </Button>
            <Button variant="outline" size="icon" onClick={handleZoomIn} disabled={scale >= 3}>
                <ZoomIn />
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

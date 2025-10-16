
'use client';

import React, { useState, useRef, MouseEvent, cloneElement, Children } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { Button } from './button';
import { ZoomIn, ZoomOut, X } from 'lucide-react';

interface ImageDialogProps {
  imageUrl: string;
  alt: string;
  children: React.ReactElement;
}

export function ImageDialog({ imageUrl, alt, children }: ImageDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
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
      <DialogTrigger asChild>
        {cloneElement(Children.only(children))}
      </DialogTrigger>
      <DialogContent 
        className="max-w-4xl w-full h-[90vh] p-0 border-0 flex flex-col items-center justify-center bg-black/80"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
        hideCloseButton={true}
      >
        <DialogClose className="absolute top-2 right-2 z-50 rounded-full border border-white/50 bg-black/50 p-1 opacity-80 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-6 w-6 text-white" />
            <span className="sr-only">Close</span>
        </DialogClose>

        <DialogHeader>
            <DialogTitle className="sr-only">{alt}</DialogTitle>
        </DialogHeader>
        <div 
          ref={imageRef}
          className="relative w-full h-full overflow-hidden"
          style={{
            transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
            cursor: scale > 1 ? 'grab' : 'auto',
            transition: 'transform 0.3s ease-out'
          }}
        >
            <Image
                src={imageUrl}
                alt={alt}
                fill
                className="object-contain"
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

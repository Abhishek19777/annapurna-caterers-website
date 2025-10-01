
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

export default function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  const [isPlayed, setIsPlayed] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const handlePlay = () => {
    setIsPlayed(true);
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
      {isPlayed ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <div
          onClick={handlePlay}
          className="group relative h-full w-full cursor-pointer"
        >
          <Image
            src={thumbnailUrl}
            alt={`Play button for ${title}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            unoptimized 
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <PlayCircle className="h-16 w-16 text-white/80 transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
          </div>
           <p className="absolute bottom-4 left-4 text-white text-lg font-bold drop-shadow-md">{title}</p>
        </div>
      )}
    </div>
  );
}


import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import AnimatedGalleryItem from '@/components/ui/animated-gallery-item';

const Gallery = () => {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title section-eyebrow-line">Glimpses From Our Events</h2>
          <p className="section-subtitle">
            A taste of the unforgettable experiences we help create.
          </p>
        </div>
        <div className="grid grid-cols-1 min-[360px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => {
            const direction = index % 4 < 2 ? 'left' : 'right';
            return (
              <AnimatedGalleryItem key={image.id} direction={direction}>
                <Card className="overflow-hidden group rounded-2xl border-0 shadow-md transition-shadow duration-300 hover:shadow-xl">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={image.width}
                      height={image.height}
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </Card>
              </AnimatedGalleryItem>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

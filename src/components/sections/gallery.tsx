import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

const Gallery = () => {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline mb-4">Glimpses From Our Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A taste of the unforgettable experiences we help create.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <Card key={image.id} className="overflow-hidden group">
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

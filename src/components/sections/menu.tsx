import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

const Menu = () => {
  const menuImages = PlaceHolderImages.filter(img => img.id.startsWith('marathi-menu-'));

  return (
    <section id="menu" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline mb-4">Our Marathi Menu</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our authentic selection of traditional Marathi dishes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {menuImages.map((image) => (
            <Card key={image.id} className="overflow-hidden group">
               <div className="relative w-full aspect-[9/16]">
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={image.width}
                    height={image.height}
                    className="object-contain w-full h-full transform transition-transform duration-300 group-hover:scale-105"
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

export default Menu;

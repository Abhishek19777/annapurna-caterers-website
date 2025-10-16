
'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ImageDialog } from '@/components/ui/image-dialog';

const Menu = () => {
  const marathiImages = PlaceHolderImages.filter(img => img.id.startsWith('marathi-menu-'));
  const englishImages = PlaceHolderImages.filter(img => img.id.startsWith('english-menu-'));

  return (
    <section id="menu" className="py-12 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-4xl font-headline mb-4">Our Menus</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our authentic selection of traditional dishes. Click any menu to zoom in.
          </p>
        </div>
        <Tabs defaultValue="marathi" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="marathi">Marathi Menu</TabsTrigger>
            <TabsTrigger value="english">English Menu</TabsTrigger>
          </TabsList>
          <TabsContent value="marathi">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
              {marathiImages.map((image) => (
                <ImageDialog key={image.id} imageUrl={image.imageUrl} alt={image.description}>
                  <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-lg cursor-zoom-in">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-contain"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </ImageDialog>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="english">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
              {englishImages.map((image) => (
                <ImageDialog key={image.id} imageUrl={image.imageUrl} alt={image.description}>
                  <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-lg cursor-zoom-in">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-contain"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </ImageDialog>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;

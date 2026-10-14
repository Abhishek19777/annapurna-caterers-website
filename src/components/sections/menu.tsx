
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
    <section id="menu" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title section-eyebrow-line">Our Menus</h2>
          <p className="section-subtitle">
            Explore our authentic selection of traditional dishes. Click any menu to zoom in.
          </p>
        </div>
        <Tabs defaultValue="marathi" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid h-12 w-full grid-cols-2 rounded-full border bg-card p-1 shadow-sm">
            <TabsTrigger value="marathi" className="h-full rounded-full text-sm font-semibold data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-md md:text-base">Marathi Menu</TabsTrigger>
            <TabsTrigger value="english" className="h-full rounded-full text-sm font-semibold data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-md md:text-base">English Menu</TabsTrigger>
          </TabsList>
          <TabsContent value="marathi">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
              {marathiImages.map((image) => (
                <ImageDialog key={image.id} imageUrl={image.imageUrl} alt={image.description}>
                  <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-zoom-in">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      sizes="(min-width: 768px) 450px, 100vw"
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
                  <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-zoom-in">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      sizes="(min-width: 768px) 450px, 100vw"
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

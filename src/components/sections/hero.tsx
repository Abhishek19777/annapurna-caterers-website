import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { QUICK_STATS } from '@/lib/constants';

const Hero = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section id="home" className="relative h-[calc(100vh-4rem)] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl drop-shadow-lg">
          WELCOME TO SHREE OM ANNAPURNA CATERERS
        </h1>
        <p className="mt-4 max-w-3xl text-lg md:text-xl drop-shadow-md">
          Authentic Flavours, Unforgettable Events. The Leading Caterers in Ravet, Pune since 1998.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-lg">
          {QUICK_STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <stat.icon className="h-10 w-10 text-primary" />
              <span className="font-semibold">{stat.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" variant="default">
            <Link href="#packages">View Our Packages</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">Find Us on Map</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

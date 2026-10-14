
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { QUICK_STATS } from '@/lib/constants';

// One orchestrated entrance: each tier of the title lands in sequence.
const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const Hero = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section id="home" className="relative min-h-[620px] h-[88svh] md:h-[calc(100svh-4.5rem)] w-full overflow-hidden bg-[hsl(350,60%,8%)]">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
          sizes="100vw"
          quality={80}
        />
      )}
      {/* Deep maroon wash keeps the title legible and gives the page its colour */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(350,70%,8%)]/85 via-[hsl(350,60%,10%)]/60 to-[hsl(350,70%,6%)]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.45)_100%)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pb-28 pt-10 text-center md:pb-32 text-[hsl(40,40%,96%)]">
        <h1 className="flex flex-col items-center">
          <motion.span
            {...reveal(0.1)}
            className="font-script text-3xl font-semibold text-primary sm:text-4xl md:text-5xl"
          >
            Welcome to
          </motion.span>

          <motion.span
            {...reveal(0.3)}
            className="mt-2 font-headline text-[2.9rem] font-semibold leading-[0.95] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)] sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          >
            Shree Om
            <br className="sm:hidden" />
            <span className="sm:ml-6"> Annapurna</span>
          </motion.span>

          <motion.span
            {...reveal(0.55)}
            className="mt-4 flex w-full max-w-xl items-center gap-4 md:mt-6 md:gap-6"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-primary" aria-hidden="true" />
            <span className="font-headline-italic text-3xl font-medium italic text-primary sm:text-4xl md:text-6xl">
              Caterers
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-primary" aria-hidden="true" />
          </motion.span>
        </h1>

        <motion.p
          {...reveal(0.8)}
          className="mt-6 max-w-2xl text-base font-light leading-relaxed text-white/85 md:mt-8 md:text-xl"
        >
          Authentic Flavours, Unforgettable Events. The Leading Caterers in Ravet, Pune since 2006.
        </motion.p>

        <motion.div
          {...reveal(1.0)}
          className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
        >
          <Button asChild size="lg" className="sm:min-w-[11rem]">
            <Link href="#packages">View Our Packages</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-white/5 text-white backdrop-blur-sm hover:border-white hover:bg-white/15 hover:text-white sm:min-w-[11rem]"
          >
            <Link href="#contact">Find Us on Map</Link>
          </Button>
        </motion.div>
      </div>

      {/* Stats sit on a frosted bar at the foot of the hero */}
      <motion.div
        {...reveal(1.2)}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-white/15 bg-black/35 backdrop-blur-md"
      >
        <div className="container grid grid-cols-3 divide-x divide-white/15 py-4 md:py-5">
          {QUICK_STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-1.5 px-2 text-white md:flex-row md:gap-3">
              <stat.icon className="h-5 w-5 shrink-0 text-primary md:h-7 md:w-7" />
              <span className="text-center text-[11px] font-medium leading-tight sm:text-sm md:text-base">{stat.text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Footer from '@/components/layout/footer';
import AnimatedSection from '@/components/ui/animated-section';
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/sections/about'));
const Packages = dynamic(() => import('@/components/sections/packages'));
const Menu = dynamic(() => import('@/components/sections/menu'));
const WhyChooseUs = dynamic(() => import('@/components/sections/why-choose-us'));
const Gallery = dynamic(() => import('@/components/sections/gallery'));
const Contact = dynamic(() => import('@/components/sections/contact'));


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Packages />
        </AnimatedSection>
        <AnimatedSection>
          <Menu />
        </AnimatedSection>
        <AnimatedSection>
          <WhyChooseUs />
        </AnimatedSection>
        <AnimatedSection>
          <Gallery />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

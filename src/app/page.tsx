import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Packages from '@/components/sections/packages';
import Menu from '@/components/sections/menu';
import WhyChooseUs from '@/components/sections/why-choose-us';
import Gallery from '@/components/sections/gallery';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import AnimatedSection from '@/components/ui/animated-section';

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

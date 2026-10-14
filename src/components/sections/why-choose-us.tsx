
import React from 'react';
import TestimonialCard from '@/components/testimonial-card';
import { WHY_CHOOSE_US_POINTS, TESTIMONIALS } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title section-eyebrow-line">
            Why Choose Shree Om Annapurna Caterers?
          </h2>
        </div>

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-14 md:mb-20">
          {WHY_CHOOSE_US_POINTS.map((point, index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.07]">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-primary/15 p-4 text-primary ring-1 ring-primary/40">
                  <point.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="mb-2 font-headline text-2xl font-semibold">{point.title}</h3>
              <p className="text-sm leading-relaxed text-[hsl(40,25%,80%)] md:text-base">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

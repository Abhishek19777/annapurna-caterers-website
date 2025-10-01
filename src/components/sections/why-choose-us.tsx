
import React from 'react';
import TestimonialCard from '@/components/testimonial-card';
import { WHY_CHOOSE_US_POINTS, TESTIMONIALS } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-12 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-4xl font-headline mb-4">
            Why Choose Shree Om Annapurna Caterers?
          </h2>
        </div>

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 md:mb-16">
          {WHY_CHOOSE_US_POINTS.map((point, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 text-primary p-4 rounded-full">
                  <point.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{point.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{point.description}</p>
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

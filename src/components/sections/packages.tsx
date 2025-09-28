import React from 'react';
import { CATERING_PACKAGES } from '@/lib/constants';
import PackageCard from '@/components/package-card';

const Packages = () => {
  return (
    <section id="packages" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline mb-4">Our Catering Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from one of our thoughtfully crafted packages or let us help you find the perfect fit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATERING_PACKAGES.map((pkg, index) => (
            <PackageCard key={index} packageData={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;

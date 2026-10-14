import React from 'react';
import { CATERING_PACKAGES } from '@/lib/constants';
import PackageCard from '@/components/package-card';

const Packages = () => {
  return (
    <section id="packages" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title section-eyebrow-line">Our Catering Packages</h2>
          <p className="section-subtitle">
            Choose from one of our thoughtfully crafted packages.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CATERING_PACKAGES.map((pkg, index) => (
            <PackageCard key={index} packageData={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;

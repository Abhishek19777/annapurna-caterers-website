import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-headline text-accent mb-4">
          Celebrating Food and Tradition Since 1998
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over two decades, Shree Om Annapurna Caterers has been the heart of countless celebrations in Pune. Our journey began with a simple mission: to deliver unforgettable culinary experiences with an authentic, home-style taste. For us, food is not just a business; it's a celebration of life, family, and tradition. We pour our passion and experience into every dish, ensuring your special moments are as delicious as they are memorable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

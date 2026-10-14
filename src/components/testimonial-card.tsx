import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

type TestimonialData = {
  name: string;
  event: string;
  quote: string;
};

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="relative overflow-hidden rounded-2xl border-0 bg-[hsl(40,38%,97%)] shadow-xl">
      <CardContent className="p-6 md:p-8">
        <blockquote className="border-l-2 border-primary pl-4 font-headline-italic text-xl font-medium italic leading-snug text-foreground md:text-2xl">
          {testimonial.quote}
        </blockquote>
        <div className="mt-4 text-right">
          <p className="font-semibold text-accent">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.event}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;

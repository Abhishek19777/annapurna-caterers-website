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
    <Card className="bg-background">
      <CardContent className="p-6">
        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
          {testimonial.quote}
        </blockquote>
        <div className="mt-4 text-right">
          <p className="font-bold">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.event}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;

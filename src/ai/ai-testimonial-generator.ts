// This is an AI-powered testimonial generator.
// It generates testimonials to populate the site, improving credibility and reducing the need for manual gathering.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const TestimonialInputSchema = z.object({
  service: z.string().describe('The name of the service provided.'),
  customerName: z.string().describe('The name of the customer providing the testimonial.'),
  event: z.string().describe('The type of event for which the service was provided.'),
  positiveTraits: z.string().describe('Positive aspects of the service that the customer wants to highlight.  For example: taste, hygiene, punctuality, service, etc.'),
});
export type TestimonialInput = z.infer<typeof TestimonialInputSchema>;

const TestimonialOutputSchema = z.object({
  testimonial: z.string().describe('A detailed testimonial about the service.'),
});
export type TestimonialOutput = z.infer<typeof TestimonialOutputSchema>;

export async function generateTestimonial(input: TestimonialInput): Promise<TestimonialOutput> {
  return generateTestimonialFlow(input);
}

const testimonialPrompt = ai.definePrompt({
  name: 'testimonialPrompt',
  input: {schema: TestimonialInputSchema},
  output: {schema: TestimonialOutputSchema},
  prompt: `You are a professional copywriter specializing in creating compelling testimonials for catering services.

  Given the following information, generate a testimonial that highlights the positive aspects of the service.

  Service: {{{service}}}
  Customer Name: {{{customerName}}}
  Event Type: {{{event}}}
  Positive Traits: {{{positiveTraits}}}

  Testimonial:`,
});

const generateTestimonialFlow = ai.defineFlow(
  {
    name: 'generateTestimonialFlow',
    inputSchema: TestimonialInputSchema,
    outputSchema: TestimonialOutputSchema,
  },
  async input => {
    const {output} = await testimonialPrompt(input);
    return output!;
  }
);

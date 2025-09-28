'use server';

/**
 * @fileOverview A package selection AI agent.
 *
 * - packageSelectionAssistant - A function that handles the package selection process.
 * - PackageSelectionAssistantInput - The input type for the packageSelectionAssistant function.
 * - PackageSelectionAssistantOutput - The return type for the packageSelectionAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PackageSelectionAssistantInputSchema = z.object({
  eventType: z
    .string()
    .describe('The type of event (e.g., wedding, birthday party, corporate event).'),
  numberOfGuests: z.number().describe('The estimated number of guests attending the event.'),
  budget: z.number().describe('The budget for the catering services in INR.'),
});
export type PackageSelectionAssistantInput = z.infer<
  typeof PackageSelectionAssistantInputSchema
>;

const PackageSelectionAssistantOutputSchema = z.object({
  recommendedPackage: z
    .string()
    .describe(
      'The name of the recommended package (Normal Package, Medium Package, or Special Package).'      
    ),
  justification: z
    .string()
    .describe('A brief explanation of why this package is recommended.'),
});
export type PackageSelectionAssistantOutput = z.infer<
  typeof PackageSelectionAssistantOutputSchema
>;

export async function packageSelectionAssistant(
  input: PackageSelectionAssistantInput
): Promise<PackageSelectionAssistantOutput> {
  return packageSelectionAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'packageSelectionAssistantPrompt',
  input: {schema: PackageSelectionAssistantInputSchema},
  output: {schema: PackageSelectionAssistantOutputSchema},
  prompt: `You are a catering expert at Shree Om Annapurna Caterers, recommending the best catering package based on the customer's needs.

  Based on the event type ({{{eventType}}}), number of guests ({{{numberOfGuests}}}), and budget ({{{budget}}} INR), recommend one of the following packages:
  - Normal Package
  - Medium Package
  - Special Package

  Explain your recommendation.

  Ensure the output is valid JSON.`,
});

const packageSelectionAssistantFlow = ai.defineFlow(
  {
    name: 'packageSelectionAssistantFlow',
    inputSchema: PackageSelectionAssistantInputSchema,
    outputSchema: PackageSelectionAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

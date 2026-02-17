'use server';
/**
 * @fileOverview A Genkit flow for summarizing content for mobile devices.
 *
 * - summarizeMobileContent - A function that summarizes long text content for mobile viewing.
 * - MobileContentSummarizerInput - The input type for the summarizeMobileContent function.
 * - MobileContentSummarizerOutput - The return type for the summarizeMobileContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MobileContentSummarizerInputSchema = z.object({
  content: z.string().describe('The long text content to be summarized.'),
});
export type MobileContentSummarizerInput = z.infer<
  typeof MobileContentSummarizerInputSchema
>;

const MobileContentSummarizerOutputSchema = z.object({
  summary: z.string().describe('The summarized text content, suitable for mobile devices.'),
});
export type MobileContentSummarizerOutput = z.infer<
  typeof MobileContentSummarizerOutputSchema
>;

export async function summarizeMobileContent(
  input: MobileContentSummarizerInput
): Promise<MobileContentSummarizerOutput> {
  return mobileContentSummarizerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'mobileContentSummarizerPrompt',
  input: {schema: MobileContentSummarizerInputSchema},
  output: {schema: MobileContentSummarizerOutputSchema},
  prompt: `You are an expert content summarizer, specifically for mobile web experiences.

Your goal is to take the provided 'content' and condense it significantly, making it easy to read and understand quickly on a small screen. Focus on extracting the most crucial information and presenting it concisely, while retaining the core message.

Content to summarize:
---
{{{content}}}
---`,
});

const mobileContentSummarizerFlow = ai.defineFlow(
  {
    name: 'mobileContentSummarizerFlow',
    inputSchema: MobileContentSummarizerInputSchema,
    outputSchema: MobileContentSummarizerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate summary.');
    }
    return output;
  }
);

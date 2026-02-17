'use server';
/**
 * @fileOverview A Genkit flow for providing personalized relationship diagnostics.
 *
 * - personalizedRelationshipDiagnostic - A function that handles the relationship diagnostic process.
 * - PersonalizedRelationshipDiagnosticInput - The input type for the personalizedRelationshipDiagnostic function.
 * - PersonalizedRelationshipDiagnosticOutput - The return type for the personalizedRelationshipDiagnostic function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRelationshipDiagnosticInputSchema = z.object({
  userSituation: z
    .string()
    .describe('A detailed description of the user\'s current relationship situation and struggles.'),
});
export type PersonalizedRelationshipDiagnosticInput = z.infer<
  typeof PersonalizedRelationshipDiagnosticInputSchema
>;

const PersonalizedRelationshipDiagnosticOutputSchema = z.object({
  empatheticInsight: z
    .string()
    .describe('An empathetic and personalized insight into the user\'s relationship challenges.'),
  programRelevance: z
    .string()
    .describe(
      'An explanation of how the "Lunar Attraction" program specifically addresses the user\'s challenges.'
    ),
});
export type PersonalizedRelationshipDiagnosticOutput = z.infer<
  typeof PersonalizedRelationshipDiagnosticOutputSchema
>;

export async function personalizedRelationshipDiagnostic(
  input: PersonalizedRelationshipDiagnosticInput
): Promise<PersonalizedRelationshipDiagnosticOutput> {
  return personalizedRelationshipDiagnosticFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRelationshipDiagnosticPrompt',
  input: {schema: PersonalizedRelationshipDiagnosticInputSchema},
  output: {schema: PersonalizedRelationshipDiagnosticOutputSchema},
  prompt: `You are an empathetic and insightful relationship expert, specializing in dynamic emotional patterns.
Your goal is to provide a personalized understanding of the user's challenges and explain how the "Lunar Attraction" program can help.

Based on the user's situation, provide:
1. An empathetic insight into their struggles, validating their feelings and identifying underlying patterns.
2. Explain how the "Lunar Attraction" program, which focuses on re-activating interest, restoring emotional tension, making someone invest again without neediness, and adjusting energy, can specifically address their described challenges.

User's Situation: {{{userSituation}}}`,
});

const personalizedRelationshipDiagnosticFlow = ai.defineFlow(
  {
    name: 'personalizedRelationshipDiagnosticFlow',
    inputSchema: PersonalizedRelationshipDiagnosticInputSchema,
    outputSchema: PersonalizedRelationshipDiagnosticOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

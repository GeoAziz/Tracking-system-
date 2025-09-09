'use server';

/**
 * @fileOverview Assesses worker eligibility for additional flex time based on attendance.
 *
 * - assessWorkerFlexTime - A function that assesses flex time eligibility.
 * - AssessWorkerFlexTimeInput - The input type for the assessWorkerFlexTime function.
 * - AssessWorkerFlexTimeOutput - The return type for the assessWorkerFlexTime function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssessWorkerFlexTimeInputSchema = z.object({
  workerId: z.string().describe('The ID of the worker.'),
  attendanceRecords: z
    .array(z.object({date: z.string(), status: z.string()}))
    .describe('Array of attendance records for the worker.'),
});
export type AssessWorkerFlexTimeInput = z.infer<typeof AssessWorkerFlexTimeInputSchema>;

const AssessWorkerFlexTimeOutputSchema = z.object({
  eligibleForFlexTime: z
    .boolean()
    .describe('Whether the worker is eligible for additional flex time.'),
  reason: z.string().describe('The reason for the eligibility determination.'),
});
export type AssessWorkerFlexTimeOutput = z.infer<typeof AssessWorkerFlexTimeOutputSchema>;

export async function assessWorkerFlexTime(input: AssessWorkerFlexTimeInput): Promise<AssessWorkerFlexTimeOutput> {
  return assessWorkerFlexTimeFlow(input);
}

const assessWorkerFlexTimePrompt = ai.definePrompt({
  name: 'assessWorkerFlexTimePrompt',
  input: {schema: AssessWorkerFlexTimeInputSchema},
  output: {schema: AssessWorkerFlexTimeOutputSchema},
  prompt: `You are an HR assistant tasked with assessing worker eligibility for additional flex time.

  Based on the worker's attendance records, determine if they are eligible for additional flex time.
  Consider factors such as punctuality and consistent attendance.

  Worker ID: {{{workerId}}}
  Attendance Records:
  {{#each attendanceRecords}}
  - Date: {{{date}}}, Status: {{{status}}}
  {{/each}}

  Based on this information, determine if the worker is eligible for additional flex time and provide a reason for your determination.
  Be conservative with granting flex time. Only grant it if the worker has a very strong attendance record.
  Be professional and polite in your reasoning.
  `,
});

const assessWorkerFlexTimeFlow = ai.defineFlow(
  {
    name: 'assessWorkerFlexTimeFlow',
    inputSchema: AssessWorkerFlexTimeInputSchema,
    outputSchema: AssessWorkerFlexTimeOutputSchema,
  },
  async input => {
    const {output} = await assessWorkerFlexTimePrompt(input);
    return output!;
  }
);

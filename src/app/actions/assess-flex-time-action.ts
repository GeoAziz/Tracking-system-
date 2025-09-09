'use server';

import { assessWorkerFlexTime } from '@/ai/flows/assess-worker-flex-time';
import type { AssessWorkerFlexTimeOutput } from '@/ai/flows/assess-worker-flex-time';
import type { AttendanceRecord } from '@/lib/types';

export interface AssessActionState {
  data: AssessWorkerFlexTimeOutput | null;
  error: string | null;
  message: string | null;
}

export async function assessFlexTimeAction(
  prevState: AssessActionState,
  formData: FormData
): Promise<AssessActionState> {
  try {
    const attendanceRecords = JSON.parse(formData.get('attendanceRecords') as string) as AttendanceRecord[];
    
    if (!attendanceRecords || attendanceRecords.length === 0) {
      return { ...prevState, error: 'No attendance records found.' };
    }

    const result = await assessWorkerFlexTime({
      workerId: 'worker-001', // Using a mock workerId
      attendanceRecords,
    });

    return { data: result, error: null, message: 'Assessment complete.' };
  } catch (error) {
    console.error('Error assessing flex time:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { data: null, error: `AI assessment failed: ${errorMessage}`, message: null };
  }
}

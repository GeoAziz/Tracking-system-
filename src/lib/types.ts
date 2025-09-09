export type AttendanceRecord = {
  date: string;
  status: 'Present' | 'Absent' | 'Late' | 'Weekend';
};

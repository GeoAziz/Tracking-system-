import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const mockAttendance = [
  { date: "2025-09-08", status: "Present", timeIn: "08:58", timeOut: "17:02" },
  { date: "2025-09-07", status: "Present", timeIn: "09:03", timeOut: "17:10" },
  { date: "2025-09-06", status: "Absent", timeIn: "-", timeOut: "-" },
];

export default function WorkerAttendancePage() {
  return (
    <div className="w-full min-w-0 overflow-x-auto space-y-8 animate-fade-in-up">
      <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card className="glass-card h-full flex flex-col items-center justify-center text-center p-4 sm:p-6 lg:p-8">
            <CardHeader>
              <CardTitle className="font-headline text-xl sm:text-2xl">Attendance</CardTitle>
              <CardDescription>Ready to start your day?</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center">
              <Button size="lg" className="h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-primary/20 text-primary border-2 border-primary hover:bg-primary/30 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex flex-col gap-1">
                  <Clock className="h-8 w-8 sm:h-10 sm:w-10" />
                  <span className="font-bold">Sign In</span>
              </Button>
            </CardContent>
            <p className="text-xs text-muted-foreground">Last sign-in: Today at 8:58 AM</p>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card className="glass-card p-2 sm:p-4 overflow-x-auto">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Recent Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-x-auto">
                <table className="min-w-full table-auto text-sm">
                  <thead>
                    <tr className="text-left text-muted-foreground">
                      <th>Date</th>
                      <th>Status</th>
                      <th>Time In</th>
                      <th>Time Out</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockAttendance.map((rec, i) => (
                      <tr key={i} className="border-b border-muted-foreground/10">
                        <td>{rec.date}</td>
                        <td>{rec.status}</td>
                        <td>{rec.timeIn}</td>
                        <td>{rec.timeOut}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

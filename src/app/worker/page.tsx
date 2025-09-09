import { mockAttendance } from "@/lib/constants";
import AttendanceClient from "@/components/worker/attendance-client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export default function WorkerAttendancePage() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card className="glass-card h-full flex flex-col items-center justify-center text-center p-8">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Attendance</CardTitle>
              <CardDescription>Ready to start your day?</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center">
              <Button size="lg" className="h-32 w-32 rounded-full bg-primary/20 text-primary border-2 border-primary hover:bg-primary/30 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex flex-col gap-1">
                  <Clock className="h-10 w-10" />
                  <span className="font-bold">Sign In</span>
              </Button>
            </CardContent>
            <p className="text-xs text-muted-foreground">Last sign-in: Today at 8:58 AM</p>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <AttendanceClient records={mockAttendance} />
        </div>
      </div>
    </div>
  );
}

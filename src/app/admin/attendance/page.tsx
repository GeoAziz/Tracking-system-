import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminAttendancePage() {
  return (
    <div className="animate-fade-in-up">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Attendance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">A real-time grid of worker statuses with glowing dots and quick stats would be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}

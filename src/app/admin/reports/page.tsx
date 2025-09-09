import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminReportsPage() {
  return (
    <div className="animate-fade-in-up">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Reports & Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Animated charts and glowing export buttons for analytics would be available here.</p>
        </CardContent>
      </Card>
    </div>
  );
}

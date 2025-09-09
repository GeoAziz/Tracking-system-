import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function WorkerProfilePage() {
  return (
    <div className="animate-fade-in-up">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>My Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Worker profile, animated attendance graphs, and task history would be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function WorkerTasksPage() {
  return (
    <div className="animate-fade-in-up">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>My Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Task management interface with floating glass cards and interactive progress bars would be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
}

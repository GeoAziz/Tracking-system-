import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminTasksPage() {
  return (
    <div className="animate-fade-in-up">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Task Assignment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">A drag-and-drop interface for assigning glowing task chips to worker cards would be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
}

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminUsersPage() {
  return (
    <div className="animate-fade-in-up">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>User Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">A glass table for managing users with animated add, edit, and delete actions would be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
}

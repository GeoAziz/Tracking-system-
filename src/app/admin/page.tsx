
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users, ListTodo, BarChart } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-fade-in-up w-full">
      <header>
        <h1 className="text-4xl font-headline text-glow">Admin Dashboard</h1>
        <p className="text-muted-foreground">Welcome, Commander. Here's your mission control.</p>
      </header>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Workers Present</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">43 / 50</div>
            <p className="text-xs text-muted-foreground">+2 since last hour</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
            <ListTodo className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">128</div>
            <p className="text-xs text-muted-foreground">+15 today</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Productivity</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">92%</div>
            <p className="text-xs text-muted-foreground">Trending upwards</p>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Admin Actions</CardTitle>
          <CardDescription>Placeholder for more admin controls.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Real-time attendance grid, task assignment, and user management features would be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
}

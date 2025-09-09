import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function WorkerTasksPage() {
  const mockTasks = [
    { title: "Prepare daily report", status: "In Progress", due: "Today" },
    { title: "Update profile info", status: "Completed", due: "Yesterday" },
    { title: "Review attendance", status: "Pending", due: "Tomorrow" },
  ];
  return (
    <div className="w-full min-w-0 overflow-x-auto space-y-8 animate-fade-in-up">
      <Card className="glass-card p-2 sm:p-4 overflow-x-auto">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">My Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto">
            <table className="min-w-full table-auto text-sm">
              <thead>
                <tr className="text-left text-muted-foreground">
                  <th>Task</th>
                  <th>Status</th>
                  <th>Due</th>
                </tr>
              </thead>
              <tbody>
                {mockTasks.map((task, i) => (
                  <tr key={i} className="border-b border-muted-foreground/10">
                    <td>{task.title}</td>
                    <td>{task.status}</td>
                    <td>{task.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { cn } from "@/lib/utils";


export default function WorkerTasksPage() {
  const mockTasks = [
    { title: "Prepare daily report", status: "In Progress", due: "Today" },
    { title: "Update profile info", status: "Completed", due: "Yesterday" },
    { title: "Review attendance", status: "Pending", due: "Tomorrow" },
    { title: "Onboard new team member", status: "In Progress", due: "2024-07-20" },
    { title: "Finalize Q3 budget", status: "Pending", due: "2024-07-22" },
    { title: "Submit project proposal", status: "Completed", due: "2024-07-15" },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case "In Progress":
        return "text-yellow-400";
      case "Completed":
        return "text-green-400";
      case "Pending":
        return "text-orange-400";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col h-full animate-fade-in-up">
      <Card className="glass-card w-full flex-grow flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-glow">My Tasks</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow p-0">
          <div className="h-full overflow-y-auto custom-scrollbar">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50%]">Task</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Due</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTasks.map((task, i) => (
                  <TableRow key={i} className="border-primary/10">
                    <TableCell className="font-medium">{task.title}</TableCell>
                    <TableCell>
                      <span className={cn("font-semibold", getStatusClass(task.status))}>
                        {task.status}
                      </span>
                    </TableCell>
                    <TableCell>{task.due}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

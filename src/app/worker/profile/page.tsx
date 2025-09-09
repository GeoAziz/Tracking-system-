import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function WorkerProfilePage() {
  const mockProfile = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    role: "Worker",
    attendance: "95%",
    tasksCompleted: 21,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  };
  return (
    <div className="w-full min-w-0 overflow-x-auto space-y-8 animate-fade-in-up">
      <Card className="glass-card flex flex-col items-center text-center p-4 sm:p-6 lg:p-8">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">My Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <img src={mockProfile.avatar} alt="avatar" className="w-20 h-20 rounded-full mx-auto mb-4 shadow-lg" />
          <div className="space-y-1">
            <div className="font-bold text-base sm:text-lg">{mockProfile.name}</div>
            <div className="text-muted-foreground text-sm sm:text-base">{mockProfile.email}</div>
            <div className="text-primary font-semibold">{mockProfile.role}</div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6 w-full">
            <div className="bg-primary/10 rounded-lg p-4">
              <div className="text-xs text-muted-foreground">Attendance</div>
              <div className="font-bold text-base sm:text-lg">{mockProfile.attendance}</div>
            </div>
            <div className="bg-primary/10 rounded-lg p-4">
              <div className="text-xs text-muted-foreground">Tasks Completed</div>
              <div className="font-bold text-base sm:text-lg">{mockProfile.tasksCompleted}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

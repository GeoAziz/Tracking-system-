import { LayoutDashboard, ListTodo, User, History, BarChart, Users } from "lucide-react";

export const workerNavLinks = [
  { href: "/worker", label: "Attendance", icon: History },
  { href: "/worker/tasks", label: "Tasks", icon: ListTodo },
  { href: "/worker/profile", label: "Profile", icon: User },
];

export const adminNavLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/attendance", label: "Attendance", icon: History },
  { href: "/admin/tasks", label: "Tasks", icon: ListTodo },
  { href: "/admin/reports", label: "Reports", icon: BarChart },
  { href: "/admin/users", label: "Users", icon: Users },
];

import type { AttendanceRecord } from "./types";

export const mockAttendance: AttendanceRecord[] = [
    { date: "2024-07-15", status: "Present" },
    { date: "2024-07-14", status: "Present" },
    { date: "2024-07-13", status: "Present" },
    { date: "2024-07-12", status: "Present" },
    { date: "2024-07-11", status: "Present" },
    { date: "2024-07-10", status: "Weekend" },
    { date: "2024-07-09", status: "Weekend" },
    { date: "2024-07-08", status: "Present" },
    { date: "2024-07-07", status: "Present" },
    { date: "2024-07-06", status: "Late" },
    { date: "2024-07-05", status: "Present" },
    { date: "2024-07-04", status: "Absent" },
];

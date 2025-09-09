import { LucideIcon } from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface AttendanceRecord {
  date: string;
  status: "Present" | "Absent" | "Late";
}

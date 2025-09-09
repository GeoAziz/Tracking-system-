
'use client';
import { mockAttendance } from "@/lib/constants";
import AttendanceClient from "@/components/worker/attendance-client";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function WorkerAttendancePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <header className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Attendance Dashboard
        </h1>
        <p className="text-muted-foreground">
          Your check-in history and flex time eligibility at a glance.
        </p>
      </header>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <AttendanceClient records={mockAttendance} />
      </motion.div>
    </motion.div>
  );
}

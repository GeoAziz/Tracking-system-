
'use client';
import { mockAttendance } from "@/lib/constants";
import AttendanceClient from "@/components/worker/attendance-client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function WorkerAttendancePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 p-4 sm:p-6 md:p-8"
    >
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-1"
        >
          <Card className="glass-card h-full flex flex-col items-center justify-center text-center p-4 sm:p-6 lg:p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-xl sm:text-2xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Attendance
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Ready to start your day?
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center p-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary border-2 border-primary hover:bg-primary/30 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex flex-col gap-1 group"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="opacity-80 group-hover:opacity-100"
                  >
                    <Clock className="h-8 w-8 sm:h-10 sm:w-10" />
                  </motion.div>
                  <span className="font-bold text-sm sm:text-base">Sign In</span>
                </Button>
              </motion.div>
            </CardContent>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Last sign-in: Today at 8:58 AM
            </p>
          </Card>
        </motion.div>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-1 lg:col-span-2"
        >
          <AttendanceClient records={mockAttendance} />
        </motion.div>
      </div>
    </motion.div>
  );
}

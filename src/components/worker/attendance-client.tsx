'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { useActionState } from '@/hooks/use-action-state';
import { assessFlexTimeAction, type AssessActionState } from '@/app/actions/assess-flex-time-action';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThumbsUp, ThumbsDown, Bot, Loader2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { AttendanceRecord } from '@/lib/types';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Assessing...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Assess Flex Time Eligibility
        </>
      )}
    </Button>
  );
}

export default function AttendanceClient({ records }: { records: AttendanceRecord[] }) {
  const { toast } = useToast();

  const initialState: AssessActionState = {
    data: null,
    error: null,
    message: null,
  };

  const [state, formAction] = useActionState(assessFlexTimeAction, initialState);

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Assessment Error',
        description: state.error,
      });
    }
  }, [state.error, toast]);

  const getStatusBadge = (status: AttendanceRecord['status']) => {
    switch (status) {
      case 'Present': return 'bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30 hover:scale-105';
      case 'Late': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/30 hover:scale-105';
      case 'Absent': return 'bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/30 hover:scale-105';
      case 'Weekend': return 'bg-gray-500/20 text-gray-400 border-gray-500/30 hover:bg-gray-500/30 hover:scale-105';
      default: return 'bg-muted hover:bg-muted/80';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass-card transform transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <CardHeader>
            <CardTitle className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Attendance History
            </CardTitle>
            <CardDescription>Review your recent check-ins.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
              {records.map((record, index) => (
                <motion.li
                  key={record.date}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between rounded-md p-3 bg-background/50 backdrop-blur-sm transform transition-all duration-300 hover:bg-background/70 hover:scale-[1.02]"
                >
                  <span className="text-foreground/80 font-medium">{record.date}</span>
                  <Badge 
                    variant="outline" 
                    className={cn(
                      'font-bold transition-all duration-300',
                      getStatusBadge(record.status)
                    )}
                  >
                    {record.status}
                  </Badge>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="glass-card transform transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Bot className="text-primary" />
              </motion.div>
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                AI Flex Time Assessment
              </span>
            </CardTitle>
            <CardDescription>
              Let our AI assistant check if you're eligible for extra flex time based on your attendance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {state.data ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    {state.data.eligibleForFlexTime ? (
                      <ThumbsUp className="h-8 w-8 text-green-400" />
                    ) : (
                      <ThumbsDown className="h-8 w-8 text-red-400" />
                    )}
                  </motion.div>
                  <h3 className="text-lg font-bold bg-gradient-to-r from-primary/80 to-primary/60 bg-clip-text text-transparent">
                    {state.data.eligibleForFlexTime ? 'Eligible for Flex Time!' : 'Not Eligible for Flex Time'}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{state.data.reason}</p>
              </motion.div>
            ) : (
              <p className="text-sm text-muted-foreground">Click the button to get your assessment.</p>
            )}
          </CardContent>
          <CardFooter>
            <form action={formAction} className="w-full">
              <input type="hidden" name="attendanceRecords" value={JSON.stringify(records)} />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                <SubmitButton />
              </motion.div>
            </form>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}

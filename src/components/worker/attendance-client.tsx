'use client';

import { useEffect, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
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
      case 'Present': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Late': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Absent': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Weekend': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Attendance History</CardTitle>
          <CardDescription>Review your recent check-ins.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 max-h-60 overflow-y-auto pr-2">
            {records.map((record) => (
              <li key={record.date} className="flex items-center justify-between rounded-md p-2 bg-background/50">
                <span className="text-foreground/80">{record.date}</span>
                <Badge variant="outline" className={cn('font-bold', getStatusBadge(record.status))}>{record.status}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="text-primary" />
            AI Flex Time Assessment
          </CardTitle>
          <CardDescription>Let our AI assistant check if you're eligible for extra flex time based on your attendance.</CardDescription>
        </CardHeader>
        <CardContent>
          {state.data ? (
            <div className="space-y-4 p-4 rounded-lg bg-background/50">
                <div className="flex items-center gap-4">
                    {state.data.eligibleForFlexTime ? (
                        <ThumbsUp className="h-8 w-8 text-green-400"/>
                    ) : (
                        <ThumbsDown className="h-8 w-8 text-red-400"/>
                    )}
                    <h3 className="text-lg font-bold">
                        {state.data.eligibleForFlexTime ? 'Eligible for Flex Time!' : 'Not Eligible for Flex Time'}
                    </h3>
                </div>
                <p className="text-muted-foreground">{state.data.reason}</p>
            </div>
          ) : (
             <p className="text-sm text-muted-foreground">Click the button to get your assessment.</p>
          )}
        </CardContent>
        <CardFooter>
          <form action={formAction}>
            <input type="hidden" name="attendanceRecords" value={JSON.stringify(records)} />
            <SubmitButton />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}

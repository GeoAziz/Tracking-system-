import Link from 'next/link';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, KeyRound } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#301934] via-background to-[#000000] p-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 h-72 w-72 animate-orb-float-1 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 animate-orb-float-2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md animate-fade-in-up">
        <Card className="glass-card">
          <CardHeader className="items-center text-center">
            <Logo className="mb-2 text-4xl" />
            <CardTitle className="font-headline text-2xl text-foreground">Welcome Back</CardTitle>
            <CardDescription className="text-foreground/70">
              Sign in to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@example.com" className="pl-10 focus:ring-accent focus:ring-2" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-10 focus:ring-accent focus:ring-2" />
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4">
                <Button asChild className="w-full bg-primary/90 text-primary-foreground hover:bg-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
                    <Link href="/worker">Login as Worker</Link>
                </Button>
                <Button asChild variant="secondary" className="w-full">
                    <Link href="/admin">Login as Admin</Link>
                </Button>
            </div>
             <p className="text-center text-sm text-muted-foreground">
                This is a mock login. Select a role to continue.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}




"use client";
import Link from 'next/link';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { BackgroundEffects } from '@/components/login/background-effects';
import { GlowInput } from '@/components/login/glow-input';
import { RoleCard } from '@/components/login/role-card';
import { User, KeyRound, Shield } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <BackgroundEffects />
      <div className="relative z-10 w-full max-w-md mx-auto py-20 animate-fade-in-up">
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
              <GlowInput icon={User} id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <GlowInput icon={KeyRound} id="password" type="password" placeholder="••••••••" />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <RoleCard role="Worker" icon={User} href="/worker" />
              <RoleCard role="Admin" icon={Shield} href="/admin" />
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

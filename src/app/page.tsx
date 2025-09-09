"use client";
import Link from 'next/link';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { BackgroundEffects } from '@/components/login/background-effects';


export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
       <BackgroundEffects />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Logo isPulsing />
        </div>
        <p className="max-w-md animate-fade-in-up text-lg text-foreground/80" style={{ animationDelay: '0.5s' }}>
          Step Into Work. Futuristic. Fluid. Fast.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button asChild size="lg" className="group rounded-full bg-primary/80 text-primary-foreground hover:bg-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
            <Link href="/login">
              Enter
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

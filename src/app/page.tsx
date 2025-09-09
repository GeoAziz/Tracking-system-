import Link from 'next/link';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Particles, GlassPanel, WireframeCube } from '@/components/ui/background-elements';

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#301934] via-background to-[#000000] p-4 text-center perspective-1000">
      <div className="absolute inset-0 z-0">
        <Particles quantity={100} />
        <div className="absolute -top-20 -left-20 h-64 w-64 animate-orb-float-1 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 animate-orb-float-2 rounded-full bg-accent/20 blur-3xl" />
        
        <GlassPanel style={{ top: '15%', left: '10%', animationDuration: '25s' }} />
        <GlassPanel style={{ top: '65%', right: '15%', animationDuration: '30s', width: '256px', height: '128px' }} />
        
        <WireframeCube style={{ top: '20%', right: '20%', transform: 'scale(0.8)' }} />
        <WireframeCube style={{ bottom: '10%', left: '25%', transform: 'scale(0.6)', animationDelay: '-5s' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
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

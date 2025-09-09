import { cn } from "@/lib/utils";

const Logo = ({ className, isPulsing = false }: { className?: string, isPulsing?: boolean }) => {
  return (
    <div className={cn("font-headline text-5xl font-bold text-primary text-glow", className, isPulsing && "animate-pulse-glow")}>
      FizziFlow
    </div>
  );
};

export default Logo;

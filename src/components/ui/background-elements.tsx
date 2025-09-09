
"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

const Particles = ({
  className,
  quantity = 100,
}: {
  className?: string;
  quantity?: number;
}) => {
  const [particles, setParticles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: quantity }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `particle-float ${
        Math.random() * 10 + 10
      }s ease-in-out infinite`,
      animationDelay: `-${Math.random() * 10}s`,
      transform: `scale(${Math.random() * 0.5 + 0.5})`,
    }));
    setParticles(newParticles);
  }, [quantity]);

  return (
    <div className={cn("absolute inset-0 z-0", className)}>
      {particles.map((style, i) => (
        <div
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-primary/80"
          style={style}
        />
      ))}
    </div>
  );
};

const GlassPanel = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <div
    className={cn(
      "absolute w-64 h-40 bg-white/5 backdrop-blur-sm border border-primary/20 rounded-lg shadow-lg animate-panel-float",
      className
    )}
    style={style}
  />
);

const WireframeCube = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <div className={cn("absolute w-24 h-24", className)} style={style}>
        <div className="relative w-full h-full transform-style-3d animate-spin-slow">
            <div className="absolute w-full h-full border-2 border-accent/50" style={{transform: 'rotateY(0deg) translateZ(48px)'}}></div>
            <div className="absolute w-full h-full border-2 border-accent/50" style={{transform: 'rotateY(90deg) translateZ(48px)'}}></div>
            <div className="absolute w-full h-full border-2 border-accent/50" style={{transform: 'rotateY(180deg) translateZ(48px)'}}></div>
            <div className="absolute w-full h-full border-2 border-accent/50" style={{transform: 'rotateY(-90deg) translateZ(48px)'}}></div>
            <div className="absolute w-full h-full border-2 border-accent/50" style={{transform: 'rotateX(90deg) translateZ(48px)'}}></div>
            <div className="absolute w-full h-full border-2 border-accent/50" style={{transform: 'rotateX(-90deg) translateZ(48px)'}}></div>
        </div>
    </div>
);


export { Particles, GlassPanel, WireframeCube };

"use client";
import { Input } from "@/components/ui/input";
import React from "react";

interface GlowInputProps extends React.ComponentProps<typeof Input> {
  icon?: React.ComponentType<{ className?: string }>;
}

export function GlowInput({ icon: Icon, ...props }: GlowInputProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-70" />
      <div className="relative flex items-center bg-black/40 backdrop-blur-sm rounded-lg border border-white/10">
        {Icon && <Icon className="ml-3 h-5 w-5 text-primary" />}
        <Input className="w-full bg-transparent px-3 py-2 text-white placeholder:text-white/50" {...props} />
      </div>
    </div>
  );
}

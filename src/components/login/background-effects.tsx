"use client";
import { motion } from "framer-motion";

export function BackgroundEffects() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute h-[500px] w-[500px] bg-gradient-conic from-primary/30 via-transparent to-transparent"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ filter: "blur(100px)", top: "-250px", left: "-250px" }}
      />
      <motion.div 
        className="absolute h-[400px] w-[400px] bg-gradient-conic from-accent/30 via-transparent to-transparent"
        animate={{ rotate: -360, scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ filter: "blur(80px)", bottom: "-200px", right: "-200px" }}
      />
    </div>
  );
}

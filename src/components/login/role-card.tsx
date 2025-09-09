"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

type RoleCardProps = {
  role: string;
  icon?: React.ComponentType<{ className?: string }>;
  href: string;
};

export function RoleCard({ role, icon: Icon, href }: RoleCardProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition-all duration-300" />
        <div className="relative p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10">
          {Icon && <Icon className="h-8 w-8 text-primary mb-3" />}
          <h3 className="text-lg font-semibold text-white">{role}</h3>
        </div>
      </motion.div>
    </Link>
  );
}

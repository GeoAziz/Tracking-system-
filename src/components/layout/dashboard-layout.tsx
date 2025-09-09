"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { NavLink } from '@/lib/types';

interface DashboardLayoutProps {
  children: React.ReactNode;
  navLinks: NavLink[];
  showBackgroundEffects?: boolean;
  backgroundElements?: React.ReactNode;
}

const SIDEBAR_WIDTH = {
  compact: '4rem',
  default: '16rem',
  expanded: '20rem'
};

export function DashboardLayout({ 
  children, 
  navLinks,
  showBackgroundEffects = false,
  backgroundElements
}: DashboardLayoutProps) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <div className={cn(
        "min-h-screen bg-gradient-to-br from-[#301934] via-background to-[#000000]",
        showBackgroundEffects && "overflow-hidden"
      )}>
        {backgroundElements && (
          <div className="fixed inset-0 pointer-events-none z-0">
            {backgroundElements}
          </div>
        )}

        <Sidebar 
          style={{ 
            '--sidebar-width': SIDEBAR_WIDTH.default,
            '--sidebar-collapsed-width': SIDEBAR_WIDTH.compact 
          } as React.CSSProperties}
          className="fixed top-0 left-0 z-40 h-screen bg-sidebar/95 backdrop-blur-xl border-r border-primary/10 shadow-xl transform transition-all duration-300 ease-in-out"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <SidebarHeader>
              <Logo className="text-2xl" />
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (index + 1) }}
                  >
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === link.href}
                        tooltip={link.label}
                        className={cn(
                          'data-[active=true]:bg-primary/20 data-[active=true]:text-primary data-[active=true]:scale-105',
                          'hover:bg-primary/10 hover:text-primary hover:scale-105',
                          'transition-all duration-300'
                        )}
                      >
                        <Link href={link.href}>
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            initial={{ scale: 0.9, opacity: 0.7 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <link.icon className="text-primary/80" />
                          </motion.div>
                          <span className="font-medium">{link.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </motion.div>
                ))}
              </SidebarMenu>
            </SidebarContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-2 mt-auto"
            >
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start gap-2 hover:bg-red-500/10 hover:text-red-500 transition-colors duration-300"
              >
                <Link href="/login">
                  <LogOut className="text-red-500/80" />
                  <span>Logout</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </Sidebar>

        <main className={cn(
          "transition-all duration-300 ease-in-out",
          "md:ml-[16rem]",
          "min-h-screen",
          "flex flex-col",
          "relative",
          showBackgroundEffects && "z-10"
        )}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex-1 w-full"
          >
            <Container size="default" className="py-4 md:py-6 lg:py-8">
              <div className="md:hidden flex justify-between items-center mb-4">
                <Logo className="text-2xl" />
                <SidebarTrigger />
              </div>
              <div className="space-y-6">
                {children}
              </div>
            </Container>
          </motion.div>
        </main>
      </div>
    </SidebarProvider>
  );
}


"use client"
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
import { adminNavLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';

const SIDEBAR_WIDTH = {
  compact: '4rem',
  default: '16rem',
  expanded: '20rem'
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#301934] via-background to-[#000000] overflow-hidden">
        <Sidebar 
          style={{ 
            '--sidebar-width': SIDEBAR_WIDTH.default,
            '--sidebar-collapsed-width': SIDEBAR_WIDTH.compact 
          } as React.CSSProperties}
          className="fixed top-0 left-0 z-40 h-screen bg-sidebar/95 backdrop-blur-xl border-r border-primary/10 shadow-xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <SidebarHeader>
              <Logo className="text-2xl" />
            </SidebarHeader>
          </motion.div>
          <SidebarContent>
            <SidebarMenu>
              {adminNavLinks.map((link) => (
                <SidebarMenuItem key={link.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === link.href}
                    tooltip={link.label}
                    className={cn(
                      'data-[active=true]:bg-primary/20 data-[active=true]:text-primary',
                      'hover:bg-primary/10 hover:text-primary'
                    )}
                  >
                    <Link href={link.href}>
                      <link.icon />
                      <span>{link.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
           <div className="p-2 mt-auto">
             <Button asChild variant="ghost" className="w-full justify-start gap-2 hover:bg-primary/10 hover:text-primary">
                <Link href="/login">
                  <LogOut />
                  <span>Logout</span>
                </Link>
             </Button>
          </div>
        </Sidebar>
        <main className={cn(
          "transition-all duration-300 ease-in-out",
          "md:ml-[16rem]",
          "min-h-screen",
          "flex flex-col"
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

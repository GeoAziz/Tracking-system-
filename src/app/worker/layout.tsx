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
  SidebarInset,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { Particles, GlassPanel, WireframeCube } from '@/components/ui/background-elements';
import { motion } from 'framer-motion';
import Logo from '@/components/logo';
import { workerNavLinks } from '@/lib/constants';

export default function WorkerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <div className="relative min-h-screen bg-gradient-to-br from-[#301934] via-background to-[#000000] overflow-x-hidden">
        {/* Animated 3D background elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <Particles quantity={120} />
          <GlassPanel className="top-16 left-8 opacity-20" />
          <GlassPanel className="bottom-24 right-12 opacity-20" />
          <WireframeCube className="top-1/2 left-1/3 opacity-30" />
          <WireframeCube className="bottom-8 right-1/4 opacity-30" />
        </div>

        {/* Sidebar - responsive with improved animations */}
          <Sidebar 
            className="fixed top-0 left-0 z-40 h-screen bg-sidebar/90 backdrop-blur-md border-r border-primary/10 shadow-xl transform transition-all duration-300 ease-in-out">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col h-full"
            >
              <SidebarHeader>
                <Logo className="text-2xl" />
              </SidebarHeader>
              <SidebarContent>
                <SidebarMenu>
                  {workerNavLinks.map((link, index) => (
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

        {/* Main Content - responsive wrapper */}
        <SidebarInset>
            {/* Mobile Header */}
            <div className="md:hidden flex justify-between items-center mb-4 p-4">
              <Logo className="text-2xl" />
              <SidebarTrigger />
            </div>

            <motion.main 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative min-h-screen w-full p-4 sm:p-6 lg:p-8 z-10"
            >
              {children}
            </motion.main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

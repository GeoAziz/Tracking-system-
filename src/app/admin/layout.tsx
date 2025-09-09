
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
import Logo from '@/components/logo';
import { adminNavLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#301934] via-background to-[#000000]">
        <Sidebar>
          <SidebarHeader>
            <Logo className="text-2xl" />
          </SidebarHeader>
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
        <SidebarInset>
            <main>
              <div className="md:hidden flex justify-between items-center p-4 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
                  <Logo className="text-2xl" />
                  <SidebarTrigger />
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                {children}
              </div>
            </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

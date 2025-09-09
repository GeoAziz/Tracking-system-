import { type LucideIcon } from "lucide-react";

export const SIDEBAR_WIDTH = {
  compact: '4rem',
  default: '16rem',
  expanded: '20rem'
} as const;

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface SidebarConfig {
  width?: typeof SIDEBAR_WIDTH[keyof typeof SIDEBAR_WIDTH];
  collapsedWidth?: typeof SIDEBAR_WIDTH[keyof typeof SIDEBAR_WIDTH];
  showBackground?: boolean;
  backgroundElements?: React.ReactNode;
}

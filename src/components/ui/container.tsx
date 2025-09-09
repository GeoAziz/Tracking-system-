import { cn } from "@/lib/utils";

export const Container = ({ 
  children, 
  size = "default",
  className 
}: { 
  children: React.ReactNode;
  size?: "sm" | "default" | "full";
  className?: string;
}) => {
  return (
    <div className={cn(
      "w-full mx-auto px-4",
      {
        "max-w-3xl": size === "sm",
        "max-w-[90%] xl:max-w-[1400px]": size === "default",
        "max-w-full": size === "full"
      },
      className
    )}>
      {children}
    </div>
  );
};

import { cn } from "@/lib/utils";

type AlertLevel = "high" | "medium" | "low";

interface AlertBadgeProps {
  level: AlertLevel;
  children: React.ReactNode;
}

export const AlertBadge = ({ level, children }: AlertBadgeProps) => {
  const baseClasses = "px-2 py-1 rounded-full text-sm font-medium";
  
  const levelClasses = {
    high: "bg-alert-red/10 text-alert-red",
    medium: "bg-alert-amber/10 text-alert-amber",
    low: "bg-alert-green/10 text-alert-green",
  };

  return (
    <span className={cn(baseClasses, levelClasses[level])}>
      {children}
    </span>
  );
};
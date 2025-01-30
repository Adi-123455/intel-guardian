import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const DashboardCard = ({ title, children, className = "" }: DashboardCardProps) => {
  return (
    <Card className={`bg-card shadow-lg animate-fade-in ${className}`}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
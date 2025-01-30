import { Card } from "@/components/ui/card";
import { ChartBar } from "lucide-react";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { AlertBadge } from "@/components/dashboard/AlertBadge";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <header className="mb-8 bg-card/50 p-6 rounded-lg backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-foreground mb-4 tracking-tight">Analytics Dashboard</h1>
        <div className="text-muted-foreground">Investigation metrics and insights</div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <DashboardCard title="Case Analytics">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChartBar className="h-5 w-5 text-primary" />
              <span className="font-mono text-lg">Updated</span>
            </div>
            <AlertBadge level="low">Real-time</AlertBadge>
          </div>
        </DashboardCard>

        <DashboardCard title="Success Rate">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChartBar className="h-5 w-5 text-alert-green" />
              <span className="font-mono text-lg">85%</span>
            </div>
            <AlertBadge level="low">Good</AlertBadge>
          </div>
        </DashboardCard>

        <DashboardCard title="Active Investigations">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChartBar className="h-5 w-5 text-alert-amber" />
              <span className="font-mono text-lg">32</span>
            </div>
            <AlertBadge level="medium">Ongoing</AlertBadge>
          </div>
        </DashboardCard>
      </div>

      <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/10">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-muted/20 rounded-lg">
              <h3 className="font-semibold mb-4">Case Resolution Time</h3>
              <div className="h-40 flex items-center justify-center">
                <p className="text-muted-foreground">Chart Placeholder</p>
              </div>
            </div>
            <div className="p-6 bg-muted/20 rounded-lg">
              <h3 className="font-semibold mb-4">Investigation Success Rate</h3>
              <div className="h-40 flex items-center justify-center">
                <p className="text-muted-foreground">Chart Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Analytics;
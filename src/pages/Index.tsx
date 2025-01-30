import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { AlertBadge } from "@/components/dashboard/AlertBadge";
import { QuickSearch } from "@/components/dashboard/QuickSearch";
import { Shield, AlertTriangle, FileText, Activity } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">Investigation Dashboard</h1>
        <QuickSearch />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Active Cases">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <span className="font-mono">24</span>
              </div>
              <AlertBadge level="high">8 High Priority</AlertBadge>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Recent Alerts">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-alert-amber" />
                <span className="font-mono">12</span>
              </div>
              <AlertBadge level="medium">4 New</AlertBadge>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="System Status">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-alert-green" />
                <span className="font-mono">All Systems Active</span>
              </div>
              <AlertBadge level="low">Operational</AlertBadge>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Security">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-mono">Secure</span>
              </div>
              <AlertBadge level="low">Protected</AlertBadge>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};

export default Index;
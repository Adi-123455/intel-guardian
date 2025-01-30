import { Card } from "@/components/ui/card";
import { FileText, Users, Search } from "lucide-react";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { AlertBadge } from "@/components/dashboard/AlertBadge";

const CaseManagement = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <header className="mb-8 bg-card/50 p-6 rounded-lg backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-foreground mb-4 tracking-tight">Case Management</h1>
        <div className="text-muted-foreground">Manage and track ongoing investigations</div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <DashboardCard title="Open Cases">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <span className="font-mono text-lg">15</span>
            </div>
            <AlertBadge level="high">5 Critical</AlertBadge>
          </div>
        </DashboardCard>

        <DashboardCard title="Assigned Investigators">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-mono text-lg">8</span>
            </div>
            <AlertBadge level="medium">Active</AlertBadge>
          </div>
        </DashboardCard>

        <DashboardCard title="Recent Updates">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              <span className="font-mono text-lg">24</span>
            </div>
            <AlertBadge level="low">Updated</AlertBadge>
          </div>
        </DashboardCard>
      </div>

      <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/10">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Recent Case Activities</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 bg-muted/20 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Case #{2024001 + i}</h3>
                    <p className="text-sm text-muted-foreground">Updated 2 hours ago</p>
                  </div>
                  <AlertBadge level={i === 1 ? "high" : i === 2 ? "medium" : "low"}>
                    {i === 1 ? "Critical" : i === 2 ? "Active" : "Pending"}
                  </AlertBadge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CaseManagement;
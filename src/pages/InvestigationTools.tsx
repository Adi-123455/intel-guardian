import { Card } from "@/components/ui/card";
import { Globe, Database, Network } from "lucide-react";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { AlertBadge } from "@/components/dashboard/AlertBadge";

const InvestigationTools = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <header className="mb-8 bg-card/50 p-6 rounded-lg backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-foreground mb-4 tracking-tight">Investigation Tools</h1>
        <div className="text-muted-foreground">Access and manage investigation resources</div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <DashboardCard title="Dark Web Scanner">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <span className="font-mono text-lg">Active</span>
            </div>
            <AlertBadge level="medium">Scanning</AlertBadge>
          </div>
        </DashboardCard>

        <DashboardCard title="Database Analysis">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              <span className="font-mono text-lg">Connected</span>
            </div>
            <AlertBadge level="low">Stable</AlertBadge>
          </div>
        </DashboardCard>

        <DashboardCard title="Network Monitor">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Network className="h-5 w-5 text-primary" />
              <span className="font-mono text-lg">Online</span>
            </div>
            <AlertBadge level="low">Active</AlertBadge>
          </div>
        </DashboardCard>
      </div>

      <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/10">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Available Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Image Analysis", status: "Available" },
              { name: "Network Tracker", status: "Active" },
              { name: "Data Extractor", status: "Available" },
              { name: "Pattern Analyzer", status: "Maintenance" }
            ].map((tool, i) => (
              <div key={i} className="p-4 bg-muted/20 rounded-lg">
                <h3 className="font-semibold">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.status}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InvestigationTools;
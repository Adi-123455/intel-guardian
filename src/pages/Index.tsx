import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { AlertBadge } from "@/components/dashboard/AlertBadge";
import { QuickSearch } from "@/components/dashboard/QuickSearch";
import { Shield, AlertTriangle, FileText, Activity, Scale, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <header className="mb-8 bg-card/50 p-6 rounded-lg backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-foreground mb-4 tracking-tight">Investigation Dashboard</h1>
        <QuickSearch />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <DashboardCard title="Active Cases">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <span className="font-mono text-lg">24</span>
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
                <span className="font-mono text-lg">12</span>
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
                <span className="font-mono text-lg">All Systems Active</span>
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
                <span className="font-mono text-lg">Secure</span>
              </div>
              <AlertBadge level="low">Protected</AlertBadge>
            </div>
          </div>
        </DashboardCard>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-6 text-foreground/90">
          <BookOpen className="h-6 w-6" />
          Guidelines & Regulations
        </h2>
        
        <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/10">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-foreground/90">
                <Scale className="h-5 w-5" />
                Legal Framework
              </h3>
              <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
                <li>All investigations must comply with relevant jurisdictional laws and regulations</li>
                <li>Evidence handling must maintain proper chain of custody</li>
                <li>All actions must be documented and logged for audit purposes</li>
                <li>Respect for privacy rights and data protection laws is mandatory</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground/90">Investigation Protocol</h3>
              <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
                <li>All cases require proper authorization before investigation</li>
                <li>Use appropriate security measures when handling sensitive data</li>
                <li>Regular case reviews and updates are mandatory</li>
                <li>Collaboration with relevant authorities must follow established procedures</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground/90">Data Handling</h3>
              <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
                <li>Sensitive data must be encrypted at rest and in transit</li>
                <li>Access to case information is strictly on a need-to-know basis</li>
                <li>Regular security audits and compliance checks are required</li>
                <li>Immediate reporting of any security incidents or breaches</li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-primary/5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Note: These guidelines are general in nature. Always refer to your organization's specific policies and procedures, 
                and consult with legal counsel when necessary.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
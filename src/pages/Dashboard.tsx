
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PlusCircle, FileText } from "lucide-react";
import { StepCard } from "@/components/ui/step-card";

export default function Dashboard() {
  // Mock data - in a real app, this would come from an API or state management
  const hasPortfolios = false;

  return (
    <Layout isAuthenticated={true}>
      <div className="container py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Welcome, Developer!</h1>
          <Button className="terminal-button" asChild>
            <Link to="/templates">
              <PlusCircle className="mr-2 h-4 w-4" />
              <span>New Portfolio</span>
            </Link>
          </Button>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StepCard
              id="step_01"
              title="Choose a Template"
              description="Select from our collection of developer-focused portfolio templates."
              linkHref="/templates"
              linkText="Browse Templates"
            />
            <StepCard
              id="step_02"
              title="Import Your Data"
              description="Connect your GitHub or LinkedIn to auto-import your experience."
              linkHref="/import"
              linkText="Connect Accounts"
            />
            <StepCard
              id="step_03"
              title="Export & Share"
              description="Export your portfolio as a PDF or get a shareable link."
              linkHref="/export"
              linkText="Export Options"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6">Your Portfolios</h2>
          {hasPortfolios ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Portfolio cards would be displayed here */}
            </div>
          ) : (
            <div className="border border-dashed border-border rounded-md p-10 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                <FileText className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-medium">No portfolios yet</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Create your first portfolio by selecting a template and importing your data.
              </p>
              <Button className="terminal-button" asChild>
                <Link to="/templates">Create Your First Portfolio</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

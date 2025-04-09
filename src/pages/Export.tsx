
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileDown, Link2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Export() {
  const { toast } = useToast();

  const handleExportPDF = () => {
    // In a real app, implement PDF export logic
    toast({
      title: "PDF Export Started",
      description: "Your portfolio is being exported to PDF...",
    });
    
    // Simulate export completion
    setTimeout(() => {
      toast({
        title: "Export Complete",
        description: "Your portfolio has been exported as PDF.",
      });
    }, 2000);
  };

  const handleCreateShareableLink = () => {
    // In a real app, implement shareable link creation logic
    toast({
      title: "Shareable Link Created",
      description: "Link copied to clipboard: portfolio.example.com/user",
    });
  };

  return (
    <Layout isAuthenticated={true}>
      <div className="container py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Export & Share</h1>
        <p className="text-muted-foreground mb-8">
          Export your portfolio or create a shareable link to send to potential employers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Export as PDF</CardTitle>
              <CardDescription>
                Get your portfolio as a professional, ATS-friendly PDF document.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                The PDF will include all sections of your portfolio and is optimized for
                printing and sharing via email.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="terminal-button w-full" onClick={handleExportPDF}>
                <FileDown className="mr-2 h-4 w-4" />
                Export PDF
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Create Shareable Link</CardTitle>
              <CardDescription>
                Generate a public URL that you can share with anyone.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                The link will provide access to an online version of your portfolio that
                updates whenever you make changes.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="terminal-button w-full" onClick={handleCreateShareableLink}>
                <Link2 className="mr-2 h-4 w-4" />
                Create Shareable Link
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-start">
          <Button variant="outline" className="terminal-button" asChild>
            <Link to="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}

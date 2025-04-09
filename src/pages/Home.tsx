
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TerminalWindow, TerminalLine, TerminalOutput } from "@/components/ui/terminal-window";
import { FeatureCard } from "@/components/ui/feature-card";

export default function Home() {
  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-3 py-1 bg-secondary/50 text-sm rounded-full">
            <span className="text-terminal-green">&lt;DevFolio /&gt;</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Create Your Dev Portfolio in
            <br />
            <span className="text-terminal-green">Minutes,</span>
            <span className="text-muted-foreground"> not Hours</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            A no-code platform for developers who want a professional portfolio
            <br />
            without wasting time on design.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button className="terminal-button text-lg py-6" size="lg" asChild>
              <Link to="/signup">Get Started →</Link>
            </Button>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <TerminalWindow>
              <TerminalLine>devfolio init</TerminalLine>
              <TerminalOutput type="info">Creating new portfolio...</TerminalOutput>
              <TerminalOutput type="info">Importing data from GitHub...</TerminalOutput>
              <TerminalOutput type="success">Portfolio created successfully!</TerminalOutput>
              <TerminalLine>devfolio export --format pdf</TerminalLine>
              <TerminalOutput type="success">Portfolio exported to portfolio.pdf</TerminalOutput>
              <div className="mt-1 text-terminal-prompt">
                $ <span className="animate-blink">_</span>
              </div>
            </TerminalWindow>
          </div>
        </div>
      </section>
      
      <section id="features" className="py-16 px-4 bg-black">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              id="feature_01"
              title="Quick Portfolio Creation"
              description="Choose from ATS-friendly templates and build your portfolio in minutes with our intuitive interface."
            />
            
            <FeatureCard
              id="feature_02"
              title="GitHub & LinkedIn Import"
              description="Auto-import your projects, skills, and experience directly from your GitHub and LinkedIn profiles."
            />
            
            <FeatureCard
              id="feature_03"
              title="Technical Templates"
              description="Choose from Terminal, GitHub README, or LinkedIn-style templates designed specifically for developers."
            />
            
            <FeatureCard
              id="feature_04"
              title="One-Click PDF Export"
              description="Export your portfolio as a professional, ATS-friendly PDF with a single click."
            />
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 bg-background border-t border-border">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Stop wasting time on design</h2>
          <p className="text-muted-foreground mb-8">Focus on what matters - your code and experience.</p>
          
          <Button className="terminal-button" size="lg" asChild>
            <Link to="/signup">Create Your Portfolio</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}

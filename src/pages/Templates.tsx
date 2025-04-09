
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TemplateCard } from "@/components/ui/template-card";

export default function Templates() {
  // Terminal template preview component
  const TerminalPreview = (
    <div className="text-xs text-white h-24 overflow-hidden">
      <div className="text-terminal-prompt">$ portfolio info</div>
      <div>name: Developer Portfolio</div>
      <div>skills: [JavaScript, React, Node]</div>
      <div>projects: 5</div>
      <div>experience: 3 years</div>
      <div className="text-terminal-prompt">$</div>
    </div>
  );

  // GitHub README preview component
  const GitHubPreview = (
    <div className="text-xs text-white h-24 overflow-hidden">
      <div className="font-bold mb-1">Developer Name</div>
      <div className="text-[10px] text-gray-400 mb-2">Full-stack developer specializing in React & Node</div>
      <div className="flex gap-1 mb-2">
        <span className="bg-gray-700 text-[10px] px-1 rounded">JavaScript</span>
        <span className="bg-gray-700 text-[10px] px-1 rounded">React</span>
        <span className="bg-gray-700 text-[10px] px-1 rounded">Node.js</span>
      </div>
      <div className="text-[10px]">Projects</div>
      <div className="text-[10px] text-gray-400">Project Name - Description...</div>
    </div>
  );

  // LinkedIn-Style preview component
  const LinkedInPreview = (
    <div className="text-xs flex items-start gap-2 h-24 overflow-hidden">
      <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-[10px]">DN</div>
      <div>
        <div className="font-bold text-white">Developer Name</div>
        <div className="text-[10px] text-gray-400">Full Stack Developer</div>
        <div className="mt-2">
          <div className="text-[10px]">Experience</div>
          <div className="text-[10px] text-gray-400">Senior Developer at Company</div>
          <div className="text-[10px] text-gray-400">2020 - Present</div>
        </div>
      </div>
    </div>
  );

  // Minimalist preview component
  const MinimalistPreview = (
    <div className="text-xs text-white h-24 overflow-hidden">
      <div>const developer = {"{"}</div>
      <div>  name: 'Developer Name',</div>
      <div>  role: 'Full-stack Developer',</div>
      <div>  skills: ['JavaScript', 'React', 'Node']</div>
      <div>{"}"}</div>
    </div>
  );

  return (
    <Layout isAuthenticated={true}>
      <div className="container py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Choose Your Template</h1>
        <p className="text-muted-foreground mb-8">
          Select a template that best showcases your skills and experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <TemplateCard
            id="template_terminal"
            title="Terminal"
            label="Technical"
            description="A developer-focused template inspired by terminal interfaces. Perfect for showcasing your technical skills with a command-line aesthetic."
            features={[
              { text: "Command line inspired interface" },
              { text: "Syntax highlighting for code snippets" },
              { text: "Terminal style sections for skills, projects, etc." },
              { text: "Monospace typography throughout" },
            ]}
            previewComponent={TerminalPreview}
          />

          <TemplateCard
            id="template_github"
            title="GitHub README"
            label="Clean"
            description="Modeled after GitHub's README format for a familiar developer experience. Great for developers who want their portfolio to feel like a code repository."
            features={[
              { text: "Markdown-style formatting" },
              { text: "Code block sections for projects" },
              { text: "GitHub-style stats and badges" },
              { text: "Repository-like structure" },
            ]}
            previewComponent={GitHubPreview}
          />

          <TemplateCard
            id="template_linkedin"
            title="LinkedIn-Style"
            label="Professional"
            description="Professional template similar to LinkedIn's profile layout. Ideal for those wanting a more traditional, recruiter-friendly format."
            features={[
              { text: "Timeline-based experience section" },
              { text: "Skills with endorsement indicators" },
              { text: "Professional profile header section" },
              { text: "Recommendation highlights" },
            ]}
            previewComponent={LinkedInPreview}
          />

          <TemplateCard
            id="template_minimalist"
            title="Minimalist Code"
            label="Modern"
            description="Ultra clean design with code-inspired visual elements. For developers who prefer a sleek, modern approach with subtle programming references."
            features={[
              { text: "Code syntax highlighting elements" },
              { text: "Variable declaration style sections" },
              { text: "Clean, distraction-free layout" },
              { text: "JSON inspired content structure" },
            ]}
            previewComponent={MinimalistPreview}
          />
        </div>

        <div className="flex justify-between">
          <Button variant="outline" className="terminal-button" asChild>
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <Button className="terminal-button" asChild>
            <Link to="/editor">
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}

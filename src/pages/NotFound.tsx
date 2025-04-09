
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="terminal-window max-w-sm mx-auto">
          <div className="terminal-header">
            <div className="dot-red"></div>
            <div className="dot-yellow"></div>
            <div className="dot-green"></div>
            <div className="ml-2 text-xs text-muted-foreground">error</div>
          </div>
          <div className="terminal-content p-6">
            <div className="text-terminal-red font-bold text-2xl mb-2">Error 404</div>
            <div className="text-terminal-yellow mb-4">Page not found</div>
            <div className="text-sm text-muted-foreground mb-4">
              The requested path could not be found in the file system.
            </div>
            <div className="text-terminal-green">
              $ navigate --to home <span className="animate-blink">_</span>
            </div>
          </div>
        </div>
        
        <Button className="terminal-button" asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}

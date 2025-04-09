
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-6 px-6 mt-auto">
      <div className="container flex flex-col md:flex-row items-center justify-center md:justify-between text-sm text-muted-foreground">
        <div className="mb-4 md:mb-0 flex items-center gap-1">
          <span>© {currentYear} DevFolio+ | Made for developers, by developers</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

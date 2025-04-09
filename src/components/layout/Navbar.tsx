
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuSeparator,  
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  isAuthenticated?: boolean;
}

export function Navbar({ isAuthenticated = false }: NavbarProps) {
  return (
    <header className="border-b border-border bg-background py-4 px-6">
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          <span className="text-primary">&lt;DevFolio+/&gt;</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-primary hover:text-white/80 transition-colors">
                Dashboard
              </Link>
              <Link to="/templates" className="text-primary hover:text-white/80 transition-colors">
                Templates
              </Link>
              <Link to="/export" className="text-primary hover:text-white/80 transition-colors">
                Export
              </Link>
              <Link to="/profile" className="text-primary hover:text-white/80 transition-colors">
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link to="/#features" className="text-primary hover:text-white/80 transition-colors">
                Features
              </Link>
              <Link to="/templates" className="text-primary hover:text-white/80 transition-colors">
                Templates
              </Link>
              <Link to="/pricing" className="text-primary hover:text-white/80 transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="text-primary hover:text-white/80 transition-colors">
                About
              </Link>
            </>
          )}
        </nav>

        {isAuthenticated ? (
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-secondary text-primary text-xs">
                      <User size={14} />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/signout">Sign Out</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Link to="/signin">
            <Button variant="outline" className="terminal-button">
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}

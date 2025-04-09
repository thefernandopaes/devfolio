
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, implement authentication logic here
    console.log("Sign in with:", email, password);
  };

  const handleGitHubSignIn = () => {
    // In a real app, implement GitHub OAuth logic here
    console.log("Sign in with GitHub");
  };

  return (
    <Layout>
      <div className="flex min-h-[calc(100vh-136px)] items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Sign In to DevFolio+</h1>
              <p className="text-muted-foreground text-sm">
                Let's build your developer portfolio
              </p>
            </div>

            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  className="form-input"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="text-xs text-muted-foreground hover:text-primary"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  className="form-input"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button className="w-full terminal-button" type="submit">
                Sign in with Email
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full terminal-button flex items-center justify-center gap-2"
              onClick={handleGitHubSignIn}
            >
              <Github size={16} />
              <span>Sign in with GitHub</span>
            </Button>

            <div className="mt-6 text-center text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-terminal-green hover:underline">
                Sign up now
              </Link>
            </div>
          </div>

          <div className="mt-4 text-center">
            <Button variant="link" asChild>
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary text-sm flex items-center justify-center"
              >
                ← Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

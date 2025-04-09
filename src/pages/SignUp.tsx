
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signUp, signInWithGithub, user, loading } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    
    await signUp(email, password, fullName);
  };

  const handleGitHubSignUp = () => {
    signInWithGithub();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-primary">Loading...</div>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <Layout>
      <div className="flex min-h-[calc(100vh-136px)] items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
              <p className="text-muted-foreground text-sm">
                Join DevFolio+ and build your perfect portfolio
              </p>
            </div>

            {error && (
              <div className="bg-destructive/20 text-destructive text-sm p-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  className="form-input"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

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
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  className="form-input"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Must be at least 6 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  className="form-input"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <Button className="w-full terminal-button" type="submit">
                Create Account
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  OR SIGN UP WITH
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full terminal-button flex items-center justify-center gap-2"
              onClick={handleGitHubSignUp}
            >
              <Github size={16} />
              <span>Sign up with GitHub</span>
            </Button>

            <div className="mt-6 text-center text-sm">
              Already have an account?{" "}
              <Link to="/signin" className="text-terminal-green hover:underline">
                Sign in
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

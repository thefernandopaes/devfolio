
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const handleSignOut = () => {
    // In a real app, implement sign out logic
    console.log("Sign out");
  };

  return (
    <Layout isAuthenticated={true}>
      <div className="container py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-6">Your Profile</h2>
            
            <div className="flex items-center">
              <Avatar className="h-20 w-20 mr-6">
                <AvatarFallback className="text-lg">
                  <User size={30} />
                </AvatarFallback>
              </Avatar>
              
              <div>
                <h3 className="text-lg font-medium">User</h3>
                <p className="text-terminal-green text-sm">Personal Info</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Account Settings</h2>
              <div className="text-sm px-3 py-1 bg-secondary rounded-md">
                Email Account
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Account Type</h3>
                <p>Email and Password</p>
              </div>
              
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Member Since</h3>
                <p>Unknown</p>
              </div>
              
              <Separator className="my-6" />
              
              <div>
                <h3 className="text-lg font-medium mb-4">Account Management</h3>
                <div className="grid grid-cols-1 gap-4">
                  <Button className="terminal-button">Change Password</Button>
                  <Button className="terminal-button">Edit Profile</Button>
                  <Button 
                    variant="destructive" 
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

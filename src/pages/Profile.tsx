
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ProfileData {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  github_username: string | null;
  linkedin_url: string | null;
  created_at: string;
}

export default function Profile() {
  const { user, signOut } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();
        
      if (error) {
        console.error('Error fetching profile:', error);
        throw error;
      }
      
      setProfileData(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast.error('Failed to load profile data');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const memberSince = user?.created_at ? formatDate(user.created_at) : 'Unknown';

  if (loading) {
    return (
      <Layout isAuthenticated={true}>
        <div className="container flex items-center justify-center py-16">
          <div className="animate-pulse text-primary">Loading profile data...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout isAuthenticated={true}>
      <div className="container py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-6">Your Profile</h2>
            
            <div className="flex items-center">
              <Avatar className="h-20 w-20 mr-6">
                {profileData?.avatar_url ? (
                  <AvatarImage src={profileData.avatar_url} alt={profileData.full_name || 'User'} />
                ) : (
                  <AvatarFallback className="text-lg">
                    <User size={30} />
                  </AvatarFallback>
                )}
              </Avatar>
              
              <div>
                <h3 className="text-lg font-medium">{profileData?.full_name || user?.email}</h3>
                <p className="text-terminal-green text-sm">Personal Info</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Account Settings</h2>
              <div className="text-sm px-3 py-1 bg-secondary rounded-md">
                {user?.app_metadata?.provider || 'Email'} Account
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Account Type</h3>
                <p>{user?.app_metadata?.provider ? `${user.app_metadata.provider} OAuth` : 'Email and Password'}</p>
              </div>
              
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Email</h3>
                <p>{user?.email}</p>
              </div>
              
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Member Since</h3>
                <p>{memberSince}</p>
              </div>
              
              <Separator className="my-6" />
              
              <div>
                <h3 className="text-lg font-medium mb-4">Account Management</h3>
                <div className="grid grid-cols-1 gap-4">
                  {!user?.app_metadata?.provider && (
                    <Button className="terminal-button">Change Password</Button>
                  )}
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

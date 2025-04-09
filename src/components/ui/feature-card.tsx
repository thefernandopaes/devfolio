
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function FeatureCard({ id, title, description, children }: FeatureCardProps) {
  return (
    <Card className="border border-border bg-card">
      <CardHeader>
        <div className="text-xs text-muted-foreground mb-2">{id}</div>
        <h3 className="text-lg font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        {children}
      </CardContent>
    </Card>
  );
}

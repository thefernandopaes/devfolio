
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface StepCardProps {
  id: string;
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
}

export function StepCard({
  id,
  title,
  description,
  linkHref,
  linkText,
}: StepCardProps) {
  return (
    <Card className="border border-border bg-card">
      <CardHeader>
        <div className="text-xs text-muted-foreground mb-1">{id}</div>
        <h3 className="text-lg font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <Button className="flex items-center" variant="ghost" asChild>
          <Link to={linkHref}>
            {linkText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

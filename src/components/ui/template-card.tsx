
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface TemplateFeature {
  text: string;
}

interface TemplateCardProps {
  id: string;
  title: string;
  label?: string;
  description: string;
  features: TemplateFeature[];
  previewComponent: React.ReactNode;
}

export function TemplateCard({
  id,
  title,
  label,
  description,
  features,
  previewComponent,
}: TemplateCardProps) {
  return (
    <Card className="border border-border bg-card">
      <CardHeader className="space-y-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            {label && (
              <Badge variant="outline" className="mb-2">
                {label}
              </Badge>
            )}
          </div>
          <div className="text-xs text-muted-foreground">{id}</div>
        </div>

        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm font-semibold">Features:</div>
        <ul className="text-sm space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span className="text-muted-foreground">{feature.text}</span>
            </li>
          ))}
        </ul>

        <Button className="w-full terminal-button" asChild>
          <Link to="/templates/use">Use This Template</Link>
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="text-xs text-muted-foreground text-right w-full">preview</div>
        <div className="w-full bg-black border border-border rounded-md p-4">
          {previewComponent}
        </div>
      </CardFooter>
    </Card>
  );
}

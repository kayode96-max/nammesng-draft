import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResourcesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Resources</CardTitle>
        <CardDescription>Access academic papers, industry reports, and more.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Resource materials will be displayed here.</p>
      </CardContent>
    </Card>
  );
}

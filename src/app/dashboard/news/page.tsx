import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">News</CardTitle>
        <CardDescription>Latest updates and announcements from NAMMES.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>News content will be displayed here.</p>
      </CardContent>
    </Card>
  );
}

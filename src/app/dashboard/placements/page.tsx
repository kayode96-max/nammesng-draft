import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PlacementsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">IT Placements</CardTitle>
        <CardDescription>Exclusive job and internship opportunities.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>IT placement listings will be displayed here.</p>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const placements = [
  {
    title: "Graduate Engineer Trainee (Materials)",
    company: "Shell Nigeria",
    location: "Lagos, Nigeria",
    type: "Full-time",
    posted: "2 days ago",
  },
  {
    title: "Metallurgical Engineering Intern (Summer 2025)",
    company: "TotalEnergies",
    location: "Port Harcourt, Nigeria",
    type: "Internship",
    posted: "1 week ago",
  },
  {
    title: "Process Engineer",
    company: "Dangote Group",
    location: "Kogi, Nigeria",
    type: "Full-time",
    posted: "3 weeks ago",
  },
  {
    title: "Corrosion Engineer",
    company: "NLNG",
    location: "Bonny Island, Nigeria",
    type: "Contract",
    posted: "1 month ago",
  },
];

export default function PlacementsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">IT Placements & Job Board</CardTitle>
        <CardDescription>Exclusive job and internship opportunities for NAMMES members.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {placements.map((job, index) => (
          <Card key={index} className="p-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="sm:col-span-2">
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-2">
                 <Badge variant={job.type === 'Internship' ? 'secondary' : 'default'}>
                  {job.type}
                </Badge>
                <p className="text-xs text-muted-foreground">Posted {job.posted}</p>
              </div>
            </div>
             <div className="mt-4 flex justify-end">
              <Button>View Details</Button>
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}

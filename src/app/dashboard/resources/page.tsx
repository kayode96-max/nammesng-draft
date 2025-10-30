import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const resources = [
  {
    title: "Advanced Composite Materials: A Comprehensive Review",
    type: "Research Paper",
    date: "2024-07-15",
    icon: FileText
  },
  {
    title: "Webinar: Career Paths in Metallurgy",
    type: "Webinar Recording",
    date: "2024-07-22",
    icon: Video
  },
  {
    title: "Non-Destructive Testing Techniques for Modern Manufacturing",
    type: "Industry Report",
    date: "2024-06-30",
    icon: FileText
  },
  {
    title: "Introduction to Computational Materials Science with Python",
    type: "E-book",
    date: "2024-06-10",
    icon: FileText
  },
    {
    title: "Conference Proceedings: NAMMES 2023",
    type: "Conference Papers",
    date: "2023-12-20",
    icon: FileText
  },
];

export default function ResourcesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Resource Library</CardTitle>
        <CardDescription>Access academic papers, industry reports, webinar recordings, and more.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden md:table-cell text-right">Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resources.map((resource) => (
              <TableRow key={resource.title}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <resource.icon className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <div className="font-medium">{resource.title}</div>
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    {resource.type}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell text-right">{resource.date}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

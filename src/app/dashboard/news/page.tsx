import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    title: "Annual Conference 2024 Registration Now Open",
    date: "August 5, 2024",
    category: "Announcement",
    snippet: "Register now for our flagship annual conference, featuring keynote speakers from top industry firms and groundbreaking research presentations. Early bird discounts available until September 1st."
  },
  {
    title: "Breakthrough in Sustainable Alloy Development by NAMMES Alumnus",
    date: "August 2, 2024",
    category: "Research",
    snippet: "Dr. Amina Yusuf, a proud NAMMES alumnus from Ahmadu Bello University, has published a paper on a new lightweight, high-strength alloy with significant potential for the aerospace industry."
  },
  {
    title: "Webinar Series: 'The Future of Metallurgy' Kicks Off",
    date: "July 28, 2024",
    category: "Event",
    snippet: "Join us for a 4-part webinar series exploring the impact of AI, nanotechnology, and sustainable practices on the future of materials science and engineering. First session starts August 15th."
  },
  {
    title: "NAMMES Partners with Tech-Innovate to Launch Student Internship Program",
    date: "July 25, 2024",
    category: "Partnership",
    snippet: "We are thrilled to announce a new partnership that will provide exclusive internship opportunities for our final-year students at one of the nation's leading technology and manufacturing firms."
  }
];

export default function NewsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">News & Announcements</CardTitle>
        <CardDescription>The latest updates, research highlights, and events from the NAMMES community.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {newsItems.map((item, index) => (
          <div key={index} className="border-b pb-6 last:border-b-0">
            <div className="flex items-start justify-between">
              <div>
                <Badge variant="outline" className="mb-2">{item.category}</Badge>
                <h3 className="text-lg font-semibold font-headline">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.date}</p>
              </div>
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">Read More</Button>
            </div>
            <p className="mt-2 text-muted-foreground">{item.snippet}</p>
            <Button variant="link" size="sm" className="sm:hidden px-0">Read More</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

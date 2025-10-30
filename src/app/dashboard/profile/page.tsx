import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { placeholderImages } from "@/lib/placeholder-images";
import { Briefcase, Building, Mail, MapPin, Phone } from "lucide-react";

export default function ProfilePage() {
  const userAvatar1 = placeholderImages.find(p => p.id === 'user-avatar-1');

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="flex flex-col items-center text-center space-y-4 p-6">
          <Avatar className="h-32 w-32 border-4 border-primary">
            {userAvatar1 && <AvatarImage src={userAvatar1.imageUrl} alt="John Doe" />}
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <CardTitle className="text-3xl font-headline">John Doe</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">Materials Engineer</CardDescription>
            <p className="text-sm text-muted-foreground pt-2">Certificate ID: NAMMES-2024-0001</p>
          </div>
          <Badge>Active Member</Badge>
        </CardHeader>
        <CardContent className="p-6 border-t">
          <Button className="w-full">Edit Profile</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 text-sm">
          <div className="flex items-center gap-4">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <span>john.doe@example.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <span>+234 801 234 5678</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <span>Lagos, Nigeria</span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Professional & Academic Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 text-sm">
          <div className="flex items-center gap-4">
            <Briefcase className="h-5 w-5 text-muted-foreground" />
            <span>Materials Engineer at Tech-Innovate Inc.</span>
          </div>
          <div className="flex items-center gap-4">
            <Building className="h-5 w-5 text-muted-foreground" />
            <span>Alumnus of Federal University of Technology, Owerri</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { placeholderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const members = [
  {
    id: "1",
    name: "Dr. Chinedu Okoro",
    title: "Senior Lecturer",
    institution: "University of Nigeria, Nsukka",
    avatarId: "user-avatar-1",
    fallback: "CO",
  },
  {
    id: "2",
    name: "Fatima Bello",
    title: "Final Year Student",
    institution: "Ahmadu Bello University, Zaria",
    avatarId: "user-avatar-2",
    fallback: "FB",
  },
  {
    id: "3",
    name: "Tunde Adebayo",
    title: "Materials Engineer",
    institution: "Dangote Cement",
    avatarId: "user-avatar-1",
    fallback: "TA",
  },
  {
    id: "4",
    name: "Aisha Ibrahim",
    title: "PhD Candidate",
    institution: "Federal University of Technology, Akure",
    avatarId: "user-avatar-2",
    fallback: "AI",
  },
  {
    id: "5",
    name: "Emeka Nwosu",
    title: "Quality Control Manager",
    institution: "Innoson Vehicle Manufacturing",
    avatarId: "user-avatar-1",
    fallback: "EN",
  },
  {
    id: "6",
    name: "Zainab Aliyu",
    title: "M.Eng Student",
    institution: "University of Lagos",
    avatarId: "user-avatar-2",
    fallback: "ZA",
  },
];

export default function PeoplePage() {
  const userAvatar1 = placeholderImages.find(p => p.id === 'user-avatar-1');
  const userAvatar2 = placeholderImages.find(p => p.id === 'user-avatar-2');

  const getAvatarUrl = (avatarId: string) => {
    if (avatarId === 'user-avatar-1') return userAvatar1?.imageUrl;
    if (avatarId === 'user-avatar-2') return userAvatar2?.imageUrl;
    return '';
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="font-headline">Member Directory</CardTitle>
        <CardDescription>Connect with other NAMMES students, academics, and professionals.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <Card key={member.name} className="flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
            <CardContent className="flex flex-col items-center text-center p-6 flex-grow">
              <Avatar className="h-20 w-20 mb-4">
                <AvatarImage src={getAvatarUrl(member.avatarId)} alt={member.name} />
                <AvatarFallback>{member.fallback}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{member.institution}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/dashboard/profile`}>View Profile</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}

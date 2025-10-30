import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { placeholderImages } from "@/lib/placeholder-images";

export default function GalleryPage() {
  const galleryImages = placeholderImages.filter(p => p.id.startsWith('gallery'));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Gallery</CardTitle>
        <CardDescription>Moments from our conferences, workshops, and events.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={400}
                className="aspect-video w-full object-cover transition-transform hover:scale-105"
                data-ai-hint={image.imageHint}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
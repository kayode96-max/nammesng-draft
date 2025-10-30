import Image from "next/image";
import Link from "next/link";
import { BookOpen, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { placeholderImages } from "@/lib/placeholder-images";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === 'hero');
  const feature1Image = placeholderImages.find(p => p.id === 'feature1');
  const aboutImage = placeholderImages.find(p => p.id === 'about');

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover -z-10 brightness-[.4]"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="container px-4 md:px-6 text-white animate-fade-in-up">
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Advancing Materials and Metallurgical Engineering in Nigeria
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90">
                Join the foremost community of students and professionals. Grow your career, network with experts, and access exclusive resources.
              </p>
              <div>
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/membership">Become a Member</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Benefits</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Why Join NAMMES?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Membership unlocks a world of opportunities, from professional development to lifelong connections.
              </p>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1 text-center transition-all hover:scale-105">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-headline">Professional Networking</h3>
                <p className="text-muted-foreground">
                  Connect with peers, mentors, and industry leaders from across Nigeria. Build relationships that last a lifetime.
                </p>
              </div>
              <div className="grid gap-1 text-center transition-all hover:scale-105">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-headline">Exclusive Resources</h3>
                <p className="text-muted-foreground">
                  Gain access to a curated library of academic papers, industry reports, and career development materials.
                </p>
              </div>
              <div className="grid gap-1 text-center transition-all hover:scale-105">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-headline">Career Opportunities</h3>
                <p className="text-muted-foreground">
                  Explore job postings and IT placement opportunities exclusive to NAMMES members.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">About NAMMES NG</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The Nigerian Association of Materials and Metallurgical Engineering Students (NAMMES) is the national body for students in this dynamic field. Our mission is to foster academic excellence, promote professional development, and create a unified community for future engineers.
              </p>
              <ul className="grid gap-2 py-4">
                <li>
                  <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:pb-0">
                    <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-primary" />
                    <div className="grid gap-1">
                      <h3 className="font-bold">Unity and Progress</h3>
                      <p className="text-sm text-muted-foreground">Connecting students from institutions all over the nation.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:pb-0">
                    <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-primary" />
                    <div className="grid gap-1">
                      <h3 className="font-bold">Bridging Academia and Industry</h3>
                      <p className="text-sm text-muted-foreground">Creating pathways for students to gain practical experience and career insights.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last transition-all hover:scale-105"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Explore the Member Portal</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our secure member-only portal is your gateway to all NAMMES benefits.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent to-60%"></div>
              {feature1Image && (
                <Image
                  src={feature1Image.imageUrl}
                  alt={feature1Image.description}
                  width={1200}
                  height={800}
                  className="mx-auto rounded-lg shadow-2xl"
                  data-ai-hint={feature1Image.imageHint}
                />
              )}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <Button asChild size="lg" className="font-semibold shadow-lg">
                  <Link href="/login">Login to Access</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

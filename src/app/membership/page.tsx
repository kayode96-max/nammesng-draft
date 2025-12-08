import MembershipForm from "@/components/membership-form";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function MembershipPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <Card className="w-full max-w-2xl my-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline">Join NAMMES</CardTitle>
            <CardDescription>
              Complete the form below to begin your journey with us.
            </CardDescription>
          </CardHeader>
          <MembershipForm />
        </Card>
      </main>
      <SiteFooter />
    </>
  );
}

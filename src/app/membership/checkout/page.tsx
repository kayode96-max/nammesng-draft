"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function CheckoutPage() {
  const router = useRouter();
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = () => {
    // Simulate API call to payment gateway
    setIsConfirming(true);
    setTimeout(() => {
      setIsConfirming(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <>
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Complete Your Registration</CardTitle>
            <CardDescription>Review your membership fee and confirm payment.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center border rounded-lg p-4">
              <span className="text-muted-foreground">Annual Membership Fee</span>
              <span className="font-bold text-lg">NGN 10,000</span>
            </div>
            <div className="text-xs text-muted-foreground">
              This is a simulated payment gateway for demonstration purposes. No real transaction will be made.
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={() => handlePayment()}>
              <CreditCard className="mr-2 h-4 w-4" /> Pay Now
            </Button>
          </CardFooter>
        </Card>

        {/* Confirmation Dialog */}
        <Dialog open={isConfirming} onOpenChange={setIsConfirming}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Your Payment</DialogTitle>
              <DialogDescription>
                You are about to complete your NAMMES membership registration.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p>Amount: <strong>NGN 10,000</strong></p>
              <p>This is a simulated payment. Click confirm to proceed.</p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsConfirming(false)}>Cancel</Button>
              <Button onClick={handlePayment}>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Success Dialog */}
        <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
          <DialogContent className="sm:max-w-md text-center">
            <DialogHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary mb-4">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <DialogTitle className="text-center font-headline text-2xl">Payment Successful!</DialogTitle>
              <DialogDescription className="text-center">
                Welcome to NAMMES! Your account has been created.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-2">
              <p>Your unique <strong>Certificate ID</strong> and a <strong>temporary password</strong> have been sent to your email address.</p>
              <p className="text-muted-foreground text-sm">You will be required to change your password on first login.</p>
            </div>
            <DialogFooter className="sm:justify-center">
              <Button type="button" onClick={() => router.push('/login')}>
                Proceed to Login
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
      <SiteFooter />
    </>
  );
}

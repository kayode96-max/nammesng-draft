import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center overflow-hidden pt-20">
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-600/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-500/10 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="text-center space-y-6">
        <h1 className="font-headline text-6xl font-bold text-foreground">404</h1>
        <p className="text-2xl text-muted-foreground">Page not found</p>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Link href="/">
          <Button className="gradient-btn px-8 py-3 shadow-lg hover:shadow-green-500/50 transition-all duration-300">
            Back to Home
          </Button>
        </Link>
      </div>
    </main>
  )
}

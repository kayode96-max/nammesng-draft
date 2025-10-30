import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import LoginForm from "@/components/login-form"

export default function LoginPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-headline">Member Login</CardTitle>
            <CardDescription>
              Enter your Certificate ID to access the portal.
            </CardDescription>
          </CardHeader>
          <
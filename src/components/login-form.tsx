"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CardContent, CardFooter } from "@/components/ui/card"

const formSchema = z.object({
  certificateId: z.string().min(1, "Certificate ID is required"),
  password: z.string().min(1, "Password is required"),
})

export default function LoginForm() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      certificateId: "",
      password: "",
    },
  })

  // TODO: Implement actual login logic
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Simulate successful login
    router.push("/dashboard")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <FormField
            control={form.control}
            name="certificateId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Certificate ID</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., NAMMES-2024-0001" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full">Login</Button>
          <Button variant="link" size="sm" asChild className="w-full">
            <Link href="/forgot-password">Forgot password?</Link>
          </Button>
        </CardFooter>
      </form>
    </Form>
  )
}

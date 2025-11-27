"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2, Package2 } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { createClient } from "@/lib/supabase/client"

const formSchema = z.object({
  email: z.string().email({
    message: "Email tidak valid.",
  }),
  password: z.string().min(6, {
    message: "Password minimal 6 karakter.",
  }),
})

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const supabase = createClient()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      })

      if (error) {
        toast.error("Login gagal", {
          description: error.message,
        })
        return
      }

      toast.success("Login berhasil", {
        description: "Mengalihkan ke dashboard...",
      })
      
      router.push("/dashboard")
      router.refresh()
    } catch (error) {
      toast.error("Terjadi kesalahan", {
        description: "Silakan coba lagi nanti.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/50 px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold">
              {/* <Package2 className="h-6 w-6" /> */}
              <span>PT. PUTRAMAS MULIA JAYA</span>
            </Link>
          </div>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Masukkan email dan password untuk masuk ke dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="name@example.com" {...field} />
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
                        <Input placeholder="••••••••" type="password" {...field} />
                      </FormControl>
                    <div className="flex items-center justify-between">
                      <Link
                        href="#"
                        className="text-sm font-medium text-muted-foreground hover:underline"
                        onClick={(e) => {
                          e.preventDefault()
                          toast.info("Fitur Reset Password", {
                            description: "Silakan hubungi administrator untuk reset password.",
                          })
                        }}
                      >
                        Lupa password?
                      </Link>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sign In
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Belum punya akun?{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-primary" onClick={(e) => {
               e.preventDefault()
               toast.info("Pendaftaran Akun", {
                 description: "Pendaftaran hanya bisa dilakukan oleh admin.",
               })
            }}>
              Hubungi Admin
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

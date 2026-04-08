"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Lock } from "lucide-react"

const ADMIN_PASSWORD = "sims@admin2025"

export default function LoginPage() {
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (password === ADMIN_PASSWORD) {
        localStorage.setItem("adminAuthenticated", "true")
        toast({
          title: "Login Successful",
          description: "Welcome to the SIMS admin dashboard.",
        })
        router.push("/admin/dashboard")
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid password. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-500 via-[#0f2038] to-navy-500">
      <div className="bg-white dark:bg-navy-400 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gold-100 dark:border-navy-300">
        <div className="text-center mb-8">
          {/* Mini logo */}
          <div className="mx-auto w-16 h-16 mb-4">
            <svg viewBox="0 0 64 68" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="loginShield" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#0A1628" }} />
                  <stop offset="100%" style={{ stopColor: "#1a2d4a" }} />
                </linearGradient>
                <linearGradient id="loginGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#C9A84C" }} />
                  <stop offset="50%" style={{ stopColor: "#E8D48B" }} />
                  <stop offset="100%" style={{ stopColor: "#C9A84C" }} />
                </linearGradient>
              </defs>
              <path d="M32 2 L58 14 L58 36 C58 50 46 60 32 64 C18 60 6 50 6 36 L6 14 Z" fill="url(#loginShield)" stroke="url(#loginGold)" strokeWidth="2.5" />
              <text x="32" y="42" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="bold" fontSize="18" fill="url(#loginGold)">SIMS</text>
            </svg>
          </div>
          <h1 className="font-heading text-2xl font-bold text-navy-500 dark:text-white">Admin Login</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">Siddharth Institute of Management Science</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-navy-500 font-semibold" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  )
}

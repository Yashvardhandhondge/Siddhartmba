import "../lib/react-polyfill" // Import the polyfill first
import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { Providers } from "./providers"
import Footer from "@/components/layout/footer"
import PageLayout from "@/components/layout/page-layout"
import FloatingApplyButton from "@/components/layout/floating-apply-button"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: {
    default: "Siddharth Institute of Management Science | MBA College, Chhatrapati Sambhajinagar",
    template: "%s | Siddharth Institute of Management Science"
  },
  description: "Siddharth Institute of Management Science (SIMS) offers a 2-year full-time MBA program affiliated to Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhajinagar. AICTE Approved.",
  keywords: "MBA, management, business administration, SIMS, Siddharth Institute, Chhatrapati Sambhajinagar, Aurangabad, Dr BAMU, AICTE, MBA college, placement, management education",
  openGraph: {
    title: "Siddharth Institute of Management Science | SIMS",
    description: "Shape Tomorrow's Leaders — Premier MBA education affiliated to Dr. Babasaheb Ambedkar Marathwada University",
    type: "website",
    locale: "en_IN",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-body`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <PageLayout>
              <main className="flex-1">{children}</main>
            </PageLayout>
            <Footer />
            <FloatingApplyButton />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}

import { Inter as FontSans } from "@next/font/google"


import "@/styles/globals.css"

import { cn } from "@/lib/utils"
import { Toaster } from "@/ui/toast"
import { Help } from "@/components/help"
import { Analytics } from "@/components/analytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
  //weight: ["400"],
})

interface RootLayoutProps {
  children: React.ReactNode
}

export function reportWebVitals(metric) {
  console.log(metric)
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="sk"
      className={cn(
        "bg-white font-sans text-slate-900 antialiased",
        fontSans.variable
      )}
    >
      <head />
      <body className="min-h-screen">
        {children}
        
        <Analytics />
        <Help />
        <Toaster position="bottom-right" />
        <TailwindIndicator />
      </body>
    </html>
  )
}

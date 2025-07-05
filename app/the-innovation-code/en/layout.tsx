import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./../../globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "The Innovation Code - C-SQUAD",
  description: "Build Smarter. Sell Faster. Grow with Purpose",
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

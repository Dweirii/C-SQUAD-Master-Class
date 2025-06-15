import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Cairo } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
})

export const metadata: Metadata = {
  title: "The Innovation Code - C-SQUAD",
  description: "Build Smarter. Sell Faster. Grow with Purpose",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${cairo.variable}`}>{children}</body>
    </html>
  )
}

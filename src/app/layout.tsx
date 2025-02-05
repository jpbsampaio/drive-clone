import "../styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { ClerkProvider } from '@clerk/nextjs'
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Google Drive Clone",
  description: "A basic Google Drive clone UI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}


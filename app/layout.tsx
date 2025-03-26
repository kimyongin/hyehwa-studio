import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "혜화 녹음실 | Hyehwa Recording Studio",
  description: "혜화역 도보 10분 거리에 위치한 조용하고 차분한 분위기의 스튜디오",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-900 text-zinc-100`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'
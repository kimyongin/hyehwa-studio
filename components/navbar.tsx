"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "소개", href: "/about" },
  { name: "프로젝트", href: "/project" },
  { name: "연혁", href: "/history" },
  { name: "장비", href: "/gear" },
  { name: "가격", href: "/pricing" },
  { name: "문의", href: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-zinc-900/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white flex items-center">
            <span className="text-red-500 mr-1">●</span> 혜화 녹음실
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-zinc-300 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-zinc-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}


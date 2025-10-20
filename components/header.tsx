"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/pch-logo.jpg"
            alt="Papamoa Counselling Hub"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-semibold">Papamoa Counselling Hub</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/pch-logo.jpg"
              alt="Papamoa Counselling Hub"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-xl font-semibold">Papamoa Counselling Hub</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="container grid gap-6 px-4 py-6">
          <Link href="/" className="text-lg font-medium hover:underline underline-offset-4" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/#contact" className="text-lg font-medium hover:underline underline-offset-4" onClick={toggleMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

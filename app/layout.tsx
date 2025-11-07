import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Papamoa Counselling Hub | Professional Counselling Services in Tauranga",
    template: "%s | Papamoa Counselling Hub"
  },
  description: "Professional counselling services with Mandy Fisher, a qualified and experienced counsellor in Papamoa, Tauranga. Specializing in trauma recovery, anxiety, depression, grief, and emotional wellbeing. Book a session today.",
  keywords: [
    "counselling Papamoa",
    "counsellor Tauranga",
    "therapy Papamoa",
    "trauma counselling",
    "anxiety counselling",
    "depression counselling",
    "grief counselling",
    "counselling services Bay of Plenty",
    "Mandy Fisher counsellor",
    "NZAC registered counsellor",
    "ACC registered counsellor",
    "online counselling New Zealand",
    "counselling near me"
  ],
  authors: [{ name: "Mandy Fisher" }],
  creator: "Papamoa Counselling Hub",
  publisher: "Papamoa Counselling Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://papamoacounsellinghub.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://papamoacounsellinghub.com',
    title: 'Papamoa Counselling Hub | Professional Counselling Services',
    description: 'Professional counselling services with Mandy Fisher in Papamoa, Tauranga. Specializing in trauma recovery, anxiety, depression, and emotional wellbeing.',
    siteName: 'Papamoa Counselling Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Papamoa Counselling Hub | Professional Counselling Services',
    description: 'Professional counselling services with Mandy Fisher in Papamoa, Tauranga. Specializing in trauma recovery, anxiety, depression, and emotional wellbeing.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

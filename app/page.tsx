"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Mail, Phone, CheckCircle, MapPin, Send, Tag } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Papamoa Counselling Hub",
    "description": "Professional counselling services with Mandy Fisher, a qualified and experienced counsellor in Papamoa, Tauranga. Specializing in trauma recovery, anxiety, depression, grief, and emotional wellbeing.",
    "url": "https://papamoacounsellinghub.com",
    "telephone": "+6421516330",
    "email": "papamoacounsellinghub@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Papamoa",
      "addressRegion": "Bay of Plenty",
      "addressCountry": "NZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-37.7167",
      "longitude": "176.3000"
    },
    "areaServed": {
      "@type": "City",
      "name": "Papamoa"
    },
    "serviceType": [
      "Counselling",
      "Trauma Therapy",
      "Anxiety Counselling",
      "Depression Counselling",
      "Grief Counselling",
      "Online Counselling"
    ],
    "provider": {
      "@type": "Person",
      "name": "Mandy Fisher",
      "jobTitle": "Qualified Counsellor",
      "memberOf": {
        "@type": "Organization",
        "name": "New Zealand Association of Counsellors (NZAC)"
      },
      "credential": [
        "Qualified Counsellor MNZAC",
        "ACC Registered"
      ]
    },
    "priceRange": "$130+GST",
    "openingHours": "Tu-Th 09:00-17:00"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="flex flex-col min-h-screen w-full relative overflow-x-hidden">
        {/* Coastal Background Textures */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-amber-50/20 to-teal-50/30"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Hero Section */}
      <div ref={heroRef} className="relative min-h-[41vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
         <div className="absolute inset-0">
           <Image
             src="/images/papamoa-beach-hero.jpg"
             alt="Papamoa Beach pathway at sunset - peaceful coastal setting for counselling sessions in Tauranga, New Zealand"
             fill
             className="object-cover"
             style={{ 
               objectPosition: 'center 40%',
               transform: `translateY(${scrollY * 0.15}px)`,
               willChange: 'transform'
             }}
             quality={95}
             priority
             sizes="100vw"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-teal-900/40 to-blue-800/60" />
           <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/20 to-transparent"></div>
         </div>

        {/* Welcome Text with Fade-in Animation */}
        <div className="relative z-10 text-center animate-fade-in space-y-4 sm:space-y-6 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
              Welcome to Papamoa Counselling Hub
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-2xl mx-auto">
            <Button 
              asChild
              className="bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 hover:from-blue-700 hover:via-teal-700 hover:to-emerald-700 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto min-w-[200px]"
            >
              <Link href="/#contact">
                Book a Session
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/20 hover:border-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto min-w-[200px]"
            >
              <Link href="/#contact">
                Ask a Question
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="relative z-10 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container px-4 py-12 md:px-6 md:py-24 relative">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 md:grid-cols-[1.2fr_2fr] lg:grid-cols-[1.1fr_2fr]">
              {/* Sidebar with photo and contact info */}
              <div className="flex flex-col items-center md:items-start gap-6">
                <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 overflow-hidden rounded-full border-4 border-blue-100 shadow-2xl ring-4 ring-blue-50/50">
                  <Image
                    src="/images/mandy-profile.jpg"
                    alt="Mandy Fisher - Qualified Counsellor MNZAC and ACC Registered providing professional counselling services in Papamoa, Tauranga"
                    width={320}
                    height={320}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 sm:space-y-5 text-center md:text-left w-full">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">Mandy Fisher</h2>
                    <p className="text-blue-600 font-medium text-sm sm:text-base">Qualified Counsellor MNZAC</p>
                    <p className="text-blue-600 font-medium text-sm sm:text-base">ACC Registered</p>
                  </div>
                  <div className="flex flex-col gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-blue-100/50 w-full">
                    <div className="flex items-center gap-3 text-slate-900 min-w-0">
                      <div className="p-2 rounded-lg bg-blue-50 flex-shrink-0">
                        <Mail className="h-4 w-4 text-blue-600" />
                      </div>
                      <a 
                        href="mailto:papamoacounsellinghub@gmail.com"
                        className="text-xs sm:text-sm break-all sm:whitespace-nowrap text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200"
                      >
                        papamoacounsellinghub@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-slate-900">
                      <div className="p-2 rounded-lg bg-blue-50">
                        <Phone className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-sm">021 516 330</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 hover:from-blue-700 hover:via-teal-700 hover:to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <Link href="/#contact">Book a Session</Link>
                  </Button>
                </div>

                {/* Session Information */}
                <div className="space-y-4 w-full">
                  <h3 className="text-xl font-bold text-slate-900 text-center md:text-left">Session Information</h3>
                  <div className="grid gap-4 grid-cols-1">
                    <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-blue-50 flex-shrink-0">
                            <Clock className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm mb-1">Session Duration</h4>
                            <p className="text-slate-800 text-xs">50 minutes</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-blue-50 flex-shrink-0">
                            <Tag className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm mb-1">Session Fee</h4>
                            <p className="text-slate-800 text-xs">$130+GST</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-blue-50 flex-shrink-0">
                            <Calendar className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm mb-1">Availability</h4>
                            <p className="text-slate-800 text-xs">Tuesday - Thursday</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="space-y-6 sm:space-y-8">
                <div id="your-counsellor" className="space-y-4 sm:space-y-5 scroll-mt-20">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">Your Counsellor</span>
                  </h3>
                  <div className="space-y-4 text-slate-900 leading-relaxed text-base sm:text-lg">
                    <p>
                      I&apos;m Mandy Fisher, a <strong className="font-semibold text-slate-900">qualified and experienced counsellor</strong> based in Papamoa, Tauranga Moana.
                    </p>
                    <p>
                      With many years of experience in <strong className="font-semibold text-slate-900">trauma recovery, and emotional wellbeing</strong>, my approach is <strong className="font-semibold text-slate-900">authentic, compassionate, and grounded in professionalism</strong>. I work alongside you to help navigate life&apos;s challenges and find a way forward that feels <strong className="font-semibold text-slate-900">healing and hopeful</strong>.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">My Approach</h3>
                  <div className="space-y-4 text-slate-900 leading-relaxed text-base sm:text-lg">
                    <p>
                      My work is grounded in the belief that <strong className="font-semibold text-slate-900">healing happens through safe and trusting relationships</strong>.
                    </p>
                    <p>
                      I integrate <strong className="font-semibold text-slate-900">trauma-informed and somatic approaches</strong>, supporting awareness of both body and mind. Together we explore your experiences at a pace that feels right for you, allowing insight and change to unfold naturally.
                    </p>
                    <p>
                      My intention is to offer a <strong className="font-semibold text-slate-900">steady, compassionate presence</strong> — helping you feel understood, and supported as you move toward healing and growth.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">What I Offer</h3>
                  <ul className="space-y-2.5 sm:space-y-3 text-slate-900 leading-relaxed text-base sm:text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                      <span>One-on-one sessions to address personal issues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                      <span>Support for anxiety, depression, stress, grief, sexual harm or trauma</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                      <span>Personal growth and self-exploration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                      <span>Developing coping skills</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                      <span>Communication Skills</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                      <span>Conflict resolution strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                      <span>Building trust</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                      <span>Support through major life transitions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                      <span>Emotional Support during crises</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Space Section */}
      <section className="relative z-10 bg-gradient-to-b from-white to-slate-50 py-12 sm:py-16 md:py-20">
        <div className="container px-4 py-8 sm:py-12 md:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-8 sm:space-y-12">
              {/* Heading */}
              <div className="text-center space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">A Calm and Nurturing Space</span>
                </h2>
              </div>

              {/* Content and Images Grid */}
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2 items-center">
                {/* Text Content */}
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-slate-900 leading-relaxed order-2 md:order-1">
                  <p>
                    Papamoa Counselling Hub was created to feel <strong className="font-semibold text-slate-900">peaceful, welcoming, and restorative</strong> — a space designed with <strong className="font-semibold text-slate-900">comfort and privacy</strong> in mind.
                  </p>
                  <p>
                    From the moment you arrive, you&apos;re invited to <strong className="font-semibold text-slate-900">slow down and breathe</strong>. The room is furnished with your comfort in mind, and intentionally calm, allowing you to feel <strong className="font-semibold text-slate-900">safe and supported</strong> as you begin your session.
                  </p>
                  <p>
                    Sessions are available <strong className="font-semibold text-slate-900">in-person in Papamoa or online</strong>, providing flexibility and accessibility while maintaining a sense of <strong className="font-semibold text-slate-900">connection and care</strong>.
                  </p>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-1 gap-4 order-1 md:order-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="/images/room-1.jpg"
                      alt="Peaceful counselling room at Papamoa Counselling Hub with comfortable seating - calm and nurturing space for therapy sessions"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="/images/room-2.jpg"
                      alt="Welcoming counselling space at Papamoa Counselling Hub designed for comfort and privacy - professional therapy environment in Tauranga"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.3'%3E%3Cpolygon points='50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container px-4 sm:px-6 md:px-8 relative z-10">
          <div className="mx-auto max-w-3xl space-y-8 sm:space-y-10">
            <div className="text-center space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Send us a <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">Message</span>
              </h2>
              <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-900 leading-relaxed px-4">
                We're here to support you. Reach out and we'll get back within 24 hours.
              </p>
            </div>

            {/* Centered Contact Form Only */}
            <div>
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-white/60 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 p-6 sm:p-8 text-white text-center">
                  <h3 className="text-xl sm:text-2xl font-bold">Send us a Message</h3>
                  <p className="text-blue-100 leading-relaxed mt-1 text-sm sm:text-base">
                    Whether you're seeking support or have a question, we're here to help.
                  </p>
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  {!isSubmitted ? (
                    <form className="space-y-4 sm:space-y-6" onSubmit={async (e) => {
                      e.preventDefault()
                      const form = e.currentTarget as HTMLFormElement
                      const formData = new FormData(form)
                      
                      // Create mailto link as fallback
                      const firstName = formData.get('firstName') as string
                      const lastName = formData.get('lastName') as string
                      const email = formData.get('email') as string
                      const subject = formData.get('subject') as string
                      const message = formData.get('message') as string
                      
                      const mailtoLink = `mailto:papamoacounsellinghub@gmail.com?subject=${encodeURIComponent(`Contact Form: ${subject}`)}&body=${encodeURIComponent(`From: ${firstName} ${lastName} (${email})\n\nSubject: ${subject}\n\nMessage:\n${message}`)}`
                      
                      try {
                        const res = await fetch('/api/contact', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ firstName, lastName, email, subject, message }),
                        })
                        const data = await res.json()
                        if (res.ok && data.ok) {
                          setIsSubmitted(true)
                        } else {
                          console.error('API Error:', data)
                          // Fallback to mailto
                          alert('Email service unavailable. Opening your email client instead...')
                          window.location.href = mailtoLink
                        }
                      } catch (err) {
                        console.error('Network Error:', err)
                        // Fallback to mailto
                        alert('Network error. Opening your email client instead...')
                        window.location.href = mailtoLink
                      }
                    }}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-2">
                          <Label className="text-slate-900 font-medium" htmlFor="firstName">First name *</Label>
                          <Input name="firstName" id="firstName" placeholder="Your first name" className="rounded-xl" required />
                  </div>
                        <div className="space-y-2">
                          <Label className="text-slate-900 font-medium" htmlFor="lastName">Last name *</Label>
                          <Input name="lastName" id="lastName" placeholder="Your last name" className="rounded-xl" required />
                    </div>
                  </div>
                      <div className="space-y-2">
                        <Label className="text-slate-900 font-medium" htmlFor="email">Email address *</Label>
                        <Input name="email" id="email" type="email" placeholder="your.email@example.com" className="rounded-xl" required />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-900 font-medium" htmlFor="subject">Subject *</Label>
                        <Input name="subject" id="subject" placeholder="How can we help you today?" className="rounded-xl" required />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-900 font-medium" htmlFor="message">Your message *</Label>
                        <Textarea name="message" id="message" rows={5} placeholder="Please share what's on your mind..." className="rounded-xl" required />
                      </div>
                      <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 hover:from-blue-700 hover:via-teal-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-xl transition-all duration-300">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                      <p className="text-slate-700 text-sm text-center">
                        * Required fields. We respect your privacy and will never share your information.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Thank You!</h3>
                      <p className="text-slate-800 mb-6">
                        Your message has been sent successfully. We'll get back to you within 24 hours.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 hover:from-blue-700 hover:via-teal-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl"
                      >
                        Send Another Message
                      </Button>
                  </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

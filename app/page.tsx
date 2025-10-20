"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Mail, Phone, Heart, CheckCircle, Star, MapPin, Send } from "lucide-react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className="flex flex-col min-h-screen w-full relative overflow-x-hidden">
      {/* Coastal Background Textures */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-amber-50/20 to-teal-50/30"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center">
        {/* Background Image */}
         <div className="absolute inset-0">
           <Image
             src="/images/papamoa-beach-hero.jpg"
             alt="Beautiful Papamoa Beach pathway at sunset"
             fill
             className="object-cover"
             quality={95}
             priority
             sizes="100vw"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-teal-900/40 to-blue-800/60" />
           <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/20 to-transparent"></div>
         </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-4 md:px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                     <div className="text-center space-y-8 text-white max-w-6xl mx-auto">
             <div className="space-y-6">
               <div className="space-y-4">
                 <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight pb-8" style={{ lineHeight: '1.2' }}>
                   <span className="block text-white font-medium">Papamoa</span>
                   <span className="block bg-gradient-to-r from-teal-200 via-blue-200 to-emerald-200 bg-clip-text text-transparent font-bold">Counselling Hub</span>
                 </h1>
                 <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
                   Professional counselling in a coastal sanctuary designed for healing
                 </p>
               </div>
             </div>
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 pt-8">
              <div className="flex items-center text-white/80 text-sm bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-teal-300" />
                <span>NZAC Registered</span>
              </div>
              <div className="flex items-center text-white/80 text-sm bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Heart className="w-4 h-4 mr-2 text-rose-300" />
                <span>Trauma-Informed Care</span>
              </div>
              <div className="flex items-center text-white/80 text-sm bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2 text-yellow-300" />
                <span>5-Star Environment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Content (merged from About page) */}
      <section className="relative z-10">
        <div className="container px-4 py-12 md:px-6 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 md:grid-cols-3">
              {/* Sidebar with photo and contact info */}
              <div className="flex flex-col items-center md:items-start gap-6">
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-blue-100">
                  <Image
                    src="/images/mandy-profile.jpg"
                    alt="Mandy Fisher - Registered Counsellor"
                    width={256}
                    height={256}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <h2 className="text-2xl font-bold">Mandy Fisher</h2>
                  <p className="text-muted-foreground">Registered Counsellor</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span>papamoacounsellinghub@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span>021516330</span>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/#contact">Book a Session</Link>
                  </Button>
                </div>
              </div>

              {/* Main content */}
              <div className="md:col-span-2 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h3>
                  <p className="text-muted-foreground">
                    I'm a registered counsellor with over 15 years of experience helping clients navigate life's challenges
                    in our beautiful coastal setting in Papamoa.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">My Approach</h3>
                  <p>
                    I believe in creating a safe, non-judgmental space where you can explore your thoughts and feelings. Our
                    peaceful location near Papamoa Beach provides the perfect backdrop for healing and growth. My approach
                    is client-centered, drawing from various therapeutic modalities to tailor our sessions to your unique
                    needs.
                  </p>
                  <p>
                    Whether you're dealing with anxiety, depression, relationship issues, or life transitions, I'm here to
                    support you on your journey toward healing and growth in our tranquil coastal environment.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-2 py-1 text-xs">Anxiety</Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-2 py-1 text-xs">Depression</Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-2 py-1 text-xs">Trauma</Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-2 py-1 text-xs">Sexual Harm</Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-2 py-1 text-xs">Relationships</Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-2 py-1 text-xs">Grief & Loss</Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-2 py-1 text-xs">Life Transitions</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Session Information</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                      <CardContent className="flex items-center gap-4 p-4">
                        <Clock className="h-8 w-8 text-blue-600" />
                        <div>
                          <h4 className="font-medium">Session Duration</h4>
                          <p className="text-muted-foreground">50 minutes</p>
              </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="flex items-center gap-4 p-4">
                        <Calendar className="h-8 w-8 text-blue-600" />
                        <div>
                          <h4 className="font-medium">Availability</h4>
                          <p className="text-muted-foreground">Tuesday - Thursday</p>
            </div>
                      </CardContent>
                    </Card>
              </div>
            </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Qualifications</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Diploma of Counselling</li>
                    <li>Registered full member of the New Zealand Association of Counsellors (NZAC)</li>
                    <li>ACC Registered Counsellor</li>
                    <li>Specialising in family and sexual harm support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.3'%3E%3Cpolygon points='50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container px-6 md:px-8 relative z-10">
          <div className="mx-auto max-w-3xl space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Send us a <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">Message</span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-700 leading-relaxed">
                We're here to support you. Reach out and we'll get back within 24 hours.
              </p>
            </div>

            {/* Centered Contact Form Only */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl border border-white/60 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 p-8 text-white text-center">
                  <h3 className="text-2xl font-bold">Send us a Message</h3>
                  <p className="text-blue-100 leading-relaxed mt-1">
                    Whether you're seeking support or have a question, we're here to help.
                  </p>
                </div>
                <div className="p-8">
                  {!isSubmitted ? (
                    <form className="space-y-6" onSubmit={async (e) => {
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-slate-700 font-medium" htmlFor="firstName">First name *</Label>
                          <Input name="firstName" id="firstName" placeholder="Your first name" className="rounded-xl" required />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-slate-700 font-medium" htmlFor="lastName">Last name *</Label>
                          <Input name="lastName" id="lastName" placeholder="Your last name" className="rounded-xl" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-medium" htmlFor="email">Email address *</Label>
                        <Input name="email" id="email" type="email" placeholder="your.email@example.com" className="rounded-xl" required />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-medium" htmlFor="subject">Subject *</Label>
                        <Input name="subject" id="subject" placeholder="How can we help you today?" className="rounded-xl" required />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-medium" htmlFor="message">Your message *</Label>
                        <Textarea name="message" id="message" rows={5} placeholder="Please share what's on your mind..." className="rounded-xl" required />
                      </div>
                      <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 hover:from-blue-700 hover:via-teal-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-xl transition-all duration-300">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                      <p className="text-slate-500 text-sm text-center">
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
                      <p className="text-slate-600 mb-6">
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
  )
}

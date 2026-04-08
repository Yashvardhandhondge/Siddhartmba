"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Clock, MapPin, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        setError("Failed to send message. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again later.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <div className="relative w-full py-20 md:py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-[#0f2038] to-navy-500" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 text-center px-4">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Contact Us</h1>
          <div className="section-divider mx-auto" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Mail, title: "Email", content: "collagesiddharth7@gmail.com", href: "mailto:collagesiddharth7@gmail.com" },
            { icon: Phone, title: "Phone", content: "+91 7888155999", href: "tel:+917888155999" },
            { icon: Clock, title: "Working Hours", content: "Mon - Sat: 9:00 AM - 5:00 PM" },
            { icon: MapPin, title: "Location", content: "Mitmita, Chhatrapati Sambhajinagar - 431002" },
          ].map((item, i) => (
            <Card key={i} className="border-gold-100 dark:border-navy-400 card-hover text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-gold-500" />
                </div>
                <h3 className="font-heading font-bold text-navy-500 dark:text-white mb-2">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-gold-600 dark:text-gold-400 hover:underline text-sm">{item.content}</a>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.content}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Contact Form */}
          <Card className="border-gold-100 dark:border-navy-400">
            <CardContent className="p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-bold text-navy-500 dark:text-white mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-navy-500 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">We&apos;ll get back to you shortly.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="Enter your name" required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Enter subject" required value={formData.subject} onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} required value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} />
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <Button type="submit" disabled={submitting} className="bg-gold-500 hover:bg-gold-600 text-navy-500 font-semibold w-full">
                    <Send className="h-4 w-4 mr-2" />
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Google Maps Embed */}
          <div className="space-y-6">
            <Card className="border-gold-100 dark:border-navy-400 overflow-hidden">
              <div className="aspect-[4/3] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.5!2d75.3!3d19.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQ4JzAwLjAiTiA3NcKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SIMS Location"
                />
              </div>
            </Card>
            <Card className="border-gold-100 dark:border-navy-400">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-navy-500 dark:text-white mb-1">Our Address</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Siddharth Institute of Management Science,<br />
                      Mitmita, Chhatrapati Sambhajinagar - 431002<br />
                      Maharashtra, India<br />
                      <span className="text-gold-600 dark:text-gold-400">Affiliated to Dr. Babasaheb Ambedkar Marathwada University</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

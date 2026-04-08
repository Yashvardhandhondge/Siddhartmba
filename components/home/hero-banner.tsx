"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Download, ArrowRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Shape Tomorrow's Leaders",
    subtitle: "MBA Program — Class of 2027",
    description: "Empowering future business leaders with world-class management education, ethical values, and industry-ready skills.",
    cta: "Apply Now",
    link: "/academics/admission",
  },
  {
    id: 2,
    title: "Where Ambition Meets Excellence",
    subtitle: "Affiliated to Dr. BAMU, Chhatrapati Sambhajinagar",
    description: "A transformative 2-year full-time MBA program with specializations in Marketing, Finance, HR, and Operations.",
    cta: "Explore Programs",
    link: "/academics",
  },
  {
    id: 3,
    title: "95% Placement Record",
    subtitle: "50+ Top Recruiters Trust SIMS",
    description: "Join the league of 500+ successful alumni placed at India's leading corporations.",
    cta: "View Placements",
    link: "/placements",
  },
]

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-navy-500">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-[#0f2038] to-[#0A1628]" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gold-500 blur-[120px]" />
        <div className="absolute bottom-20 right-40 w-96 h-96 rounded-full bg-gold-600 blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm font-medium">{slides[currentSlide].subtitle}</span>
          </div>

          {/* Heading */}
          <h1
            key={`title-${currentSlide}`}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] animate-fade-in-up"
          >
            {slides[currentSlide].title.split(" ").map((word, i) => (
              <span key={i}>
                {i === slides[currentSlide].title.split(" ").length - 1 ? (
                  <span className="text-gold-gradient">{word}</span>
                ) : (
                  <>{word} </>
                )}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p
            key={`desc-${currentSlide}`}
            className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {slides[currentSlide].description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-500 font-semibold text-base px-8 py-6 shadow-lg hover:shadow-gold-500/25 transition-all duration-300 group">
              <Link href={slides[currentSlide].link}>
                {slides[currentSlide].cta}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gold-500/40 text-gold-300 hover:bg-gold-500/10 hover:text-gold-200 font-medium text-base px-8 py-6 transition-all duration-300">
              <Link href="#">
                <Download className="mr-2 h-4 w-4" />
                Download Brochure
              </Link>
            </Button>
          </div>
        </div>

        {/* Slide navigation */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-10 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-gold-500/30 text-gold-400 hover:bg-gold-500/10 flex items-center justify-center transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-gold-400" : "w-2 bg-white/30 hover:bg-white/50"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-gold-500/30 text-gold-400 hover:bg-gold-500/10 flex items-center justify-center transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

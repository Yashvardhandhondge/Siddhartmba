"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Deshmukh",
    batch: "MBA Batch 2023",
    company: "Deloitte",
    quote: "SIMS gave me the perfect foundation for my career in consulting. The case-study approach, industry interactions, and supportive faculty prepared me for the corporate world like no other institute could.",
  },
  {
    name: "Rohit Patil",
    batch: "MBA Batch 2022",
    company: "HDFC Bank",
    quote: "The Finance specialization at SIMS is outstanding. The practical approach to learning, combined with regular guest lectures from industry professionals, helped me secure a position at HDFC Bank during campus placements.",
  },
  {
    name: "Sneha Kulkarni",
    batch: "MBA Batch 2023",
    company: "TCS",
    quote: "What sets SIMS apart is the personal attention every student receives. The placement cell worked tirelessly to match us with the right opportunities. I am proud to be a SIMS alumna.",
  },
  {
    name: "Amit Jadhav",
    batch: "MBA Batch 2021",
    company: "Infosys",
    quote: "The HR specialization curriculum was perfectly aligned with industry needs. The management fest and research events helped me develop leadership skills that I use every day at work.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 bg-gray-50 dark:bg-navy-500/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Alumni Voices</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-500 dark:text-white mt-3 mb-4">
            What Our Alumni <span className="text-gold-gradient">Say</span>
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white dark:bg-navy-400 rounded-2xl shadow-xl p-8 sm:p-12 relative overflow-hidden">
            {/* Decorative quote */}
            <Quote className="absolute top-6 right-6 h-16 w-16 text-gold-500/10" />

            <div className="relative z-10">
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-navy-500 dark:text-white text-lg">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-gold-600 dark:text-gold-400 text-sm font-medium">
                    {testimonials[current].batch} &middot; {testimonials[current].company}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-navy-100 dark:border-navy-300 text-navy-400 dark:text-gray-300 hover:bg-gold-500 hover:text-navy-500 hover:border-gold-500 flex items-center justify-center transition-all"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-navy-100 dark:border-navy-300 text-navy-400 dark:text-gray-300 hover:bg-gold-500 hover:text-navy-500 hover:border-gold-500 flex items-center justify-center transition-all"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-gold-500" : "w-2 bg-gray-300 dark:bg-navy-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

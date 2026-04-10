"use client"

import { CheckCircle } from "lucide-react"

const reasons = [
  "AICTE-approved MBA program with industry-relevant curriculum",
  "Affiliated to Dr. Babasaheb Ambedkar Marathwada University",
  "Experienced faculty with corporate and academic expertise",
  "Specializations in Marketing, Finance, HR & Operations",
  "State-of-the-art smart classrooms and computer labs",
  "Regular industry visits, guest lectures, and workshops",
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-navy-500/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Our Strengths</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-500 dark:text-white mt-3 mb-4">
              Why Choose <span className="text-gold-gradient">SIMS?</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              At Siddharth Institute of Management Science, we are dedicated to developing competent business professionals through value-based, practical, and industry-oriented management education.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center mt-0.5">
                    <CheckCircle className="h-4 w-4 text-gold-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-navy-500 dark:group-hover:text-white transition-colors">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-navy-500 to-[#1a2d4a] rounded-2xl p-8 sm:p-10 text-white shadow-2xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-500/20 rounded-full blur-2xl" />
              <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-6">
                &ldquo;Empowering Management Education for a <span className="text-gold-400">Better Tomorrow</span>&rdquo;
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our vision is to be a center of excellence in management education, producing ethical leaders who drive positive change in business and society. With a curriculum designed for the modern business landscape, we bridge the gap between theory and practice.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gold-400 font-heading">2 Years</div>
                  <div className="text-sm text-gray-400">Full-time MBA</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gold-400 font-heading">4</div>
                  <div className="text-sm text-gray-400">Specializations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

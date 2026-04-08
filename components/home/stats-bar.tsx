"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, TrendingUp, Building2, Award } from "lucide-react"

const stats = [
  { icon: GraduationCap, value: 500, suffix: "+", label: "Alumni Network" },
  { icon: TrendingUp, value: 95, suffix: "%", label: "Placement Rate" },
  { icon: Building2, value: 50, suffix: "+", label: "Top Recruiters" },
  { icon: Award, value: 1, suffix: "", label: "NAAC Accredited", displayValue: "NAAC" },
]

function AnimatedNumber({ target, suffix, displayValue }: { target: number; suffix: string; displayValue?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    if (displayValue) {
      setCount(target)
      return
    }
    let current = 0
    const increment = target / 40
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 30)
    return () => clearInterval(timer)
  }, [started, target, displayValue])

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-bold text-gold-400 font-heading">
      {displayValue || count}{suffix}
    </div>
  )
}

export default function StatsBar() {
  return (
    <section className="relative bg-navy-500 py-12 -mt-1">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-500 via-[#0f2038] to-navy-500" />
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-3 group-hover:bg-gold-500/20 transition-all duration-300">
                <stat.icon className="h-6 w-6 text-gold-400" />
              </div>
              <AnimatedNumber target={stat.value} suffix={stat.suffix} displayValue={stat.displayValue} />
              <p className="text-gray-400 text-sm mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

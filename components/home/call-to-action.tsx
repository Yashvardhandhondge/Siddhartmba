import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-[#0f2038] to-navy-500" />
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">Admissions Open 2025-26</span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
          Ready to Shape Your <span className="text-gold-gradient">Future?</span>
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Applications are now open for the MBA program — Academic Year 2025-2026. Take the first step towards a rewarding career in business and management.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-500 font-semibold text-base px-8 py-6 shadow-lg group">
            <Link href="/academics/admission">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-gold-500/40 text-gold-300 hover:bg-gold-500/10 font-medium text-base px-8 py-6">
            <Link href="#">
              <Download className="mr-2 h-4 w-4" />
              Download Brochure
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

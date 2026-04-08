import { GalleryContent } from "@/components/gallery/gallery-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore campus life, events, placements, guest lectures, and sports moments at Siddharth Institute of Management Science.",
}

export default function GalleryPage({ searchParams }: { searchParams: { category?: string } }) {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full py-20 md:py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-[#0f2038] to-navy-500" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 text-center px-4">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">Memories</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Gallery</h1>
          <div className="section-divider mx-auto" />
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <GalleryContent selectedCategory={searchParams.category} />
      </div>
    </>
  )
}

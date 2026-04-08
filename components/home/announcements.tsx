"use client"

import { useEffect, useRef } from "react"
import { Megaphone } from "lucide-react"

interface Announcement {
  _id: string
  text: string
  link?: string
  isActive: boolean
}

interface AnnouncementsProps {
  announcements: Announcement[]
}

export default function Announcements({ announcements }: AnnouncementsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollRef.current || announcements.length === 0) return

    const scrollElement = scrollRef.current
    let animationId: number
    let position = 0

    const scroll = () => {
      if (!scrollElement) return

      position -= 1
      scrollElement.style.transform = `translateX(${position}px)`

      if (Math.abs(position) >= scrollElement.children[0].clientWidth) {
        position = 0
        scrollElement.appendChild(scrollElement.children[0])
        scrollElement.style.transform = `translateX(${position}px)`
      }

      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [announcements])

  if (!announcements || announcements.length === 0) {
    return null
  }

  const activeAnnouncements = announcements.filter((a) => a.isActive)

  if (activeAnnouncements.length === 0) {
    return null
  }

  return (
    <div className="bg-gold-500 text-navy-500 py-2.5 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex-shrink-0 flex items-center mr-4">
          <Megaphone className="h-4 w-4 mr-2" />
          <span className="font-semibold text-sm">Announcements:</span>
        </div>
        <div className="overflow-hidden relative flex-1">
          <div ref={scrollRef} className="flex whitespace-nowrap" style={{ willChange: "transform" }}>
            {activeAnnouncements.map((announcement) => (
              <div key={announcement._id} className="inline-block px-4 whitespace-nowrap text-sm font-medium">
                {announcement.link ? (
                  <a href={announcement.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {announcement.text}
                  </a>
                ) : (
                  <span>{announcement.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

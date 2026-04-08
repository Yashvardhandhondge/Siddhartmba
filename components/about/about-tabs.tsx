"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface AboutTabsProps {
  about: {
    institute: string
    society?: string
    vision?: string
    mission?: string
  }
  directors?: any[]
  leadership?: any[]
  section: "institute" | "society" | "vision" | "directors" | "leadership"
}

export function AboutTabs({ about, directors, leadership, section }: AboutTabsProps) {
  if (section === "institute") {
    return (
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-heading text-2xl font-bold mb-4 text-navy-500 dark:text-gold-400">Siddharth Institute of Management Science</h2>
            {about.institute ? (
              <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: about.institute }} />
            ) : (
              <div className="prose max-w-none text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  Ramai Pratishthan&apos;s Siddharth Institute of Management Science (SIMS) is a premier management education institution located at Mitmita, Chhatrapati Sambhajinagar. The institute is affiliated to Dr. Babasaheb Ambedkar Marathwada University and approved by AICTE, New Delhi.
                </p>
                <p>
                  SIMS offers a 2-year full-time MBA program with specializations in Marketing, Finance, Human Resource Management, and Operations Management. Our curriculum is designed to meet industry standards and prepare students for leadership roles in the corporate world.
                </p>
                <p>
                  With state-of-the-art facilities, experienced faculty, and a strong placement record, SIMS is committed to shaping competent and ethical business professionals who contribute meaningfully to the economy and society.
                </p>
              </div>
            )}
          </div>
          <div className="bg-gradient-to-br from-navy-500 to-[#1a2d4a] rounded-2xl p-8 text-white">
            <h3 className="font-heading text-xl font-bold text-gold-400 mb-4">At a Glance</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between border-b border-navy-400 pb-2">
                <span>Program</span><span className="text-white font-medium">MBA (Full-time)</span>
              </li>
              <li className="flex justify-between border-b border-navy-400 pb-2">
                <span>Duration</span><span className="text-white font-medium">2 Years</span>
              </li>
              <li className="flex justify-between border-b border-navy-400 pb-2">
                <span>Affiliation</span><span className="text-white font-medium">Dr. BAMU</span>
              </li>
              <li className="flex justify-between border-b border-navy-400 pb-2">
                <span>Approval</span><span className="text-white font-medium">AICTE, New Delhi</span>
              </li>
              <li className="flex justify-between border-b border-navy-400 pb-2">
                <span>Specializations</span><span className="text-white font-medium">4</span>
              </li>
              <li className="flex justify-between">
                <span>Placement Rate</span><span className="text-gold-400 font-bold">95%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  if (section === "society") {
    return (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold mb-4 text-navy-500 dark:text-gold-400">Ramai Pratishthan</h2>
            {about.society ? (
              <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: about.society }} />
            ) : (
              <div className="prose max-w-none text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  Ramai Pratishthan is the parent body of Siddharth Institute of Management Science. The society was established with the vision of providing quality education to all sections of society, empowering youth through knowledge and skills for a better future.
                </p>
                <p>
                  Under its umbrella, the society runs multiple educational initiatives focused on producing competent professionals who serve the nation with dedication and integrity.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (section === "vision") {
    return (
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="overflow-hidden hover:shadow-lg transition-shadow border-gold-100 dark:border-navy-400 card-hover">
          <CardContent className="pt-6">
            <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold mb-4 text-navy-500 dark:text-gold-400">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {about.vision ||
                "To be a center of excellence in management education, producing visionary leaders equipped with knowledge, ethical values, and entrepreneurial spirit to drive sustainable growth in business and society."}
            </p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow border-gold-100 dark:border-navy-400 card-hover">
          <CardContent className="pt-6">
            <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold mb-4 text-navy-500 dark:text-gold-400">Our Mission</h3>
            {about.mission ? (
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: about.mission }} />
            ) : (
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                  Provide quality management education with an industry-relevant curriculum
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                  Develop ethical leadership and professional competence in students
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                  Foster industry readiness through practical training and internships
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                  Promote research, innovation, and entrepreneurial thinking
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                  Establish strong corporate partnerships for placement excellence
                </li>
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  if (section === "directors") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {directors && directors.length > 0 ? (
          directors.map((director) => (
            <Card key={director._id} className="overflow-hidden hover:shadow-lg transition-shadow border-gold-100 dark:border-navy-400 card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gold-200 dark:border-gold-700">
                    <Image
                      src={director.imageId ? `/api/files/${director.imageId}` : "/placeholder.svg?height=128&width=128"}
                      alt={director.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-navy-500 dark:text-white">{director.name}</h3>
                  <p className="text-gold-600 dark:text-gold-400 font-medium">{director.role}</p>
                  {director.qualification && <p className="text-sm text-gray-500 mt-1">{director.qualification}</p>}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">Director information coming soon.</p>
        )}
      </div>
    )
  }

  if (section === "leadership") {
    return (
      <div className="space-y-6">
        <h2 className="font-heading text-2xl font-bold mb-4 text-navy-500 dark:text-gold-400">Messages from Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership && leadership.length > 0 ? (
            leadership.map((leader) => (
              <Card key={leader._id} className="overflow-hidden hover:shadow-lg transition-shadow border-gold-100 dark:border-navy-400 card-hover">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center p-6 bg-gradient-to-b from-navy-50 to-white dark:from-navy-400 dark:to-navy-500">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-gold-200 dark:border-gold-700">
                      <Image
                        src={leader.imageId ? `/api/files/${leader.imageId}` : "/placeholder-user.jpg"}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-navy-500 dark:text-white">{leader.role}&apos;s Message</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{leader.name}</p>
                  </div>
                  <div
                    className="prose max-w-none text-sm p-6 dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: leader.message || "Message coming soon..." }}
                  />
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-gray-500">Leadership messages coming soon.</div>
          )}
        </div>
      </div>
    )
  }

  return null
}

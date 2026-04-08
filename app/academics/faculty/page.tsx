import Image from "next/image"
import { headers } from 'next/headers'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Faculty",
  description: "Meet the experienced faculty at SIMS — Professors, Associate Professors, and Assistant Professors specializing in Marketing, Finance, HR, and Operations.",
}

interface Faculty {
  _id: string
  name: string
  designation: string
  department?: string
  qualification?: string
  experience?: string
  specialization?: string
  email?: string
  bio?: string
  imageId?: string
  isTeaching?: boolean
}

async function getFaculty() {
  try {
    const headersList = await headers()
    const host = headersList.get('host') || 'localhost:3000'
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'

    const response = await fetch(`${protocol}://${host}/api/faculty`, {
      next: { revalidate: 0 },
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' },
    })

    const { success, data } = await response.json()
    if (!success) throw new Error('Failed to fetch faculty')

    return {
      teaching: data.filter((f: Faculty) => f.isTeaching !== false),
      nonTeaching: data.filter((f: Faculty) => f.isTeaching === false),
    }
  } catch (error) {
    console.error("Error fetching faculty:", error)
    return { teaching: [], nonTeaching: [] }
  }
}

export default async function FacultyPage({ searchParams }: { searchParams: { tab?: string } }) {
  const { teaching, nonTeaching } = await getFaculty()
  const activeTab = searchParams.tab || 'teaching'
  const facultyToShow = activeTab === 'non-teaching' ? nonTeaching : teaching
  const title = activeTab === 'non-teaching' ? 'Non-Teaching Staff' : 'Teaching Faculty'

  return (
    <>
      {/* Hero */}
      <div className="relative w-full py-20 md:py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-[#0f2038] to-navy-500" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 text-center px-4">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">Our Team</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Faculty & Staff</h1>
          <div className="section-divider mx-auto" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Tab navigation */}
        <div className="flex justify-center gap-4 mb-10">
          <a
            href="/academics/faculty?tab=teaching"
            className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all ${activeTab === 'teaching' ? 'bg-gold-500 text-navy-500 shadow-md' : 'bg-gray-100 dark:bg-navy-400 text-gray-600 dark:text-gray-300 hover:bg-gray-200'}`}
          >
            Teaching Faculty
          </a>
          <a
            href="/academics/faculty?tab=non-teaching"
            className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all ${activeTab === 'non-teaching' ? 'bg-gold-500 text-navy-500 shadow-md' : 'bg-gray-100 dark:bg-navy-400 text-gray-600 dark:text-gray-300 hover:bg-gray-200'}`}
          >
            Non-Teaching Staff
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyToShow.map((faculty: Faculty) => (
            <div key={faculty._id} className="bg-white dark:bg-navy-400 rounded-xl shadow-md p-6 card-hover border border-gold-50 dark:border-navy-300">
              <div className="flex items-start gap-4">
                {faculty.imageId && (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-gold-200">
                    <Image src={`/api/files/${faculty.imageId}`} alt={faculty.name} fill className="object-cover" />
                  </div>
                )}
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy-500 dark:text-white">{faculty.name}</h3>
                  <p className="text-gold-600 dark:text-gold-400 text-sm font-medium">{faculty.designation}</p>
                </div>
              </div>
              <div className="mt-4 space-y-1">
                {faculty.qualification && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{faculty.qualification}</p>
                )}
                {faculty.specialization && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    <span className="font-medium">Specialization:</span> {faculty.specialization}
                  </p>
                )}
                {faculty.experience && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    <span className="font-medium">Experience:</span> {faculty.experience}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        {facultyToShow.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">Faculty information will be updated soon.</p>
          </div>
        )}
      </div>
    </>
  )
}

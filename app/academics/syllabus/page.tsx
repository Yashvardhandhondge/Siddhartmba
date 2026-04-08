import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"
import clientPromise from "@/lib/mongodb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Syllabus",
  description: "Download the MBA syllabus at Siddharth Institute of Management Science. Detailed course structure, subjects, and credit distribution.",
}

async function getSyllabus() {
  try {
    const client = await clientPromise
    const db = client.db("fashion_institute")
    const syllabus = await db.collection("syllabus").find({}).sort({ createdAt: -1 }).toArray()
    return JSON.parse(JSON.stringify(syllabus))
  } catch (error) {
    console.error("Error fetching syllabus:", error)
    return []
  }
}

export default async function SyllabusPage() {
  const syllabusFiles = await getSyllabus()

  return (
    <>
      <div className="relative w-full py-20 md:py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-[#0f2038] to-navy-500" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 text-center px-4">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">Academics</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Syllabus</h1>
          <div className="section-divider mx-auto" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-700 dark:text-gray-300 text-lg text-center">
            Find the detailed MBA syllabus at Siddharth Institute of Management Science. The curriculum is designed in consultation with industry experts and aligned with Dr. Babasaheb Ambedkar Marathwada University guidelines.
          </p>
        </div>

        {syllabusFiles && syllabusFiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {syllabusFiles.map((file: any) => (
              <Card key={file._id} className="border-gold-100 dark:border-navy-400 card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <FileText className="h-12 w-12 text-gold-500 mb-4" />
                  <h3 className="font-heading font-semibold mb-2 text-navy-500 dark:text-white">{file.title}</h3>
                  {file.program && <p className="text-sm text-gray-500 mb-4">{file.program}</p>}
                  <p className="text-sm text-gray-500 mb-6">Added on {new Date(file.createdAt).toLocaleDateString()}</p>
                  <Button asChild className="mt-auto bg-gold-500 hover:bg-gold-600 text-navy-500">
                    <a href={`/api/files/${file.fileId}`} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" /> Download Syllabus
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 dark:bg-navy-400 rounded-lg">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-heading font-medium text-gray-600 dark:text-gray-300 mb-2">Syllabus Coming Soon</h3>
            <p className="text-gray-500 dark:text-gray-400">The MBA syllabus documents will be uploaded here shortly.</p>
          </div>
        )}

        <div className="mt-12 bg-navy-50 dark:bg-navy-400 p-6 rounded-lg">
          <h2 className="font-heading text-xl font-bold mb-2 text-navy-500 dark:text-white">Need Help?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            For questions about the syllabus or academic programs, contact the Academic Office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div><span className="font-medium">Email:</span> collagesiddharth7@gmail.com</div>
            <div><span className="font-medium">Phone:</span> +91 7888155999</div>
          </div>
        </div>
      </div>
    </>
  )
}

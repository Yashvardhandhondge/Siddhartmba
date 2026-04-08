import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText } from "lucide-react"
import { headers } from "next/headers"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admissions",
  description: "MBA admission process at SIMS — eligibility criteria, fee structure, scholarships, and important dates. Apply through MAH-MBA CET / CAT / MAT.",
}

interface FileDocument {
  _id: string
  filename?: string
  metadata: { type: string; section?: string }
  uploadDate?: Date
}

interface AdmissionContent {
  process?: string
  importantDates?: string
  eligibility?: string
  feeStructure?: string
  scholarship?: string
  cancellation?: string
  brochureId?: string
  admissionFormId?: string
  scholarshipFileId?: string
  admissionInfoId?: string
  govtResolutions?: { id: string; name: string }[]
}

async function getAdmissionContent() {
  try {
    const headersList = await headers()
    const host = headersList.get("host") || "localhost:3000"
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https"

    const response = await fetch(`${protocol}://${host}/api/content/admission`, {
      next: { revalidate: 0 },
      headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
    })

    const { success, data } = await response.json()
    if (!success) throw new Error("Failed to fetch")

    const admissionContent: AdmissionContent = data || {}
    const files: FileDocument[] = []

    if (admissionContent.brochureId) files.push({ _id: admissionContent.brochureId, metadata: { type: "brochure" } })
    if (admissionContent.admissionFormId) files.push({ _id: admissionContent.admissionFormId, metadata: { type: "admission-form" } })
    if (admissionContent.scholarshipFileId) files.push({ _id: admissionContent.scholarshipFileId, metadata: { type: "scholarship" } })
    if (admissionContent.admissionInfoId) files.push({ _id: admissionContent.admissionInfoId, metadata: { type: "admission-info" } })

    for (const r of admissionContent.govtResolutions ?? []) {
      files.push({ _id: r.id, filename: r.name, metadata: { type: "government-resolution" } })
    }

    return { content: admissionContent, files }
  } catch (error) {
    console.error("Error fetching admission content:", error)
    return { content: {} as AdmissionContent, files: [] as FileDocument[] }
  }
}

export default async function AdmissionPage() {
  const { content, files } = await getAdmissionContent()

  const brochureFile = files.find((f) => f.metadata.type === "brochure")
  const admissionFormFile = files.find((f) => f.metadata.type === "admission-form")
  const scholarshipFile = files.find((f) => f.metadata.type === "scholarship")

  return (
    <>
      {/* Hero */}
      <div className="relative w-full py-20 md:py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-[#0f2038] to-navy-500" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 text-center px-4">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">Join SIMS</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Admission Information</h1>
          <div className="section-divider mx-auto" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="md:col-span-2 border-gold-100 dark:border-navy-400">
            <CardContent className="p-6">
              <h2 className="font-heading text-2xl font-bold mb-4 text-navy-500 dark:text-white">MBA Admission Process 2025-26</h2>
              {content.process ? (
                <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: content.process }} />
              ) : (
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>Admission to the MBA program at SIMS is conducted through the DTE Maharashtra Centralized Admission Process (CAP) based on valid entrance exam scores.</p>
                  <p><strong>Accepted Entrance Exams:</strong> MAH-MBA/MMS CET, CAT, MAT, ATMA, CMAT, XAT</p>
                  <p><strong>Eligibility:</strong> Graduate from any recognized university with minimum 50% marks (45% for reserved categories).</p>
                  <p>Students can also apply directly to the institute for management quota seats. Contact the admission office for details.</p>
                </div>
              )}

              <div className="flex flex-wrap gap-4 mt-6">
                {brochureFile && (
                  <Button asChild variant="outline" className="border-gold-300">
                    <a href={`/api/files/${brochureFile._id}`} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4 mr-2" /> Download Brochure
                    </a>
                  </Button>
                )}
                {admissionFormFile && (
                  <Button asChild className="bg-gold-500 hover:bg-gold-600 text-navy-500">
                    <a href={`/api/files/${admissionFormFile._id}`} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" /> Download Application Form
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border-gold-100 dark:border-navy-400">
            <CardContent className="p-6">
              <h2 className="font-heading text-xl font-bold mb-4 text-navy-500 dark:text-white">Important Dates</h2>
              {content.importantDates ? (
                <div dangerouslySetInnerHTML={{ __html: content.importantDates }} />
              ) : (
                <ul className="space-y-3 text-sm">
                  {[
                    ["MAH-CET Registration", "Feb - Mar 2025"],
                    ["MAH-CET Exam", "Mar 2025"],
                    ["CAP Rounds Begin", "Jul 2025"],
                    ["Institute Reporting", "Aug 2025"],
                    ["Classes Begin", "Aug 2025"],
                  ].map(([label, date], i) => (
                    <li key={i} className="flex justify-between border-b border-gray-100 dark:border-navy-400 pb-2">
                      <span className="text-gray-600 dark:text-gray-400">{label}</span>
                      <span className="font-medium text-navy-500 dark:text-white">{date}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-navy-400">
                <h3 className="font-semibold text-navy-500 dark:text-white mb-2">Contact for Admission</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Phone: +91 7888155999</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Email: collagesiddharth7@gmail.com</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="eligibility" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
            <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            <TabsTrigger value="fee-structure">Fee Structure</TabsTrigger>
            <TabsTrigger value="scholarship">Scholarships</TabsTrigger>
            <TabsTrigger value="cancellation">Cancellation</TabsTrigger>
          </TabsList>

          <TabsContent value="eligibility" className="mt-6">
            <Card className="border-gold-100 dark:border-navy-400">
              <CardContent className="p-6">
                <h2 className="font-heading text-xl font-bold mb-4 text-navy-500 dark:text-white">Eligibility Criteria</h2>
                {content.eligibility ? (
                  <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: content.eligibility }} />
                ) : (
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p><strong>MBA Program:</strong></p>
                    <ul className="space-y-2 list-none">
                      {[
                        "Graduate from any recognized university",
                        "Minimum 50% aggregate marks (45% for reserved categories)",
                        "Valid score in MAH-MBA/MMS CET, CAT, MAT, ATMA, CMAT, or XAT",
                        "Final year graduation students may apply provisionally",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fee-structure" className="mt-6">
            <Card className="border-gold-100 dark:border-navy-400">
              <CardContent className="p-6">
                <h2 className="font-heading text-xl font-bold mb-4 text-navy-500 dark:text-white">Fee Structure</h2>
                {content.feeStructure ? (
                  <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: content.feeStructure }} />
                ) : (
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>Fee structure is as per the norms set by the Directorate of Technical Education (DTE), Maharashtra. Fees are subject to annual revision.</p>
                    <p>Contact the admission office at <strong>+91 7888155999</strong> for the latest fee details.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scholarship" className="mt-6">
            <Card className="border-gold-100 dark:border-navy-400">
              <CardContent className="p-6">
                <h2 className="font-heading text-xl font-bold mb-4 text-navy-500 dark:text-white">Scholarships</h2>
                <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{
                  __html: content.scholarship || "SIMS supports students through various government and merit-based scholarship programs including EBC, Rajarshi Shahu Maharaj scholarship, and other state government schemes. Students from reserved categories are eligible for fee reimbursement as per government norms."
                }} />
                {scholarshipFile && (
                  <Button asChild className="mt-4 bg-gold-500 hover:bg-gold-600 text-navy-500">
                    <a href={`/api/files/${scholarshipFile._id}`} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4 mr-2" /> Download Scholarship Details
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cancellation" className="mt-6">
            <Card className="border-gold-100 dark:border-navy-400">
              <CardContent className="p-6">
                <h2 className="font-heading text-xl font-bold mb-4 text-navy-500 dark:text-white">Cancellation & Refund</h2>
                <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{
                  __html: content.cancellation || `<p>Cancellation and refund policy is as per AICTE and DTE Maharashtra norms. Students must submit a written application to the admission office along with the original fee receipt.</p>`
                }} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Government Resolutions */}
        {files.filter((f) => f.metadata.type === "government-resolution").length > 0 && (
          <section>
            <h2 className="font-heading text-2xl font-bold mb-6 text-navy-500 dark:text-white">Government Resolutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {files.filter((f) => f.metadata.type === "government-resolution").map((file) => (
                <Card key={file._id} className="border-gold-100 dark:border-navy-400 card-hover">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <FileText className="h-12 w-12 text-gold-500 mb-4" />
                    <h3 className="font-semibold text-navy-500 dark:text-white mb-2">{file.filename}</h3>
                    <Button asChild variant="outline" className="mt-auto border-gold-300">
                      <a href={`/api/files/${file._id}`} target="_blank" rel="noopener noreferrer">View Document</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}

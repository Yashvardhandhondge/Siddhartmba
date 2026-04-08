"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Plus, Trash2, Save } from "lucide-react"

interface PlacementStat {
  label: string
  value: string
}

interface Recruiter {
  name: string
}

interface PlacementTestimonial {
  name: string
  batch: string
  company: string
  package: string
  quote: string
}

interface PlacementData {
  _id?: string
  stats: PlacementStat[]
  recruiters: Recruiter[]
  testimonials: PlacementTestimonial[]
}

export default function PlacementsAdminPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [data, setData] = useState<PlacementData>({
    stats: [
      { label: "Placement Rate", value: "95%" },
      { label: "Average Package", value: "4.5 LPA" },
      { label: "Highest Package", value: "8.5 LPA" },
      { label: "Recruiting Companies", value: "50+" },
    ],
    recruiters: [
      { name: "TCS" }, { name: "Infosys" }, { name: "HDFC Bank" }, { name: "Deloitte" },
    ],
    testimonials: [],
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch("/api/placements")
      if (res.ok) {
        const json = await res.json()
        if (json.data) setData(json.data)
      }
    } catch (error) {
      console.error("Error fetching placements data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await fetch("/api/placements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        toast({ title: "Saved", description: "Placement data updated successfully." })
      } else {
        toast({ title: "Error", description: "Failed to save.", variant: "destructive" })
      }
    } catch {
      toast({ title: "Error", description: "Something went wrong.", variant: "destructive" })
    } finally {
      setSaving(false)
    }
  }

  const updateStat = (index: number, field: keyof PlacementStat, value: string) => {
    const newStats = [...data.stats]
    newStats[index] = { ...newStats[index], [field]: value }
    setData({ ...data, stats: newStats })
  }

  const addRecruiter = () => {
    setData({ ...data, recruiters: [...data.recruiters, { name: "" }] })
  }

  const removeRecruiter = (index: number) => {
    setData({ ...data, recruiters: data.recruiters.filter((_, i) => i !== index) })
  }

  const addTestimonial = () => {
    setData({
      ...data,
      testimonials: [...data.testimonials, { name: "", batch: "", company: "", package: "", quote: "" }],
    })
  }

  const removeTestimonial = (index: number) => {
    setData({ ...data, testimonials: data.testimonials.filter((_, i) => i !== index) })
  }

  const updateTestimonial = (index: number, field: keyof PlacementTestimonial, value: string) => {
    const newTestimonials = [...data.testimonials]
    newTestimonials[index] = { ...newTestimonials[index], [field]: value }
    setData({ ...data, testimonials: newTestimonials })
  }

  if (loading) return <div className="p-8 text-center">Loading...</div>

  return (
    <div className="p-6 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-navy-500 dark:text-white">Manage Placements</h1>
        <Button onClick={handleSave} disabled={saving} className="bg-gold-500 hover:bg-gold-600 text-navy-500">
          <Save className="h-4 w-4 mr-2" />
          {saving ? "Saving..." : "Save All"}
        </Button>
      </div>

      {/* Stats */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="font-bold text-lg mb-4">Placement Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.stats.map((stat, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex-1">
                  <Label>Label</Label>
                  <Input value={stat.label} onChange={(e) => updateStat(i, "label", e.target.value)} />
                </div>
                <div className="flex-1">
                  <Label>Value</Label>
                  <Input value={stat.value} onChange={(e) => updateStat(i, "value", e.target.value)} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recruiters */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg">Recruiters</h2>
            <Button onClick={addRecruiter} size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-1" /> Add
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {data.recruiters.map((r, i) => (
              <div key={i} className="flex gap-1">
                <Input
                  value={r.name}
                  placeholder="Company name"
                  onChange={(e) => {
                    const newRecruiters = [...data.recruiters]
                    newRecruiters[i] = { name: e.target.value }
                    setData({ ...data, recruiters: newRecruiters })
                  }}
                />
                <Button variant="ghost" size="sm" onClick={() => removeRecruiter(i)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Testimonials */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg">Student Testimonials</h2>
            <Button onClick={addTestimonial} size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-1" /> Add
            </Button>
          </div>
          <div className="space-y-6">
            {data.testimonials.map((t, i) => (
              <div key={i} className="border rounded-lg p-4 relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => removeTestimonial(i)}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <Label>Student Name</Label>
                    <Input value={t.name} onChange={(e) => updateTestimonial(i, "name", e.target.value)} />
                  </div>
                  <div>
                    <Label>Batch</Label>
                    <Input value={t.batch} placeholder="MBA 2023" onChange={(e) => updateTestimonial(i, "batch", e.target.value)} />
                  </div>
                  <div>
                    <Label>Company</Label>
                    <Input value={t.company} onChange={(e) => updateTestimonial(i, "company", e.target.value)} />
                  </div>
                  <div>
                    <Label>Package</Label>
                    <Input value={t.package} placeholder="5.5 LPA" onChange={(e) => updateTestimonial(i, "package", e.target.value)} />
                  </div>
                </div>
                <div>
                  <Label>Quote</Label>
                  <Textarea value={t.quote} rows={2} onChange={(e) => updateTestimonial(i, "quote", e.target.value)} />
                </div>
              </div>
            ))}
            {data.testimonials.length === 0 && (
              <p className="text-gray-500 text-center py-4">No testimonials yet. Click &quot;Add&quot; to create one.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

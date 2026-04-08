"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown, Book, FileText, Download } from "lucide-react"

interface ResourceItem {
  title: string
  [key: string]: any
}

interface ResourceCategory {
  category: string
  title: string
  items: ResourceItem[]
}

interface LibraryTabsProps {
  resources: {
    books: ResourceCategory[]
    journals: ResourceCategory[]
    digital: ResourceCategory[]
    archives: ResourceCategory[]
  }
}

export function LibraryTabs({ resources }: LibraryTabsProps) {
  const [activeCategory, setActiveCategory] = useState("books")

  const defaultResources = {
    books: [
      {
        category: "books",
        title: "Management Books",
        items: [
          { title: "Principles of Management", author: "P.C. Tripathi", year: "2021" },
          { title: "Financial Management", author: "I.M. Pandey", year: "2020" },
          { title: "Marketing Management", author: "Philip Kotler", year: "2022" },
          { title: "Human Resource Management", author: "Gary Dessler", year: "2021" },
          { title: "Operations Management", author: "Jay Heizer", year: "2020" },
        ],
      },
    ],
    journals: [
      {
        category: "journals",
        title: "Management Journals",
        items: [
          { title: "Harvard Business Review", publisher: "Harvard Business Publishing", frequency: "Bi-monthly" },
          { title: "Indian Journal of Management", publisher: "AIMA", frequency: "Quarterly" },
          { title: "Vikalpa - Journal for Decision Makers", publisher: "IIM Ahmedabad", frequency: "Quarterly" },
          { title: "Journal of Business Research", publisher: "Elsevier", frequency: "Monthly" },
          { title: "Decision - Journal of IIM Calcutta", publisher: "Springer", frequency: "Quarterly" },
        ],
      },
    ],
    digital: [
      {
        category: "digital",
        title: "Digital Resources",
        items: [
          { title: "EBSCO Business Source", type: "Journal Database", access: "Subscription" },
          { title: "CMIE Prowess", type: "Financial Database", access: "Subscription" },
          { title: "J-Gate", type: "E-Journal Gateway", access: "Subscription" },
          { title: "National Digital Library", type: "Academic Repository", access: "Free" },
          { title: "DELNET", type: "Inter-library Network", access: "Subscription" },
        ],
      },
    ],
    archives: [
      {
        category: "archives",
        title: "Case Study Archives",
        items: [
          { title: "Harvard Business Cases", period: "Various", items: "200+" },
          { title: "Indian Management Cases", period: "Indian Industry", items: "150+" },
          { title: "Research Papers Archive", period: "Faculty Research", items: "100+" },
          { title: "Project Reports", period: "Student Work", items: "500+" },
          { title: "Industry Reports", period: "CMIE & IBEF", items: "300+" },
        ],
      },
    ],
  }

  const currentResources =
    resources[activeCategory as keyof typeof resources]?.length > 0
      ? resources[activeCategory as keyof typeof resources]
      : defaultResources[activeCategory as keyof typeof defaultResources]

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "books": return "Management Books"
      case "journals": return "Management Journals"
      case "digital": return "Digital Resources"
      case "archives": return "Case Study Archives"
      default: return category
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-gold-200 bg-navy-50 dark:bg-navy-400 hover:bg-gold-50">
              {getCategoryLabel(activeCategory)}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-56">
            <DropdownMenuItem onClick={() => setActiveCategory("books")}>Management Books</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setActiveCategory("journals")}>Management Journals</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setActiveCategory("digital")}>Digital Resources</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setActiveCategory("archives")}>Case Study Archives</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {currentResources.map((resource: ResourceCategory) => (
        <Card key={resource.title} className="border-gold-100 dark:border-navy-400 card-hover">
          <CardContent className="p-6">
            <h3 className="font-heading text-xl font-bold mb-4 text-navy-500 dark:text-white">{resource.title}</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 dark:border-navy-400 rounded-lg">
                <thead>
                  <tr className="bg-navy-50 dark:bg-navy-400">
                    <th className="py-3 px-4 text-left text-xs font-medium text-navy-500 dark:text-gold-400 uppercase tracking-wider border-b">Title</th>
                    {resource.category === "books" && (
                      <>
                        <th className="py-3 px-4 text-left text-xs font-medium text-navy-500 dark:text-gold-400 uppercase tracking-wider border-b">Author</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-navy-500 dark:text-gold-400 uppercase tracking-wider border-b">Year</th>
                      </>
                    )}
                    {resource.category === "journals" && (
                      <>
                        <th className="py-3 px-4 text-left text-xs font-medium text-navy-500 dark:text-gold-400 uppercase tracking-wider border-b">Publisher</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-navy-500 dark:text-gold-400 uppercase tracking-wider border-b">Frequency</th>
                      </>
                    )}
                    {resource.category === "digital" && (
                      <>
                        <th className="py-3 px-4 text-left text-xs font-medium text-navy-500 dark:text-gold-400 uppercase tracking-wider border-b">Type</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-navy-500 dark:text-gold-400 uppercase tracking-wider border-b">Access</th>
                      </>
                    )}
                    {resource.category === "archives" && (
                      <>
                        <th className="py-3 px-4 text-left text-xs font-medium text-navy-500 dark:text-gold-400 uppercase tracking-wider border-b">Category</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-navy-500 dark:text-gold-400 uppercase tracking-wider border-b">Items</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-navy-400">
                  {resource.items?.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white dark:bg-navy-500" : "bg-navy-50/30 dark:bg-navy-400/30"}>
                      <td className="py-3 px-4 whitespace-nowrap text-gray-700 dark:text-gray-300">{item.title}</td>
                      {resource.category === "books" && (
                        <>
                          <td className="py-3 px-4 whitespace-nowrap text-gray-600 dark:text-gray-400">{item.author}</td>
                          <td className="py-3 px-4 whitespace-nowrap text-gray-600 dark:text-gray-400">{item.year}</td>
                        </>
                      )}
                      {resource.category === "journals" && (
                        <>
                          <td className="py-3 px-4 whitespace-nowrap text-gray-600 dark:text-gray-400">{item.publisher}</td>
                          <td className="py-3 px-4 whitespace-nowrap text-gray-600 dark:text-gray-400">{item.frequency}</td>
                        </>
                      )}
                      {resource.category === "digital" && (
                        <>
                          <td className="py-3 px-4 whitespace-nowrap text-gray-600 dark:text-gray-400">{item.type}</td>
                          <td className="py-3 px-4 whitespace-nowrap text-gray-600 dark:text-gray-400">{item.access}</td>
                        </>
                      )}
                      {resource.category === "archives" && (
                        <>
                          <td className="py-3 px-4 whitespace-nowrap text-gray-600 dark:text-gray-400">{item.period || item.types}</td>
                          <td className="py-3 px-4 whitespace-nowrap text-gray-600 dark:text-gray-400">{item.items}</td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

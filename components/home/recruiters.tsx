"use client"

const recruiters = [
  "TCS", "Infosys", "Wipro", "HDFC Bank", "Deloitte",
  "Accenture", "Cognizant", "ICICI Bank", "Amazon", "Reliance",
  "Bajaj Finserv", "Axis Bank", "Capgemini", "HCL Technologies", "Kotak Mahindra",
  "L&T", "Mahindra & Mahindra", "Asian Paints", "Godrej", "ITC",
]

export default function Recruiters() {
  return (
    <section className="py-16 bg-white dark:bg-navy-500 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Our Partners</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-500 dark:text-white mt-3 mb-4">
          Top <span className="text-gold-gradient">Recruiters</span>
        </h2>
        <div className="section-divider mx-auto" />
      </div>

      {/* Scrolling logos - row 1 */}
      <div className="relative w-full overflow-hidden mb-4">
        <div className="flex animate-marquee w-max">
          {[...recruiters.slice(0, 10), ...recruiters.slice(0, 10)].map((name, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-3 px-8 py-4 bg-gray-50 dark:bg-navy-400 border border-gray-100 dark:border-navy-300 rounded-lg flex items-center justify-center min-w-[160px] hover:border-gold-400 hover:shadow-md transition-all duration-300"
            >
              <span className="font-semibold text-navy-400 dark:text-gray-300 text-sm whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling logos - row 2 (reverse) */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max" style={{ animation: "marquee 30s linear infinite reverse" }}>
          {[...recruiters.slice(10), ...recruiters.slice(10)].map((name, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-3 px-8 py-4 bg-gray-50 dark:bg-navy-400 border border-gray-100 dark:border-navy-300 rounded-lg flex items-center justify-center min-w-[160px] hover:border-gold-400 hover:shadow-md transition-all duration-300"
            >
              <span className="font-semibold text-navy-400 dark:text-gray-300 text-sm whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

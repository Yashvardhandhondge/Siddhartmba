import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="font-heading text-6xl font-bold text-navy-500 dark:text-gold-400 mb-4">404</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Page Not Found</p>
      <Link href="/" className="bg-gold-500 hover:bg-gold-600 text-navy-500 font-semibold px-6 py-3 rounded-lg transition-colors">
        Return Home
      </Link>
    </div>
  )
}

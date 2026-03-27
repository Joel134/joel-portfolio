'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/40 text-sm">Joel John · Chennai, India</div>
        <div className="text-white/40 text-sm">© {currentYear}</div>
      </div>
    </footer>
  )
}

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#00D4AA] flex items-center justify-center glow-teal-sm">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L15 6V12L9 16L3 12V6L9 2Z" fill="black" />
              <path d="M9 5L13 7.5V12.5L9 15L5 12.5V7.5L9 5Z" fill="#00D4AA" opacity="0.4"/>
            </svg>
          </div>
          <span className="font-display font-700 text-xl tracking-tight text-white">
            Orbit<span className="text-[#00D4AA]">flow</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Results', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-gray-400 hover:text-[#00D4AA] transition-colors duration-200 font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00D4AA] text-black text-sm font-semibold hover:bg-[#00A888] transition-all duration-200 glow-teal-sm hover:glow-teal"
        >
          Book Free Call
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/5 px-6 pb-4">
          {['Services', 'Results', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 text-gray-400 hover:text-[#00D4AA] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-2 px-5 py-3 rounded-lg bg-[#00D4AA] text-black text-sm font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Book Free Call
          </a>
        </div>
      )}
    </nav>
  )
}

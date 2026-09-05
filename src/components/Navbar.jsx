import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Prices', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-shell sticky top-0 z-50 w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="flex items-center gap-3 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
        >
          <img
            src="/lm-prints-logo.png"
            className="h-12 w-12 rounded-xl object-cover"
            loading="lazy"
            alt="LM Prints"
          />
          <span className="text-lg font-extrabold tracking-tight text-[#2d1744]">
            LM PRINTS
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="rounded-xl p-2.5 text-purple-800 transition hover:bg-purple-100 focus:outline-none focus:ring-4 focus:ring-purple-200 md:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-purple-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="rounded-xl px-4 py-3 font-semibold text-[#2d1744] hover:bg-purple-50"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'Dell', href: '#dell' },
  { name: 'Lenovo', href: '#lenovo' },
  { name: 'HP', href: '#hp' },
  { name: 'Accessories', href: '#accessories' },
  { name: 'Contact', href: '#contact' },
  { name: 'Referral', href: '#referrals' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="ztm-trainair-tshiamo-coded-header fixed top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="ztm-trainair-tshiamo-coded-nav mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="ztm-trainair-tshiamo-coded-logo-container flex lg:flex-1">
          <Link href="/" className="ztm-trainair-tshiamo-coded-logo flex items-center gap-3 group">
            {/* Logo placeholder */}
            <div className="ztm-trainair-tshiamo-coded-logo-box h-10 w-10 border-2 border-white bg-white/5 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black">
              <span className="text-xs font-bold">TLG</span>
            </div>
            <span className="ztm-trainair-tshiamo-coded-logo-text text-lg font-light tracking-wider">The Laptop Guy</span>
          </Link>
        </div>
        <div className="ztm-trainair-tshiamo-coded-mobile-menu-button flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-white/70 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <div className="ztm-trainair-tshiamo-coded-nav-links hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="ztm-trainair-tshiamo-coded-nav-link text-sm font-light tracking-wide text-white/70 transition-colors hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      {/* Mobile menu */}
      <div
        className={`ztm-trainair-tshiamo-coded-mobile-menu lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="ztm-trainair-tshiamo-coded-mobile-menu-content space-y-1 border-t border-white/10 bg-black px-6 py-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="ztm-trainair-tshiamo-coded-mobile-nav-link block py-3 text-base font-light tracking-wide text-white/70 transition-colors hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

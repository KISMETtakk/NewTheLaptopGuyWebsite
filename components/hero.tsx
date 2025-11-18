'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ztm-trainair-tshiamo-coded-animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="hero"
      className="ztm-trainair-tshiamo-coded-hero relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      ref={heroRef}
    >
      {/* Animated background */}
      <div className="ztm-trainair-tshiamo-coded-hero-bg absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black">
        <div className="ztm-trainair-tshiamo-coded-hero-grid absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Content */}
      <div className="ztm-trainair-tshiamo-coded-hero-content relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          {/* Logo placeholder */}
          <div className="ztm-trainair-tshiamo-coded-hero-logo mb-8 inline-flex h-20 w-20 items-center justify-center border-2 border-white bg-white/5">
            <span className="text-2xl font-bold">TLG</span>
          </div>
        </div>

        <h1
          className="ztm-trainair-tshiamo-coded-hero-title mb-6 text-5xl font-light tracking-tight text-white sm:text-7xl lg:text-8xl opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <span className="block text-pretty">Premium Laptops.</span>
          <span className="block text-pretty">Professional Service.</span>
        </h1>

        <p
          className="ztm-trainair-tshiamo-coded-hero-description mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/70 sm:text-xl opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in"
          style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
        >
          Carefully inspected and cleaned laptops from Dell, Lenovo, and HP. Every device comes with a 3-month warranty and guaranteed quality.
        </p>

        <div
          className="ztm-trainair-tshiamo-coded-hero-cta flex flex-col sm:flex-row gap-4 justify-center opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in"
          style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
        >
          <a
            href="#dell"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#dell')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="ztm-trainair-tshiamo-coded-cta-primary group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide border-2 border-white bg-white text-black transition-all hover:bg-transparent hover:text-white"
          >
            Browse Laptops
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="ztm-trainair-tshiamo-coded-cta-secondary group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide border-2 border-white/30 bg-transparent text-white transition-all hover:border-white hover:bg-white hover:text-black"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="ztm-trainair-tshiamo-coded-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-6 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="h-2 w-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import { Gift, Shield, Clock, XCircle, RefreshCw } from 'lucide-react'

const terms = [
  { icon: Gift, text: 'Provided The Sale Goes Through' },
  { icon: Shield, text: 'All laptops are carefully inspected and cleaned before being sold' },
  { icon: XCircle, text: 'We do not accept laptop trade-ins' },
  { icon: XCircle, text: 'No Layby' },
  { icon: Clock, text: 'All laptops receive a 3-month warranty' },
  { icon: RefreshCw, text: 'NO REFUNDS*** (ONLY SWAPPING PROVIDED THE REASON IS VALID)' },
]

export default function ReferralSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="referral" className="ztm-trainair-tshiamo-coded-referral-section py-24 px-6 lg:px-8 border-t border-white/5" ref={sectionRef}>
      <div className="ztm-trainair-tshiamo-coded-referral-container mx-auto max-w-4xl">
        <div className="opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in text-center mb-16">
          <h2 className="ztm-trainair-tshiamo-coded-section-title text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Get <span className="text-white/50">R100</span> For Each Referral
          </h2>
          <p className="ztm-trainair-tshiamo-coded-section-description text-lg font-light text-white/60 max-w-2xl mx-auto">
            Refer a friend and earn R100 when they make a purchase
          </p>
        </div>

        <div className="ztm-trainair-tshiamo-coded-terms-list space-y-4">
          {terms.map((term, index) => (
            <div
              key={index}
              className="ztm-trainair-tshiamo-coded-term-item opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in flex items-start gap-4 border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.04]"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <term.icon className="h-5 w-5 text-white/40 mt-0.5 flex-shrink-0" />
              <p className="text-sm font-light text-white/70 leading-relaxed">{term.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

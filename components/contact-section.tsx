'use client'

import { useEffect, useRef } from 'react'
import { MessageCircle } from 'lucide-react'

export default function ContactSection() {
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

  const handleWhatsAppClick = () => {
    window.open(
      'https://api.whatsapp.com/send/?phone=27813556089&text=Hi+there%21+I+am+interested+in+purchasing+a+laptop.&type=phone_number&app_absent=0',
      '_blank'
    )
  }

  return (
    <section id="contact" className="ztm-trainair-tshiamo-coded-contact-section py-24 px-6 lg:px-8 border-t border-white/5" ref={sectionRef}>
      <div className="ztm-trainair-tshiamo-coded-contact-container mx-auto max-w-4xl text-center">
        <div className="opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in">
          <div className="ztm-trainair-tshiamo-coded-contact-icon mb-8 inline-flex h-20 w-20 items-center justify-center border-2 border-white bg-white/5 animate-pulse">
            <MessageCircle className="h-10 w-10 text-white" />
          </div>

          <h2 className="ztm-trainair-tshiamo-coded-section-title text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Get In <span className="text-white/50">Touch</span>
          </h2>

          <p className="ztm-trainair-tshiamo-coded-section-description text-lg font-light text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Have questions about our laptops? Ready to make a purchase? Contact us directly on WhatsApp for fast, friendly service.
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="ztm-trainair-tshiamo-coded-whatsapp-button group relative inline-flex items-center justify-center gap-3 px-12 py-5 text-base font-medium tracking-wide border-2 border-white bg-white text-black transition-all hover:bg-transparent hover:text-white hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Chat on WhatsApp</span>
          </button>

          <p className="ztm-trainair-tshiamo-coded-contact-availability mt-8 text-sm font-light text-white/40">
            Available during business hours • Fast response guaranteed
          </p>
        </div>
      </div>
    </section>
  )
}

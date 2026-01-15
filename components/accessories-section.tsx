'use client'

import { useEffect, useRef } from 'react'
import { Zap } from 'lucide-react'

const chargers = [
  {
    brand: 'Dell',
    types: 'Original / Generic',
    wattage: '45W / 65W / 90W',
    price: 'From R 349',
  },
  {
    brand: 'Lenovo',
    types: 'Original / Generic',
    wattage: '45W / 65W / 90W',
    price: 'From R 349',
  },
  {
    brand: 'HP',
    types: 'Original / Generic',
    wattage: '45W / 65W / 90W',
    price: 'From R 349',
  },
]

const whatsappLinks = [
  'https://api.whatsapp.com/send/?phone=27813556089&text=Hi+Tshiamo%21+I+am+interested+in+purchasing+a+laptop+charger.&type=phone_number&app_absent=0',
  'https://api.whatsapp.com/send/?phone=27817134203&text=Hi+Gucci%21+I+am+interested+in+purchasing+a+laptop+charger.&type=phone_number&app_absent=0',
]

export default function AccessoriesSection() {
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

  const handleBuyNow = () => {
    const randomLink = whatsappLinks[Math.floor(Math.random() * whatsappLinks.length)]
    window.open(randomLink, '_blank')
  }

  return (
    <section id="accessories" className="ztm-trainair-tshiamo-coded-accessories-section py-24 px-6 lg:px-8 border-t border-white/5" ref={sectionRef}>
      <div className="ztm-trainair-tshiamo-coded-accessories-container mx-auto max-w-7xl">
        <div className="ztm-trainair-tshiamo-coded-section-header mb-16 text-center opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in">
          <h2 className="ztm-trainair-tshiamo-coded-section-title text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
            Accessories <span className="text-white/50">& Chargers</span>
          </h2>
          <p className="ztm-trainair-tshiamo-coded-section-description text-lg font-light text-white/60 max-w-2xl mx-auto">
            Original and generic chargers for all major laptop brands
          </p>
        </div>

        <div className="ztm-trainair-tshiamo-coded-accessories-grid grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {chargers.map((charger, index) => (
            <div
              key={index}
              className="ztm-trainair-tshiamo-coded-accessory-card group relative opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/[0.04]"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              {/* Charger image placeholder */}
              <div className="ztm-trainair-tshiamo-coded-accessory-image relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Zap className="h-16 w-16 text-white/20 mx-auto mb-4 group-hover:text-white/40 transition-colors" />
                    <div className="text-sm font-light text-white/50">{charger.brand} Charger</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="ztm-trainair-tshiamo-coded-accessory-content p-6 space-y-4">
                <h3 className="ztm-trainair-tshiamo-coded-accessory-title text-2xl font-light tracking-wide text-white">
                  {charger.brand} Chargers
                </h3>
                <div className="ztm-trainair-tshiamo-coded-accessory-specs space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Type</span>
                    <span className="text-white/80 font-light">{charger.types}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Wattage</span>
                    <span className="text-white/80 font-light">{charger.wattage}</span>
                  </div>
                </div>

                <div className="ztm-trainair-tshiamo-coded-accessory-footer flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="ztm-trainair-tshiamo-coded-accessory-price text-2xl font-light text-white">{charger.price}</div>
                  <button
                    onClick={handleBuyNow}
                    className="ztm-trainair-tshiamo-coded-buy-button px-6 py-3 text-sm font-medium tracking-wide border-2 border-white bg-white text-black transition-all hover:bg-transparent hover:text-white"
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

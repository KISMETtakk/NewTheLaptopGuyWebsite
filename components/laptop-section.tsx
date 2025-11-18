'use client'

import { useEffect, useRef } from 'react'
import LaptopCard from './laptop-card'

const laptopData = {
  Dell: [
    {
      processor: 'i3',
      ram: '8GB',
      ssd: '256GB',
      price: 'R 4,999',
      performance: 7.5,
      summary: 'Perfect for everyday tasks, web browsing, and office work',
    },
    {
      processor: 'i5',
      ram: '16GB',
      ssd: '512GB',
      price: 'R 7,999',
      performance: 8.5,
      summary: 'Ideal for multitasking, productivity, and light content creation',
    },
    {
      processor: 'i7',
      ram: '16GB',
      ssd: '512GB',
      price: 'R 11,999',
      performance: 9.5,
      summary: 'Professional-grade performance for demanding applications',
    },
  ],
  Lenovo: [
    {
      processor: 'i3',
      ram: '8GB',
      ssd: '256GB',
      price: 'R 4,799',
      performance: 7.3,
      summary: 'Reliable performance for daily computing needs',
    },
    {
      processor: 'i5',
      ram: '16GB',
      ssd: '512GB',
      price: 'R 7,799',
      performance: 8.7,
      summary: 'Balanced power and efficiency for professionals',
    },
    {
      processor: 'i7',
      ram: '16GB',
      ssd: '512GB',
      price: 'R 11,799',
      performance: 9.3,
      summary: 'High-performance computing for power users',
    },
  ],
  HP: [
    {
      processor: 'i3',
      ram: '8GB',
      ssd: '256GB',
      price: 'R 4,899',
      performance: 7.4,
      summary: 'Dependable laptop for essential computing tasks',
    },
    {
      processor: 'i5',
      ram: '16GB',
      ssd: '512GB',
      price: 'R 7,899',
      performance: 8.6,
      summary: 'Versatile performance for work and entertainment',
    },
    {
      processor: 'i7',
      ram: '16GB',
      ssd: '512GB',
      price: 'R 11,899',
      performance: 9.4,
      summary: 'Premium performance for intensive workloads',
    },
  ],
}

interface LaptopSectionProps {
  brand: 'Dell' | 'Lenovo' | 'HP'
  id: string
}

export default function LaptopSection({ brand, id }: LaptopSectionProps) {
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

  const laptops = laptopData[brand]

  return (
    <section id={id} className="ztm-trainair-tshiamo-coded-laptop-section py-24 px-6 lg:px-8 border-t border-white/5" ref={sectionRef}>
      <div className="ztm-trainair-tshiamo-coded-laptop-container mx-auto max-w-7xl">
        <div className="ztm-trainair-tshiamo-coded-section-header mb-16 text-center opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in">
          <h2 className="ztm-trainair-tshiamo-coded-section-title text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
            {brand} <span className="text-white/50">Collection</span>
          </h2>
          <p className="ztm-trainair-tshiamo-coded-section-description text-lg font-light text-white/60 max-w-2xl mx-auto">
            Premium {brand} laptops with guaranteed quality and 3-month warranty
          </p>
        </div>

        <div className="ztm-trainair-tshiamo-coded-laptop-grid grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {laptops.map((laptop, index) => (
            <LaptopCard key={index} brand={brand} laptop={laptop} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

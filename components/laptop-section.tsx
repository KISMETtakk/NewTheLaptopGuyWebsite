'use client'

import { useEffect, useRef } from 'react'
import LaptopCard from './laptop-card'

const laptopData = {
  Dell: [
    {
      processor: 'i3',
      ram: '8GB',
      ssd: '256GB',
      price: 'R 3,599',
      performance: 7.6,
      summary: 'Perfect for everyday tasks, web browsing, and office work',
      images: [
        '/laptops/Dell/i3/1.png',
        '/laptops/Dell/i3/2.png',
        '/laptops/Dell/i3/3.png',
      ],
    },
    {
      processor: 'i5',
      ram: '16GB',
      ssd: '256GB',
      price: 'R 4,799',
      performance: 9.2,
      summary: 'Ideal for multitasking, productivity, and light content creation',
      images: [
        '/laptops/Dell/i5/1.png',
        '/laptops/Dell/i5/2.png',
        '/laptops/Dell/i5/3.png',
      ],
    },
    {
      processor: 'i7',
      ram: '16GB',
      ssd: '512GB',
      price: 'R 5,499',
      performance: 9.8,
      summary: 'Professional-grade performance for demanding applications',
      images: [
        '/laptops/Dell/i7/1.png',
        '/laptops/Dell/i7/2.png',
        '/laptops/Dell/i7/3.png',
      ],
    },
  ],
  Lenovo: [
    {
      processor: 'i3',
      ram: '8GB',
      ssd: '256GB',
      price: 'R 3,499',
      performance: 7.3,
      summary: 'Reliable performance for daily computing needs',
      images: [
        '/laptops/Lenovo/i3/1.png',
        '/laptops/Lenovo/i3/2.png',
        '/laptops/Lenovo/i3/3.png',
      ],
    },
    {
      processor: 'i5',
      ram: '16GB',
      ssd: '256GB',
      price: 'R 4,699',
      performance: 8.7,
      summary: 'Balanced power and efficiency for professionals',
      images: [
        '/laptops/Lenovo/i5/1.png',
        '/laptops/Lenovo/i5/2.png',
        '/laptops/Lenovo/i5/3.png',
      ],
    },
    {
      processor: 'i7',
      ram: '16GB',
      ssd: '256GB',
      price: 'R 5,399',
      performance: 9.5,
      summary: 'High-performance computing for power users',
      images: [
        '/laptops/Lenovo/i7/1.png',
        '/laptops/Lenovo/i7/2.png',
        '/laptops/Lenovo/i7/3.png',
      ],
    },
  ],
  HP: [
    {
      processor: 'i3',
      ram: '8GB',
      ssd: '256GB',
      price: 'R 3,499',
      performance: 7.4,
      summary: 'Dependable laptop for essential computing tasks',
      images: [
        '/laptops/Hp/i3/1.png',
        '/laptops/Hp/i3/2.png',
        '/laptops/Hp/i3/3.png',
      ],
    },
    {
      processor: 'i5',
      ram: '16GB',
      ssd: '256GB',
      price: 'R 4,799',
      performance: 8.6,
      summary: 'Versatile performance for work and entertainment',
      images: [
        '/laptops/Hp/i5/1.png',
        '/laptops/Hp/i5/2.png',
        '/laptops/Hp/i5/3.png',
      ],
    },
    {
      processor: 'i7',
      ram: '16GB',
      ssd: '512GB',
      price: 'R 5,599',
      performance: 9.4,
      summary: 'Premium performance for intensive workloads',
      images: [
        '/laptops/Hp/i7/1.png',
        '/laptops/Hp/i7/2.png',
        '/laptops/Hp/i7/3.png',
      ],
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

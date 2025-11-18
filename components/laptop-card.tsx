'use client'

import { useState, useEffect, useRef } from 'react'
import { Cpu, HardDrive, Zap, Clock, ChevronLeft, ChevronRight } from 'lucide-react'

interface LaptopCardProps {
  brand: string
  laptop: {
    processor: string
    ram: string
    ssd: string
    price: string
    performance: number
    summary: string
  }
  index: number
}

export default function LaptopCard({ brand, laptop, index }: LaptopCardProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [animatedScore, setAnimatedScore] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showSwipeHint, setShowSwipeHint] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  const whatsappLinks = [
    'https://api.whatsapp.com/send/?phone=27813556089&text=Hi+Tshiamo%21+I+am+interested+in+purchasing+a+laptop.&type=phone_number&app_absent=0',
    'https://api.whatsapp.com/send/?phone=27817134203&text=Hi+Gucci%21+I+am+interested+in+purchasing+a+laptop.&type=phone_number&app_absent=0',
  ]

  const handleBuyNow = () => {
    const randomLink = whatsappLinks[Math.floor(Math.random() * whatsappLinks.length)]
    window.open(randomLink, '_blank')
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile && showSwipeHint) {
      const timer = setTimeout(() => {
        setShowSwipeHint(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isMobile, showSwipeHint])

  useEffect(() => {
    if (!isMobile && isHovering) {
      // Desktop hover behavior - keep as is
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % 3)
      }, 2000)
    } else if (isMobile) {
      // Mobile auto-play behavior
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % 3)
      }, 3000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      if (!isMobile) {
        setCurrentImage(0)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovering, isMobile])

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!isMobile) return
    const swipeDistance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swipe left - next image
        setCurrentImage((prev) => (prev + 1) % 3)
      } else {
        // Swipe right - previous image
        setCurrentImage((prev) => (prev - 1 + 3) % 3)
      }
    }
  }

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev - 1 + 3) % 3)
  }

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev + 1) % 3)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            // Animate performance score
            const duration = 1500
            const steps = 60
            const increment = laptop.performance / steps
            let current = 0

            const timer = setInterval(() => {
              current += increment
              if (current >= laptop.performance) {
                setAnimatedScore(laptop.performance)
                clearInterval(timer)
              } else {
                setAnimatedScore(current)
              }
            }, duration / steps)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [laptop.performance, hasAnimated])

  return (
    <div
      ref={cardRef}
      className="ztm-trainair-tshiamo-coded-card group relative opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/[0.04]"
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
    >
      <div
        ref={imageContainerRef}
        className="ztm-trainair-tshiamo-coded-image-container relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] cursor-pointer"
        onMouseEnter={() => !isMobile && setIsHovering(true)}
        onMouseLeave={() => !isMobile && setIsHovering(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Placeholder for laptop images */}
        <div className="ztm-trainair-tshiamo-coded-image-placeholder absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="ztm-trainair-tshiamo-coded-brand-box mb-4 inline-flex h-24 w-32 items-center justify-center border border-white/20 bg-white/5">
              <span className="text-sm font-light text-white/50">
                {brand} {laptop.processor}
              </span>
            </div>
            <div className="ztm-trainair-tshiamo-coded-image-indicators flex justify-center gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`ztm-trainair-tshiamo-coded-indicator h-1 w-8 transition-all duration-500 ${
                    currentImage === i ? 'bg-white' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {isMobile && showSwipeHint && (
          <div className="ztm-trainair-tshiamo-coded-swipe-hint absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 px-4 py-2 text-xs text-white/70 backdrop-blur-sm border border-white/20 animate-pulse">
            ← Swipe to browse →
          </div>
        )}

        {isMobile && (
          <>
            <button
              onClick={handlePrevImage}
              className="ztm-trainair-tshiamo-coded-nav-btn ztm-trainair-tshiamo-coded-nav-prev absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white/70 backdrop-blur-sm border border-white/20 hover:bg-black/70 hover:text-white transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNextImage}
              className="ztm-trainair-tshiamo-coded-nav-btn ztm-trainair-tshiamo-coded-nav-next absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white/70 backdrop-blur-sm border border-white/20 hover:bg-black/70 hover:text-white transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className="ztm-trainair-tshiamo-coded-card-content p-6 space-y-4">
        {/* Brand and processor */}
        <div className="ztm-trainair-tshiamo-coded-card-header">
          <h3 className="ztm-trainair-tshiamo-coded-card-title text-2xl font-light tracking-wide text-white">
            {brand} {laptop.processor}
          </h3>
          <p className="ztm-trainair-tshiamo-coded-card-summary mt-2 text-sm font-light text-white/60 leading-relaxed">{laptop.summary}</p>
        </div>

        {/* Specs grid */}
        <div className="ztm-trainair-tshiamo-coded-specs-grid grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
          <div className="ztm-trainair-tshiamo-coded-spec-item flex items-center gap-2">
            <Cpu className="h-4 w-4 text-white/40" />
            <span className="text-sm font-light text-white/70">{laptop.processor} Processor</span>
          </div>
          <div className="ztm-trainair-tshiamo-coded-spec-item flex items-center gap-2">
            <Zap className="h-4 w-4 text-white/40" />
            <span className="text-sm font-light text-white/70">{laptop.ram} RAM</span>
          </div>
          <div className="ztm-trainair-tshiamo-coded-spec-item flex items-center gap-2">
            <HardDrive className="h-4 w-4 text-white/40" />
            <span className="text-sm font-light text-white/70">{laptop.ssd} SSD</span>
          </div>
          <div className="ztm-trainair-tshiamo-coded-spec-item flex items-center gap-2">
            <Clock className="h-4 w-4 text-white/40" />
            <span className="text-sm font-light text-white/70">Fast & Reliable</span>
          </div>
        </div>

        {/* Performance rating */}
        <div className="ztm-trainair-tshiamo-coded-performance pt-4 border-t border-white/10">
          <div className="ztm-trainair-tshiamo-coded-performance-header flex items-center justify-between mb-2">
            <span className="text-sm font-light text-white/60">Performance</span>
            <span className="ztm-trainair-tshiamo-coded-performance-score text-2xl font-light text-white tabular-nums">
              {animatedScore.toFixed(1)}
              <span className="text-sm text-white/40">/10</span>
            </span>
          </div>
          <div className="ztm-trainair-tshiamo-coded-performance-bar h-1 bg-white/10 overflow-hidden">
            <div
              className="ztm-trainair-tshiamo-coded-performance-fill h-full bg-white transition-all duration-1000 ease-out"
              style={{ width: `${(animatedScore / 10) * 100}%` }}
            />
          </div>
        </div>

        {/* Price and button */}
        <div className="ztm-trainair-tshiamo-coded-card-footer flex items-center justify-between pt-4">
          <div className="ztm-trainair-tshiamo-coded-price text-3xl font-light text-white">{laptop.price}</div>
          <button
            onClick={handleBuyNow}
            className="ztm-trainair-tshiamo-coded-buy-button px-6 py-3 text-sm font-medium tracking-wide border-2 border-white bg-white text-black transition-all hover:bg-transparent hover:text-white"
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  )
}

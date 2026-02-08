"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Cpu, HardDrive, Zap, Clock, ChevronLeft, ChevronRight } from "lucide-react"

interface LaptopCardProps {
  brand: string
  laptop: {
    processor: string
    ram: string
    ssd: string
    price: string
    performance: number
    summary: string
    images: string[]
    outOfStock?: boolean
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

  const [selectedRam, setSelectedRam] = useState<"8GB" | "16GB">("8GB")
  const [selectedSsd, setSelectedSsd] = useState<"256GB" | "512GB">("256GB")

const basePrice = Number.parseInt(laptop.price.replace(/[R,]/g, ""))
  const ramUpgradePrice = selectedRam === "16GB" ? 300 : 0
  const ssdUpgradePrice = selectedSsd === "512GB" ? 300 : 0
  const totalPrice = basePrice + ramUpgradePrice + ssdUpgradePrice
  // Use explicit locale to prevent hydration mismatch between server and client
  const formattedPrice = `R${totalPrice.toLocaleString('en-ZA')}`

  const whatsappLinks = [
    "https://api.whatsapp.com/send/?phone=27813556089&text=Hi+Tshiamo%21+I+am+interested+in+purchasing+a+laptop.&type=phone_number&app_absent=0",
    "https://api.whatsapp.com/send/?phone=27817134203&text=Hi+Gucci%21+I+am+interested+in+purchasing+a+laptop.&type=phone_number&app_absent=0",
  ]

  const handleBuyNow = () => {
    const contactNames = ["Tshiamo", "Gucci"]
    const phones = ["27813556089", "27817134203"]
    const randomIndex = Math.floor(Math.random() * 2)
    const contactName = contactNames[randomIndex]
    const phone = phones[randomIndex]

    const message = `Hi ${contactName}! I am interested in purchasing a laptop.

Brand: ${brand}
Processor: ${laptop.processor}
RAM: ${selectedRam}
Storage: ${selectedSsd}
Price: ${formattedPrice}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodedMessage}&type=phone_number&app_absent=0`

    window.open(whatsappUrl, "_blank")
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
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
        setCurrentImage((prev) => (prev + 1) % laptop.images.length)
      }, 2000)
    } else if (isMobile) {
      // Mobile auto-play behavior
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % laptop.images.length)
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
        setCurrentImage((prev) => (prev + 1) % laptop.images.length)
      } else {
        // Swipe right - previous image
        setCurrentImage((prev) => (prev - 1 + laptop.images.length) % laptop.images.length)
      }
    }
  }

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev - 1 + laptop.images.length) % laptop.images.length)
  }

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev + 1) % laptop.images.length)
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
      { threshold: 0.3 },
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
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
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
        {/* Actual images */}
        {laptop.images.map((image, i) => (
          <img
            key={i}
            src={image || "/placeholder.svg"}
            alt={`${brand} ${laptop.processor} - Image ${i + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              currentImage === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Image indicators */}
        <div className="ztm-trainair-tshiamo-coded-image-indicators absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/50 px-3 py-2 backdrop-blur-sm border border-white/20">
          {laptop.images.map((_, i) => (
            <div
              key={i}
              className={`ztm-trainair-tshiamo-coded-indicator h-1.5 w-8 transition-all duration-500 ${
                currentImage === i ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        {isMobile && showSwipeHint && (
          <div className="ztm-trainair-tshiamo-coded-swipe-hint absolute top-4 left-1/2 -translate-x-1/2 bg-black/80 px-4 py-2 text-xs text-white/70 backdrop-blur-sm border border-white/20 animate-pulse">
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
          <p className="ztm-trainair-tshiamo-coded-card-summary mt-2 text-sm font-light text-white/60 leading-relaxed">
            {laptop.summary}
          </p>
        </div>

        {/* Specs grid */}
        <div className="ztm-trainair-tshiamo-coded-specs-grid grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
          <div className="ztm-trainair-tshiamo-coded-spec-item flex items-center gap-2">
            <Cpu className="h-4 w-4 text-white/40" />
            <span className="text-sm font-light text-white/70">{laptop.processor} Processor</span>
          </div>
          <div className="ztm-trainair-tshiamo-coded-spec-item flex items-center gap-2">
            <Zap className="h-4 w-4 text-white/40" />
            <span className="text-sm font-light text-white/70">{selectedRam} RAM</span>
          </div>
          <div className="ztm-trainair-tshiamo-coded-spec-item flex items-center gap-2">
            <HardDrive className="h-4 w-4 text-white/40" />
            <span className="text-sm font-light text-white/70">{selectedSsd} SSD</span>
          </div>
          <div className="ztm-trainair-tshiamo-coded-spec-item flex items-center gap-2">
            <Clock className="h-4 w-4 text-white/40" />
            <span className="text-sm font-light text-white/70">Fast & Reliable</span>
          </div>
        </div>

        <div className="ztm-trainair-tshiamo-coded-config-section pt-4 border-t border-white/10 space-y-3">
          {/* RAM Options */}
          <div className="ztm-trainair-tshiamo-coded-config-group">
            <p className="text-xs font-medium text-white/50 mb-2 tracking-wide uppercase">RAM Configuration</p>
            <div className="flex gap-2">
              <label
                className={`ztm-trainair-tshiamo-coded-config-option flex-1 flex items-center gap-2 px-3 py-2 border cursor-pointer transition-all ${
                  selectedRam === "8GB"
                    ? "border-white bg-white/10 text-white"
                    : "border-white/20 bg-white/[0.02] text-white/50 hover:border-white/40"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedRam === "8GB"}
                  onChange={() => setSelectedRam("8GB")}
                  className="ztm-trainair-tshiamo-coded-checkbox h-4 w-4 border-white/30 bg-transparent checked:bg-white"
                />
                <span className="text-sm font-light">8GB</span>
              </label>
              <label
                className={`ztm-trainair-tshiamo-coded-config-option flex-1 flex items-center gap-2 px-3 py-2 border cursor-pointer transition-all ${
                  selectedRam === "16GB"
                    ? "border-white bg-white/10 text-white"
                    : "border-white/20 bg-white/[0.02] text-white/50 hover:border-white/40"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedRam === "16GB"}
                  onChange={() => setSelectedRam("16GB")}
                  className="ztm-trainair-tshiamo-coded-checkbox h-4 w-4 border-white/30 bg-transparent checked:bg-white"
                />
                <span className="text-sm font-light">16GB</span>
                <span className="text-xs text-white/40 ml-auto">+R300</span>
              </label>
            </div>
          </div>

          {/* SSD Options */}
          <div className="ztm-trainair-tshiamo-coded-config-group">
            <p className="text-xs font-medium text-white/50 mb-2 tracking-wide uppercase">SSD Configuration</p>
            <div className="flex gap-2">
              <label
                className={`ztm-trainair-tshiamo-coded-config-option flex-1 flex items-center gap-2 px-3 py-2 border cursor-pointer transition-all ${
                  selectedSsd === "256GB"
                    ? "border-white bg-white/10 text-white"
                    : "border-white/20 bg-white/[0.02] text-white/50 hover:border-white/40"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSsd === "256GB"}
                  onChange={() => setSelectedSsd("256GB")}
                  className="ztm-trainair-tshiamo-coded-checkbox h-4 w-4 border-white/30 bg-transparent checked:bg-white"
                />
                <span className="text-sm font-light">256GB</span>
              </label>
              <label
                className={`ztm-trainair-tshiamo-coded-config-option flex-1 flex items-center gap-2 px-3 py-2 border cursor-pointer transition-all ${
                  selectedSsd === "512GB"
                    ? "border-white bg-white/10 text-white"
                    : "border-white/20 bg-white/[0.02] text-white/50 hover:border-white/40"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSsd === "512GB"}
                  onChange={() => setSelectedSsd("512GB")}
                  className="ztm-trainair-tshiamo-coded-checkbox h-4 w-4 border-white/30 bg-transparent checked:bg-white"
                />
                <span className="text-sm font-light">512GB</span>
                <span className="text-xs text-white/40 ml-auto">+R300</span>
              </label>
            </div>
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

        <div className="ztm-trainair-tshiamo-coded-card-footer flex items-center justify-between pt-4">
          <div className="ztm-trainair-tshiamo-coded-price text-3xl font-light text-white">{formattedPrice}</div>

          {/* IN STOCK BUTTON (default) */}
          {!laptop.outOfStock && (
            <button
              onClick={handleBuyNow}
              className="ztm-trainair-tshiamo-coded-buy-button px-6 py-3 text-sm font-medium tracking-wide border-2 border-white bg-white text-black transition-all hover:bg-transparent hover:text-white"
            >
              Save Configuration
            </button>
          )}

          {/* OUT OF STOCK BUTTON */}
          {laptop.outOfStock && (
            <button
              disabled
              className="ztm-trainair-tshiamo-coded-buy-button px-6 py-3 text-sm font-medium tracking-wide border-2 border-white/30 bg-white/10 text-white/40 cursor-not-allowed opacity-50"
            >
              OUT OF STOCK
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

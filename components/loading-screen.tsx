'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="ztm-trainair-tshiamo-coded-loading-screen fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="ztm-trainair-tshiamo-coded-loading-bg absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="ztm-trainair-tshiamo-coded-loading-content relative z-10 text-center">
        <div className="ztm-trainair-tshiamo-coded-laptop-animation relative mx-auto mb-12">
          {/* Laptop screen */}
          <div className="ztm-trainair-tshiamo-coded-laptop-screen relative mx-auto h-32 w-44 border-2 border-white/20 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm">
            {/* Inner screen with glow */}
            <div className="ztm-trainair-tshiamo-coded-laptop-inner absolute inset-3 border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
              {/* TLG Logo with pulse */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="ztm-trainair-tshiamo-coded-logo-text text-2xl font-light tracking-[0.3em] text-white/90 animate-pulse">
                  TLG
                </div>
              </div>
              {/* Scanning line effect */}
              <div className="ztm-trainair-tshiamo-coded-scan-line absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent ztm-trainair-tshiamo-coded-animate-scan" />
            </div>
          </div>
          
          {/* Laptop base */}
          <div className="ztm-trainair-tshiamo-coded-laptop-base relative mx-auto h-3 w-52 border-x-2 border-b-2 border-white/20 bg-gradient-to-b from-white/10 to-white/5">
            <div className="ztm-trainair-tshiamo-coded-laptop-trackpad absolute left-1/2 top-0 h-full w-16 -translate-x-1/2 bg-white/5" />
          </div>
          
          {/* Glowing orbs around laptop */}
          <div className="ztm-trainair-tshiamo-coded-glow-container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="ztm-trainair-tshiamo-coded-glow-orb-1 absolute h-32 w-32 rounded-full bg-white/10 blur-3xl animate-pulse" />
            <div className="ztm-trainair-tshiamo-coded-glow-orb-2 absolute h-40 w-40 rounded-full bg-white/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        <div className="ztm-trainair-tshiamo-coded-progress-container mx-auto w-64 space-y-4">
          <div className="ztm-trainair-tshiamo-coded-progress-bar h-[2px] bg-white/10 overflow-hidden">
            <div 
              className="ztm-trainair-tshiamo-coded-progress-fill h-full bg-white transition-all duration-100 ease-linear shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="ztm-trainair-tshiamo-coded-progress-info flex items-center justify-between text-sm font-light">
            <span className="ztm-trainair-tshiamo-coded-progress-label text-white/50 tracking-widest">LOADING</span>
            <span className="ztm-trainair-tshiamo-coded-progress-percent text-white/70 tabular-nums">{progress}%</span>
          </div>
        </div>

        <div className="ztm-trainair-tshiamo-coded-loading-dots mt-8 flex justify-center gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="ztm-trainair-tshiamo-coded-loading-dot h-1 w-1 rounded-full bg-white/40"
              style={{
                animation: 'pulse 1.5s ease-in-out infinite',
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Play, Volume2, VolumeX, Maximize2, Clock, Eye } from 'lucide-react'

interface VideoCardProps {
  videoId: string
  title: string
  duration: string
  onExpand: () => void
  index: number
  isVisible: boolean
  isActivePreview: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}

export default function VideoCard({ 
  videoId, 
  title, 
  duration, 
  onExpand, 
  index, 
  isVisible,
  isActivePreview,
  onHoverStart,
  onHoverEnd
}: VideoCardProps) {
  const [isMuted, setIsMuted] = useState(true)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Use isActivePreview from parent to determine if this card should show video
  const isHovering = isActivePreview
  const showControls = isActivePreview

  useEffect(() => {
    // Detect touch device
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    checkTouchDevice()
    window.addEventListener('resize', checkTouchDevice)
    return () => window.removeEventListener('resize', checkTouchDevice)
  }, [])

  // Reset mute state when user stops hovering - ensures fresh state when they return
  useEffect(() => {
    if (!isActivePreview) {
      setIsMuted(true)
    }
  }, [isActivePreview])

  

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      onHoverStart()
    }
  }

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      onHoverEnd()
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isTouchDevice) {
      e.preventDefault()
      if (isActivePreview) {
        onHoverEnd()
      } else {
        onHoverStart()
      }
    }
  }

  const toggleMute = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation()
    e.preventDefault()
    const newMuted = !isMuted
    setIsMuted(newMuted)
    
    // Use YouTube iframe API via postMessage to mute/unmute without reloading
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: newMuted ? 'mute' : 'unMute',
        }),
        '*'
      )
    }
  }

  const handleExpand = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation()
    e.preventDefault()
    onExpand()
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const thumbnailUrlFallback = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  
  // YouTube embed URL with autoplay - starts muted, use enablejsapi for postMessage control
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${videoId}&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`

  return (
    <div
      ref={cardRef}
      className={`ztm-trainair-tshiamo-coded-video-card group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0a0a0a] to-[#111111] transition-all duration-500 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onClick={handleExpand}
    >
      {/* Thumbnail / Video Container */}
      <div className="ztm-trainair-tshiamo-coded-video-thumbnail relative aspect-video overflow-hidden lg:aspect-[21/9]">
        {/* Thumbnail Image - visible when not hovering */}
        <img
          src={thumbnailUrl || "/placeholder.svg"}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovering ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
          }`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = thumbnailUrlFallback
          }}
        />

        {/* YouTube Embed - visible on hover for actual video preview */}
        {isHovering && (
          <iframe
            ref={iframeRef}
            src={embedUrl}
            title={`${title} preview`}
            className="absolute inset-0 w-full h-full pointer-events-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        {/* Animated overlay on hover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-500 pointer-events-none ${
            isHovering ? 'opacity-70' : 'opacity-60'
          }`} 
        />

        {/* Scanning line effect on hover */}
        {isHovering && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="ztm-trainair-tshiamo-coded-animate-scan absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>
        )}

        {/* Play Icon - Animated */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isHovering ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
        }`}>
          <div className="ztm-trainair-tshiamo-coded-video-play-btn w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40">
            <Play className="h-7 w-7 lg:h-9 lg:w-9 text-white ml-1" fill="white" />
          </div>
        </div>

        {/* Preview Indicator - Animated badge on hover */}
        {isHovering && (
          <div className="absolute top-3 left-3 z-10">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full border border-white/30 animate-pulse">
              <div className="relative flex items-center gap-1">
                {/* Animated eye icon */}
                <Eye className="h-3.5 w-3.5 text-white animate-bounce" style={{ animationDuration: '1s' }} />
                {/* Pulsing dot */}
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-xs font-semibold text-white tracking-wide uppercase">Preview</span>
              {/* Animated bars */}
              <div className="flex items-center gap-0.5 ml-1">
                <span className="w-0.5 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0ms', animationDuration: '0.5s' }} />
                <span className="w-0.5 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '100ms', animationDuration: '0.5s' }} />
                <span className="w-0.5 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '200ms', animationDuration: '0.5s' }} />
                <span className="w-0.5 h-3.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '300ms', animationDuration: '0.5s' }} />
                <span className="w-0.5 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '400ms', animationDuration: '0.5s' }} />
              </div>
            </div>
          </div>
        )}

        {/* Duration Badge */}
        <div className="absolute top-3 right-3 px-3 py-1.5 bg-black/80 backdrop-blur-sm rounded-lg flex items-center gap-2 border border-white/10">
          <Clock className="h-3.5 w-3.5 text-white/80" />
          <span className="text-xs font-semibold text-white tracking-wide">{duration}</span>
        </div>

        {/* Custom Controls (visible on hover/touch) - Only Mute and Expand */}
        <div
          className={`ztm-trainair-tshiamo-coded-video-controls absolute bottom-0 left-0 right-0 p-4 transition-all duration-400 ${
            showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Control Buttons - Mute/Unmute (desktop only) and Expand */}
          <div className="flex items-center justify-end gap-2">
            {/* Mute/Unmute - Hidden on mobile/tablet, only visible on desktop */}
            <button
              onClick={toggleMute}
              className="ztm-trainair-tshiamo-coded-video-control-btn hidden lg:flex w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center transition-all hover:bg-white/25 hover:border-white/40 active:scale-90"
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5 text-white" />
              ) : (
                <Volume2 className="h-5 w-5 text-white" />
              )}
            </button>

            {/* Expand */}
            <button
              onClick={handleExpand}
              className="ztm-trainair-tshiamo-coded-video-control-btn w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all hover:bg-white/35 hover:border-white/50 active:scale-90"
            >
              <Maximize2 className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Card Info - Always visible */}
      <div className="ztm-trainair-tshiamo-coded-video-info p-5 lg:p-6 border-t border-white/5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className={`ztm-trainair-tshiamo-coded-video-title text-base lg:text-lg font-medium tracking-wide text-white leading-snug transition-all duration-500 ${
              isHovering ? 'text-white' : 'text-white/90'
            }`}>
              <span
                className={`inline-block transition-transform duration-700 ${
                  isHovering ? 'translate-x-1' : 'translate-x-0'
                }`}
              >
                {title}
              </span>
            </h3>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs lg:text-sm text-white/40 font-light flex items-center gap-1.5">
                <Eye className="h-3 w-3 lg:h-3.5 lg:w-3.5" />
                {isTouchDevice ? 'Tap to preview' : 'Hover to preview'}
              </span>
            </div>
          </div>
          <div className={`flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${
            isHovering ? 'bg-white/10 border-white/20 rotate-12' : ''
          }`}>
            <Play className="h-4 w-4 lg:h-5 lg:w-5 text-white/60" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Border glow effect on hover */}
      <div
        className={`absolute inset-0 pointer-events-none rounded-xl transition-all duration-500 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 40px rgba(255,255,255,0.1)',
        }}
      />
    </div>
  )
}

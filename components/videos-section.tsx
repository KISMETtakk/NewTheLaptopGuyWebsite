'use client'

import { useState, useEffect, useRef } from 'react'
import VideoCard from './video-card'
import { X, Play } from 'lucide-react'

// Dynamic video data - add new videos here and cards will be auto-generated
const videos = [
  {
    id: '5WXWTCRCN2s',
    title: 'Things to Avoid With Your Laptop',
    duration: '8:42',
  },
  {
    id: 'vu5aAyy0zCU',
    title: 'Laptop Care Tips & Tricks',
    duration: '12:15',
  },
  {
    id: 'tABqVrSs2vA',
    title: 'How to Download Drivers',
    duration: '6:33',
  },
  {
    id: 'uOEL7DJYw_o',
    title: 'Common Laptop Mistakes',
    duration: '9:18',
  },
  {
    id: 'YPJAtG3roYw',
    title: 'How to Update Drivers',
    duration: '7:45',
  },
]

export default function VideosSection() {
  const [showPopup, setShowPopup] = useState(false)
  const [hasShownPopup, setHasShownPopup] = useState(false)
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null)
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false)
  const [activePreviewId, setActivePreviewId] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Check for programmatic scroll flag from sessionStorage
  useEffect(() => {
    const checkProgrammaticScroll = () => {
      const flag = window.sessionStorage.getItem('ztm-programmatic-scroll')
      setIsProgrammaticScroll(flag === 'true')
    }
    
    // Check immediately
    checkProgrammaticScroll()
    
    // Set up interval to check periodically
    const interval = setInterval(checkProgrammaticScroll, 100)
    
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only show popup if:
          // 1. Section is visible
          // 2. Popup hasn't been shown yet
          // 3. Not a programmatic scroll (from referral button)
          if (entry.isIntersecting && !hasShownPopup && !isProgrammaticScroll) {
            // Add a small delay to ensure it's a natural scroll
            setTimeout(() => {
              if (!isProgrammaticScroll) {
                setShowPopup(true)
                setHasShownPopup(true)
              }
            }, 300)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasShownPopup, isProgrammaticScroll])

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  const handleExpandVideo = (videoId: string) => {
    setExpandedVideo(videoId)
  }

  const handleCloseExpanded = () => {
    setExpandedVideo(null)
  }

  return (
    <>
      {/* Videos Info Popup */}
      {showPopup && (
        <>
          <div 
            className="ztm-trainair-tshiamo-coded-popup-backdrop"
            onClick={handleClosePopup}
          />
          <div className="ztm-trainair-tshiamo-coded-popup-container">
            <div className="ztm-trainair-tshiamo-coded-popup">
              <button
                onClick={handleClosePopup}
                className="ztm-trainair-tshiamo-coded-close-btn"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="ztm-trainair-tshiamo-coded-popup-content">
                <div className="ztm-trainair-tshiamo-coded-popup-icon">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path className="ztm-trainair-tshiamo-coded-icon-path-1" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path className="ztm-trainair-tshiamo-coded-icon-path-2" d="M10 9l5 3-5 3V9z" fill="currentColor" />
                  </svg>
                </div>
                <h3 
                  className="ztm-trainair-tshiamo-coded-popup-title ztm-trainair-tshiamo-coded-text-animate"
                  style={{ animationDelay: '0.2s' }}
                >
                  Help Videos
                </h3>
                <p 
                  className="ztm-trainair-tshiamo-coded-popup-message ztm-trainair-tshiamo-coded-text-animate"
                  style={{ animationDelay: '0.4s' }}
                >
                  Learn how to take care of your laptop and keep it running smoothly with our curated video guides.
                </p>
                <p 
                  className="ztm-trainair-tshiamo-coded-popup-submessage ztm-trainair-tshiamo-coded-text-animate"
                  style={{ animationDelay: '0.6s' }}
                >
                  Hover or tap on any video to preview. Click to expand and watch.
                </p>
                <button
                  onClick={handleClosePopup}
                  className="ztm-trainair-tshiamo-coded-cta-btn ztm-trainair-tshiamo-coded-text-animate"
                  style={{ animationDelay: '0.8s' }}
                >
                  <span className="ztm-trainair-tshiamo-coded-cta-shine" />
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Expanded Video Modal */}
      {expandedVideo && (
        <>
          <div 
            className="ztm-trainair-tshiamo-coded-video-expanded-backdrop"
            onClick={handleCloseExpanded}
          />
          <div className="ztm-trainair-tshiamo-coded-video-expanded-container">
            <div className="ztm-trainair-tshiamo-coded-video-expanded">
              <button
                onClick={handleCloseExpanded}
                className="ztm-trainair-tshiamo-coded-video-expanded-close"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="ztm-trainair-tshiamo-coded-video-expanded-player">
                <iframe
                  src={`https://www.youtube.com/embed/${expandedVideo}?autoplay=1&rel=0`}
                  title="Video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="ztm-trainair-tshiamo-coded-video-expanded-info">
                <h3>{videos.find(v => v.id === expandedVideo)?.title}</h3>
                <p>Duration: {videos.find(v => v.id === expandedVideo)?.duration}</p>
              </div>
            </div>
          </div>
        </>
      )}

      <section 
        ref={sectionRef}
        id="videos" 
        className="ztm-trainair-tshiamo-coded-videos-section py-24 md:py-32 border-t border-white/10"
      >
        <div className="ztm-trainair-tshiamo-coded-videos-container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="ztm-trainair-tshiamo-coded-videos-header mb-16 text-center">
            <div className="ztm-trainair-tshiamo-coded-videos-badge inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full mb-6">
              <Play className="h-4 w-4" />
              <span className="text-sm font-light tracking-wider">HELP VIDEOS</span>
            </div>
            <h2 className="ztm-trainair-tshiamo-coded-videos-title text-4xl md:text-5xl font-extralight tracking-tight text-balance">
              Learn & Protect Your Investment
            </h2>
            <p className="ztm-trainair-tshiamo-coded-videos-subtitle mt-4 text-lg text-white/60 font-light max-w-2xl mx-auto">
              Watch these helpful videos to keep your laptop in perfect condition
            </p>
          </div>

          <div className="ztm-trainair-tshiamo-coded-videos-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8 lg:max-w-4xl lg:mx-auto">
{videos.map((video, index) => (
              <VideoCard
                key={video.id}
                videoId={video.id}
                title={video.title}
                duration={video.duration}
                onExpand={() => handleExpandVideo(video.id)}
                index={index}
                isVisible={true}
                isActivePreview={activePreviewId === video.id}
                onHoverStart={() => setActivePreviewId(video.id)}
                onHoverEnd={() => setActivePreviewId(null)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

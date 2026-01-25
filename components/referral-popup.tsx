'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function ReferralPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup after loading screen (3 seconds delay)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleTakeMeThere = () => {
    setIsVisible(false)
    // Set a flag to indicate programmatic scroll is happening
    // This prevents the video popup from showing during this scroll
    window.sessionStorage.setItem('ztm-programmatic-scroll', 'true')
    
    // Scroll to referral section
    const referralSection = document.getElementById('referrals')
    if (referralSection) {
      referralSection.scrollIntoView({ behavior: 'smooth' })
    }
    
    // Clear the flag after scroll completes
    setTimeout(() => {
      window.sessionStorage.removeItem('ztm-programmatic-scroll')
    }, 2000)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop blur */}
      <div 
        className="ztm-trainair-tshiamo-coded-popup-backdrop"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="ztm-trainair-tshiamo-coded-popup-container">
        <div className="ztm-trainair-tshiamo-coded-popup">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="ztm-trainair-tshiamo-coded-close-btn"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="ztm-trainair-tshiamo-coded-popup-content">
            {/* Animated icon */}
            <div className="ztm-trainair-tshiamo-coded-popup-icon">
              <svg
                className="w-16 h-16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ztm-trainair-tshiamo-coded-icon-path-1"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ztm-trainair-tshiamo-coded-icon-path-2"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ztm-trainair-tshiamo-coded-icon-path-3"
                />
              </svg>
            </div>

            {/* Title */}
            <h2 className="ztm-trainair-tshiamo-coded-popup-title">
              <span className="ztm-trainair-tshiamo-coded-text-animate">
                Earn Rewards!
              </span>
            </h2>

            {/* Message */}
            <p className="ztm-trainair-tshiamo-coded-popup-message">
              <span className="ztm-trainair-tshiamo-coded-text-animate" style={{ animationDelay: '0.2s' }}>
                Refer a friend and get <strong>R100 for</strong> each referral!
              </span>
            </p>

            <p className="ztm-trainair-tshiamo-coded-popup-submessage">
              <span className="ztm-trainair-tshiamo-coded-text-animate" style={{ animationDelay: '0.4s' }}>
                Your friend also gets a discount. It's a win-win!
              </span>
            </p>

            {/* Buttons */}
            <div className="ztm-trainair-tshiamo-coded-popup-buttons">
              <button
                onClick={handleTakeMeThere}
                className="ztm-trainair-tshiamo-coded-cta-btn"
              >
                <span>Take Me There</span>
                <div className="ztm-trainair-tshiamo-coded-cta-shine" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

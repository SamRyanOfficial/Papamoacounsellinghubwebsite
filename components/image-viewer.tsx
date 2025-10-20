"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ImageViewerProps {
  images: Array<{
    src: string
    alt: string
  }>
  initialIndex?: number
  isOpen: boolean
  onClose: () => void
}

export function ImageViewer({ images, initialIndex = 0, isOpen, onClose }: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  // Update current index when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          goToPrevious()
          break
        case 'ArrowRight':
          event.preventDefault()
          goToNext()
          break
        case 'Escape':
          event.preventDefault()
          onClose()
          break
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scrolling when viewer is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, goToPrevious, goToNext, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Main image */}
      <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4">
        <Image
          src={images[currentIndex]?.src || "/placeholder.svg"}
          alt={images[currentIndex]?.alt || "Room image"}
          fill
          className="object-contain"
          quality={100}
          priority
        />
      </div>

      {/* Navigation */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={goToNext}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Image counter and controls info */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <div className="text-white bg-black/50 px-3 py-1 rounded-full text-sm mb-2">
              {currentIndex + 1} / {images.length}
            </div>
            <div className="text-white/70 text-xs bg-black/30 px-2 py-1 rounded text-center">
              Use ← → arrow keys or ESC to close
            </div>
          </div>
        </>
      )}
    </div>
  )
}

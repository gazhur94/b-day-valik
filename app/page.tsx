"use client"

import React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Star, Heart, Crown, ArrowRight, Music, Mic2, ChevronLeft, ChevronRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { getPhotoForStep, isBeforeAfter, isSinglePhoto, type StepPhoto } from "@/lib/photos"

// Kawaii floating elements - cute Korean style
function FloatingKawaii() {
  const elements = ["star", "heart", "sparkle", "cloud"]
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 25 }).map((_, i) => {
        const el = elements[i % elements.length]
        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: 0,
              opacity: 0
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.7, 0],
              y: [`${Math.random() * 100}%`, `${Math.random() * 100 - 30}%`],
              rotate: [0, el === "star" ? 180 : 0]
            }}
            transition={{ 
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut"
            }}
          >
            {el === "star" && <Star className="w-4 h-4 text-yellow-300 fill-yellow-200" />}
            {el === "heart" && <Heart className="w-3 h-3 text-pink-300 fill-pink-200" />}
            {el === "sparkle" && <Sparkles className="w-3 h-3 text-purple-300" />}
            {el === "cloud" && (
              <div className="w-6 h-3 bg-white/40 rounded-full" />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}

// Cute bouncing dots
function BouncingDots() {
  return (
    <div className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-pink-300"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  )
}

// K-pop style lightstick cursor trail effect
function LightstickEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-24 rounded-full"
          style={{
            background: `linear-gradient(to bottom, transparent, ${
              ["#FFB7C5", "#E6E6FA", "#B5EAD7", "#FFDAB9", "#87CEEB"][i % 5]
            }80, transparent)`,
            left: `${8 + i * 10}%`,
          }}
          animate={{
            y: ["-100%", "100vh"],
            opacity: [0, 0.5, 0],
            scaleY: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

// Cute progress tracker with Korean webtoon aesthetic
function ProgressTracker({ currentStep }: { currentStep: number }) {
  const steps = [
    { icon: Sparkles, label: "Енергія", emoji: "⚡" },
    { icon: Star, label: "Стиль", emoji: "✨" },
    { icon: Heart, label: "Харизма", emoji: "💖" },
    { icon: Crown, label: "Свято", emoji: "🎂" },
    { icon: Mic2, label: "Репетиція", emoji: "🎤" },
    { icon: Music, label: "Фініш", emoji: "🎵" },
  ]
  
  const activeIndex = currentStep - 3
  
  return (
    <div className="w-full max-w-2xl mx-auto mb-8 px-4">
      <div className="relative">
        {/* Background track with cute dashed line */}
        <div className="absolute top-6 left-0 right-0 h-2 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-full border-2 border-dashed border-pink-200" />
        
        {/* Progress fill with rainbow gradient */}
        <motion.div 
          className="absolute top-6 left-0 h-2 rounded-full border-2 border-white/50"
          style={{ 
            background: "linear-gradient(90deg, #FFB7C5, #E6B0AA, #DDA0DD, #B5EAD7, #87CEEB)",
            boxShadow: "0 2px 10px rgba(255, 183, 197, 0.5)"
          }}
          initial={{ width: "0%" }}
          animate={{ width: `${(activeIndex / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const isActive = index <= activeIndex
            const isCurrent = index === activeIndex
            
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ 
                  scale: isCurrent ? 1.2 : 1,
                  opacity: isActive ? 1 : 0.5
                }}
                transition={{ duration: 0.3, type: "spring" }}
              >
                {/* Cute circular badge */}
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-3 transition-all ${
                    isActive 
                      ? "bg-gradient-to-br from-pink-200 to-purple-200 border-white shadow-lg" 
                      : "bg-white/80 border-pink-100"
                  }`}
                  style={{
                    boxShadow: isCurrent ? "0 0 20px rgba(255, 183, 197, 0.6)" : "none"
                  }}
                  animate={isCurrent ? { 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  } : {}}
                  transition={{ duration: 1.5, repeat: isCurrent ? Infinity : 0 }}
                >
                  <span className="text-lg">{step.emoji}</span>
                </motion.div>
                <span className={`mt-2 text-xs font-bold hidden md:block ${
                  isActive ? "text-pink-500" : "text-gray-400"
                }`}>
                  {step.label}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// Single Photo component with cute Korean style
function SinglePhotoFrame({ 
  stepIndex,
  onViewed
}: { 
  stepIndex: number
  onViewed: () => void
}) {
  const photos = getPhotoForStep(stepIndex)
  const [imageError, setImageError] = useState(false)
  
  useEffect(() => {
    setImageError(false)
    // Auto-mark as viewed after a short delay
    const timer = setTimeout(() => {
      onViewed()
    }, 500)
    return () => clearTimeout(timer)
  }, [stepIndex, onViewed])
  
  const photoData = photos && isSinglePhoto(photos) ? photos.photo : null
  const hasValidPhoto = photoData && !imageError
  
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Photo frame with cute Korean webtoon style */}
      <motion.div 
        className="relative w-full max-w-xs aspect-[3/4] rounded-[2rem] overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #FFE4EC, #E8E4FF, #E4F4FF)",
          padding: "6px",
          boxShadow: "0 10px 40px rgba(255, 183, 197, 0.3), 0 0 0 4px white"
        }}
        whileHover={{ scale: 1.02, rotate: 1 }}
        transition={{ duration: 0.3 }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-white">
          {hasValidPhoto ? (
            <Image
              src={photoData.src || "/placeholder.svg"}
              alt={photoData.alt}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, 320px"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
              <motion.div
                className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center mb-4 shadow-lg"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-4xl">⭐</span>
              </motion.div>
              <p className="text-pink-400 font-bold text-sm">Фото Валіка</p>
            </div>
          )}
          
          {/* Cute decorative stickers */}
          <motion.div 
            className="absolute top-3 right-3 z-20"
            animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center">
              <span className="text-xl">✨</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-3 left-3 z-20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="px-3 py-1 rounded-full bg-white/90 shadow-lg">
              <span className="text-xs font-bold text-pink-500">VALIK</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

// Before/After Photo Carousel with cute Korean style
function BeforeAfterCarousel({ 
  stepIndex,
  onBothViewed
}: { 
  stepIndex: number
  onBothViewed: () => void
}) {
  const photos = getPhotoForStep(stepIndex)
  const [currentView, setCurrentView] = useState<"before" | "after">("before")
  const [viewedBefore, setViewedBefore] = useState(false)
  const [viewedAfter, setViewedAfter] = useState(false)
  const [imageError, setImageError] = useState<{before: boolean, after: boolean}>({before: false, after: false})
  
  useEffect(() => {
    setCurrentView("before")
    setViewedBefore(false)
    setViewedAfter(false)
    setImageError({before: false, after: false})
  }, [stepIndex])
  
  useEffect(() => {
    if (currentView === "before") {
      setViewedBefore(true)
    } else {
      setViewedAfter(true)
    }
  }, [currentView])
  
  useEffect(() => {
    if (viewedBefore && viewedAfter) {
      onBothViewed()
    }
  }, [viewedBefore, viewedAfter, onBothViewed])
  
  const photoData = photos && isBeforeAfter(photos) ? photos : null
  const currentPhoto = photoData?.[currentView]
  const hasValidPhoto = currentPhoto && !imageError[currentView]
  
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Cute tab switcher */}
      <div className="flex items-center gap-2 p-1.5 bg-white/80 rounded-full border-2 border-pink-200 shadow-lg">
        <motion.button
          onClick={() => setCurrentView("before")}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
            currentView === "before" 
              ? "bg-gradient-to-r from-pink-300 to-purple-300 text-white shadow-md" 
              : "text-pink-400 hover:bg-pink-50"
          }`}
          whileTap={{ scale: 0.95 }}
        >
          {viewedBefore && <Check className="w-3 h-3" />}
          До
        </motion.button>
        <motion.button
          onClick={() => setCurrentView("after")}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
            currentView === "after" 
              ? "bg-gradient-to-r from-purple-300 to-blue-300 text-white shadow-md" 
              : "text-purple-400 hover:bg-purple-50"
          }`}
          whileTap={{ scale: 0.95 }}
        >
          {viewedAfter && <Check className="w-3 h-3" />}
          Після
        </motion.button>
      </div>
      
      {/* Photo frame with cute Korean webtoon style */}
      <motion.div 
        className="relative w-full max-w-xs aspect-[3/4] rounded-[2rem] overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #FFE4EC, #E8E4FF, #E4F4FF)",
          padding: "6px",
          boxShadow: "0 10px 40px rgba(255, 183, 197, 0.3), 0 0 0 4px white"
        }}
        whileHover={{ scale: 1.02, rotate: currentView === "before" ? -1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.9, rotateY: currentView === "after" ? -90 : 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: currentView === "after" ? 90 : -90 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              {hasValidPhoto ? (
                <Image
                  src={currentPhoto.src || "/placeholder.svg"}
                  alt={currentPhoto.alt}
                  fill
                  className="object-cover"
                  onError={() => setImageError(prev => ({...prev, [currentView]: true}))}
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
                  <motion.div
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center mb-4 shadow-lg"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {currentView === "before" ? (
                      <span className="text-4xl">🌙</span>
                    ) : (
                      <span className="text-4xl">⭐</span>
                    )}
                  </motion.div>
                  <p className="text-pink-400 font-bold text-sm">
                    {currentView === "before" ? "Фото ДО" : "Фото ПІСЛЯ"}
                  </p>
                  <p className="text-xs text-purple-300 mt-1">Валіка</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          
          {/* Cute decorative stickers */}
          <motion.div 
            className="absolute top-3 right-3 z-20"
            animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center">
              <span className="text-xl">{currentView === "before" ? "🌸" : "✨"}</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-3 left-3 z-20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="px-3 py-1 rounded-full bg-white/90 shadow-lg">
              <span className="text-xs font-bold text-pink-500">
                {currentView === "before" ? "BEFORE" : "AFTER"}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Swipe navigation arrows */}
      <div className="flex items-center gap-4">
        <motion.button
          onClick={() => setCurrentView("before")}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            currentView === "before" 
              ? "bg-pink-100 text-pink-300" 
              : "bg-pink-200 text-white shadow-md hover:bg-pink-300"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={currentView === "before"}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
        
        <div className="flex gap-2">
          <motion.div 
            className={`w-3 h-3 rounded-full transition-all ${
              currentView === "before" ? "bg-pink-400 scale-125" : "bg-pink-200"
            }`}
            layoutId="dot-indicator"
          />
          <motion.div 
            className={`w-3 h-3 rounded-full transition-all ${
              currentView === "after" ? "bg-purple-400 scale-125" : "bg-purple-200"
            }`}
          />
        </div>
        
        <motion.button
          onClick={() => setCurrentView("after")}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            currentView === "after" 
              ? "bg-purple-100 text-purple-300" 
              : "bg-purple-200 text-white shadow-md hover:bg-purple-300"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={currentView === "after"}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
      
      {/* View status hint */}
      {(!viewedBefore || !viewedAfter) && (
        <motion.p 
          className="text-xs text-pink-400 font-medium flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span>Подивись обидві фотки</span>
          <BouncingDots />
        </motion.p>
      )}
    </div>
  )
}

// Universal Photo Display - chooses between single or before/after
function PhotoDisplay({ 
  stepIndex,
  onCanProceed
}: { 
  stepIndex: number
  onCanProceed: () => void 
}) {
  const photos = getPhotoForStep(stepIndex)
  
  useEffect(() => {
    if (!photos) {
      // No photo config, auto-allow proceed
      onCanProceed()
    }
  }, [photos, onCanProceed])
  
  if (!photos) {
    return null
  }
  
  if (isSinglePhoto(photos)) {
    return <SinglePhotoFrame stepIndex={stepIndex} onViewed={onCanProceed} />
  }
  
  if (isBeforeAfter(photos)) {
    return <BeforeAfterCarousel stepIndex={stepIndex} onBothViewed={onCanProceed} />
  }
  
  return null
}

// Cute Korean style button
function KawaiiButton({ 
  children, 
  onClick, 
  variant = "primary",
  disabled = false
}: { 
  children: React.ReactNode
  onClick: () => void
  variant?: "primary" | "secondary"
  disabled?: boolean
}) {
  return (
    <motion.div
      whileHover={disabled ? {} : { scale: 1.05, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
    >
      <Button 
        onClick={onClick}
        size="lg"
        disabled={disabled}
        className={`text-lg px-8 py-7 rounded-2xl transition-all border-3 font-bold ${
          variant === "primary"
            ? disabled 
              ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
              : "bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 hover:from-pink-400 hover:via-purple-400 hover:to-pink-400 text-white border-white/50 shadow-lg shadow-pink-200/50"
            : "bg-white/80 hover:bg-white text-pink-500 border-pink-200 shadow-md"
        }`}
        style={{
          boxShadow: disabled ? "none" : "0 8px 25px rgba(255, 183, 197, 0.4)"
        }}
      >
        {children}
      </Button>
    </motion.div>
  )
}

// Page 1: Welcome - Cute Korean idol concept
function WelcomePage({ onNext }: { onNext: () => void }) {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        background: "linear-gradient(180deg, #FFF5F8 0%, #FFF0F5 30%, #F5F0FF 70%, #F0F8FF 100%)"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <LightstickEffect />
      <FloatingKawaii />
      
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="text-center max-w-md z-10"
      >
        {/* Cute badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-pink-200 shadow-lg mb-6"
          animate={{ scale: [1, 1.03, 1], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xl">🌟</span>
          <span className="text-sm font-bold text-pink-500">SPECIAL PROJECT</span>
          <span className="text-xl">🌟</span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-6xl font-black text-transparent bg-clip-text mb-3"
          style={{
            background: "linear-gradient(135deg, #FF6B9D, #C084FC, #60A5FA)",
            WebkitBackgroundClip: "text",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Місія
        </motion.h1>
        
        <motion.p 
          className="text-lg text-purple-400 mb-2 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Терміново підготувати
        </motion.p>
        
        <motion.div
          className="relative inline-block mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <motion.h2
            className="text-6xl md:text-7xl font-black"
            style={{ 
              background: "linear-gradient(135deg, #FFB7C5, #DDA0DD, #87CEEB)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 4px 20px rgba(255, 183, 197, 0.3)"
            }}
          >
            ВАЛІКА
          </motion.h2>
          {/* Cute sparkles around name */}
          <motion.span 
            className="absolute -top-2 -right-4 text-2xl"
            animate={{ rotate: [0, 20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ✨
          </motion.span>
          <motion.span 
            className="absolute -bottom-1 -left-4 text-xl"
            animate={{ rotate: [0, -20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          >
            💫
          </motion.span>
        </motion.div>
        
        <motion.p 
          className="text-purple-300 mb-10 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          до дня народження 🎂
        </motion.p>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
        >
          <KawaiiButton onClick={onNext}>
            <Sparkles className="mr-2 w-5 h-5" />
            Почати!
          </KawaiiButton>
        </motion.div>
      </motion.div>
      
      {/* Cute bouncing decoration */}
      <motion.div 
        className="absolute bottom-10 flex gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {["💖", "⭐", "🌸"].map((emoji, i) => (
          <motion.span
            key={i}
            className="text-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}

// Page 2: Process explanation - Cute training concept
function ExplanationPage({ onNext }: { onNext: () => void }) {
  const stages = [
    { emoji: "⚡", label: "Енергія", desc: "100%", color: "from-yellow-200 to-orange-200" },
    { emoji: "✨", label: "Стиль", desc: "MAX", color: "from-purple-200 to-pink-200" },
    { emoji: "💖", label: "Харизма", desc: "FULL", color: "from-pink-200 to-red-200" },
    { emoji: "🎉", label: "Вайб", desc: "READY", color: "from-blue-200 to-purple-200" },
  ]
  
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        background: "linear-gradient(180deg, #F5F0FF 0%, #FFF0F5 50%, #F0FFF5 100%)"
      }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <FloatingKawaii />
      
      <motion.div 
        className="text-center max-w-lg z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-purple-200 shadow-md mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="text-lg">📋</span>
          <span className="text-sm font-bold text-purple-500">TRAINING PROGRAM</span>
        </motion.div>
        
        <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text mb-2"
          style={{
            background: "linear-gradient(135deg, #FF6B9D, #C084FC)",
            WebkitBackgroundClip: "text",
          }}
        >
          Крок за кроком
        </h2>
        <p className="text-purple-400 mb-8 font-medium">
          зробимо Валіка ідеальним ✨
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-10">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${stage.color} p-5 rounded-2xl text-center border-2 border-white shadow-lg`}
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5, rotate: index % 2 === 0 ? 2 : -2 }}
            >
              <motion.span 
                className="text-3xl block mb-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
              >
                {stage.emoji}
              </motion.span>
              <p className="font-bold text-gray-700">{stage.label}</p>
              <p className="text-xs text-gray-500 mt-1 font-medium">{stage.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <KawaiiButton onClick={onNext} variant="secondary">
            Поїхали!
            <ArrowRight className="ml-2 w-5 h-5" />
          </KawaiiButton>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Pages 3-8: Preparation steps with Before/After photos
function PreparationPage({ 
  step, 
  title, 
  subtitle,
  bgGradient,
  onNext 
}: { 
  step: number
  title: string
  subtitle: string
  bgGradient: string
  onNext: () => void 
}) {
  const photoIndex = step - 3
  const [canProceed, setCanProceed] = useState(false)
  const photos = getPhotoForStep(photoIndex)
  const hasBeforeAfter = photos && isBeforeAfter(photos)
  
  // Reset canProceed when step changes
  useEffect(() => {
    setCanProceed(false)
  }, [step])
  
  return (
    <motion.div 
      className={`min-h-screen flex flex-col items-center p-6 pt-20 ${bgGradient}`}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <FloatingKawaii />
      <ProgressTracker currentStep={step} />
      
      <motion.div 
        className="flex-1 flex flex-col items-center justify-center text-center max-w-md"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border-2 border-pink-200 shadow-md mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="text-lg">📍</span>
          <span className="text-xs font-bold text-pink-500">STEP {step - 2} OF 6</span>
        </motion.div>
        
        <h2 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text mb-2"
          style={{
            background: "linear-gradient(135deg, #FF6B9D, #C084FC, #60A5FA)",
            WebkitBackgroundClip: "text",
          }}
        >
          {title}
        </h2>
        <p className="text-sm text-purple-400 mb-6 font-medium">{subtitle}</p>
        
        <PhotoDisplay 
          stepIndex={photoIndex}
          onCanProceed={() => setCanProceed(true)} 
        />
        
        <motion.div
          className="mt-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <KawaiiButton onClick={onNext} disabled={!canProceed}>
            {canProceed ? (
              <>
                Далі
                <ArrowRight className="ml-2 w-5 h-5" />
              </>
            ) : hasBeforeAfter ? (
              <>
                Подивись обидві фотки
                <BouncingDots />
              </>
            ) : (
              <>
                Зачекай...
                <BouncingDots />
              </>
            )}
          </KawaiiButton>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Page 9: Final page - Cute concert stage concept
function FinalPage({ onCelebrate }: { onCelebrate: () => void }) {
  const [showConfetti, setShowConfetti] = useState(false)
  
  useEffect(() => {
    setShowConfetti(true)
  }, [])
  
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFF0F5 0%, #F5F0FF 50%, #F0F8FF 100%)"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <LightstickEffect />
      
      {/* Cute confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
              }}
              initial={{ y: -20, opacity: 1, rotate: 0 }}
              animate={{ 
                y: typeof window !== 'undefined' ? window.innerHeight + 20 : 1000,
                rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
                opacity: [1, 1, 0]
              }}
              transition={{ 
                duration: 4 + Math.random() * 2,
                delay: Math.random() * 3,
                repeat: Infinity,
                repeatDelay: Math.random() * 2
              }}
            >
              <span className="text-xl">
                {["🎉", "🎊", "⭐", "💖", "✨", "🌸", "🎀", "💫"][i % 8]}
              </span>
            </motion.div>
          ))}
        </div>
      )}
      
      <motion.div 
        className="text-center z-10 max-w-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        {/* Cute badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-pink-200 shadow-lg mb-6"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xl">👑</span>
          <span className="text-sm font-bold text-pink-500">DEBUT COMPLETE</span>
          <span className="text-xl">👑</span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-black text-transparent bg-clip-text mb-4"
          style={{
            background: "linear-gradient(135deg, #FF6B9D, #C084FC, #60A5FA)",
            WebkitBackgroundClip: "text",
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Валік готовий!
        </motion.h1>
        
        {/* K-pop group stage visualization - cute version */}
        <motion.div 
          className="relative mb-8 py-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="relative flex items-end justify-center gap-3">
            {/* Cute character silhouettes */}
            {[
              { h: "h-20", delay: 0.1, emoji: "🧑" },
              { h: "h-24", delay: 0.2, emoji: "🧑" },
              { h: "h-28", delay: 0, emoji: "⭐", isMain: true },
              { h: "h-24", delay: 0.3, emoji: "🧑" },
              { h: "h-20", delay: 0.4, emoji: "🧑" },
            ].map((member, i) => (
              <motion.div 
                key={i}
                className={`${member.h} ${
                  member.isMain 
                    ? "w-16 bg-gradient-to-t from-pink-300 to-purple-300 border-2 border-white" 
                    : "w-12 bg-gradient-to-t from-purple-200 to-pink-200"
                } rounded-t-full relative flex items-center justify-center shadow-lg`}
                animate={{ y: [0, member.isMain ? -10 : -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: member.delay }}
              >
                {member.isMain && (
                  <>
                    <span className="text-white font-black text-lg">V</span>
                    <motion.div 
                      className="absolute -top-4"
                      animate={{ rotate: [0, 15, -15, 0], y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-2xl">👑</span>
                    </motion.div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Cute stage platform */}
          <div className="w-full h-4 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 rounded-lg mt-2 border-2 border-white shadow-md" />
          
          {/* Label */}
          <motion.div 
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border-2 border-pink-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="text-lg">🎤</span>
            <span className="text-xs font-bold text-purple-500">K-pop Star</span>
            <span className="text-lg">🎵</span>
          </motion.div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <motion.div
            className="relative inline-block"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <KawaiiButton onClick={onCelebrate}>
              <Heart className="mr-2 w-5 h-5 fill-current" />
              Привітання 💝
            </KawaiiButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Celebration modal - Cute Korean style
function CelebrationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null
  
  return (
    <motion.div 
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-white rounded-[2rem] p-8 max-w-sm w-full text-center shadow-2xl border-4 border-pink-200"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #FFF5F8 100%)"
        }}
        initial={{ scale: 0.8, y: 50, rotate: -5 }}
        animate={{ scale: 1, y: 0, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cute header */}
        <div className="flex justify-center gap-2 mb-4">
          {["🎉", "🎂", "🎁", "🎈", "🎊"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-2xl"
              animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>
        
        <motion.h2 
          className="text-2xl font-black text-transparent bg-clip-text mb-2"
          style={{
            background: "linear-gradient(135deg, #FF6B9D, #C084FC)",
            WebkitBackgroundClip: "text",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          З Днем Народження!
        </motion.h2>
        
        <motion.p
          className="text-5xl font-black mb-4"
          style={{ 
            background: "linear-gradient(135deg, #FFB7C5, #DDA0DD, #87CEEB)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ scale: 0.9 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ВАЛІК
        </motion.p>
        
        <p className="text-purple-400 mb-6 text-sm leading-relaxed font-medium">
          Бажаємо щастя, здоровʼя, успіхів і ще багато крутих днів народження! 
          <br />Ти найкращий! 💖
        </p>
        
        <div className="flex justify-center gap-3 mb-6">
          {["💖", "⭐", "✨", "🌸", "💫"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-xl"
              animate={{ 
                y: [0, -8, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 1, 
                repeat: Infinity,
                delay: i * 0.12
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>
        
        <p className="text-xs text-pink-300 italic mb-4">
          Зроблено з любовʼю 💝
        </p>
        
        <KawaiiButton onClick={onClose}>
          Дякую! 🥰
        </KawaiiButton>
      </motion.div>
    </motion.div>
  )
}

// Main component
export default function BirthdayWizard() {
  const [currentPage, setCurrentPage] = useState(1)
  const [showCelebration, setShowCelebration] = useState(false)
  
  const preparationSteps = [
    { 
      step: 3, 
      title: "Підзаряджаємо енергію", 
      subtitle: "Level up to maximum power ⚡",
      bgGradient: "bg-gradient-to-b from-yellow-50 via-orange-50/50 to-pink-50" 
    },
    { 
      step: 4, 
      title: "Стиль на максимум", 
      subtitle: "Fashion mode: activated ✨",
      bgGradient: "bg-gradient-to-b from-purple-50 via-pink-50/50 to-blue-50" 
    },
    { 
      step: 5, 
      title: "Харизма завантажується", 
      subtitle: "Loading charisma... 89% 💖",
      bgGradient: "bg-gradient-to-b from-pink-50 via-rose-50/50 to-purple-50" 
    },
    { 
      step: 6, 
      title: "Режим \"День Народження\"", 
      subtitle: "Birthday mode: ON 🎂",
      bgGradient: "bg-gradient-to-b from-blue-50 via-purple-50/50 to-pink-50" 
    },
    { 
      step: 7, 
      title: "Збираємо команду", 
      subtitle: "Squad assembled 🎤",
      bgGradient: "bg-gradient-to-b from-cyan-50 via-blue-50/50 to-purple-50" 
    },
    { 
      step: 8, 
      title: "Фінальні штрихи", 
      subtitle: "Almost ready for debut 🌟",
      bgGradient: "bg-gradient-to-b from-green-50 via-teal-50/50 to-blue-50" 
    },
  ]
  
  const nextPage = () => setCurrentPage(prev => prev + 1)
  
  return (
    <main className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {currentPage === 1 && (
          <WelcomePage key="welcome" onNext={nextPage} />
        )}
        
        {currentPage === 2 && (
          <ExplanationPage key="explanation" onNext={nextPage} />
        )}
        
        {currentPage >= 3 && currentPage <= 8 && (
          <PreparationPage 
            key={`prep-${currentPage}`}
            {...preparationSteps[currentPage - 3]}
            onNext={nextPage}
          />
        )}
        
        {currentPage === 9 && (
          <FinalPage 
            key="final" 
            onCelebrate={() => setShowCelebration(true)} 
          />
        )}
      </AnimatePresence>
      
      <CelebrationModal 
        isOpen={showCelebration} 
        onClose={() => setShowCelebration(false)} 
      />
    </main>
  )
}

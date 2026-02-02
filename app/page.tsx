"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Star, Heart, Crown, ArrowRight, Music, Mic2 } from "lucide-react"
import { Button } from "@/components/ui/button"

// Floating sparkle elements - Korean style soft particles
function FloatingSparkles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
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
            opacity: [0, 0.6, 0],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100 - 20}%`]
          }}
          transition={{ 
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        >
          <Star className="w-3 h-3 text-rose fill-rose/50" />
        </motion.div>
      ))}
    </div>
  )
}

// K-pop style lightstick cursor trail effect
function LightstickEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-20 rounded-full"
          style={{
            background: `linear-gradient(to bottom, transparent, ${
              ["#ffc0cb", "#e6e6fa", "#b5ead7", "#ffdab9"][i % 4]
            }, transparent)`,
            left: `${10 + i * 12}%`,
          }}
          animate={{
            y: ["-100%", "100vh"],
            opacity: [0, 0.4, 0],
            scaleY: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

// Progress tracker with Korean aesthetic
function ProgressTracker({ currentStep }: { currentStep: number }) {
  const steps = [
    { icon: Sparkles, label: "Енергія" },
    { icon: Star, label: "Стиль" },
    { icon: Heart, label: "Харизма" },
    { icon: Crown, label: "Свято" },
    { icon: Mic2, label: "Репетиція" },
    { icon: Music, label: "Фініш" },
  ]
  
  const activeIndex = currentStep - 3
  
  return (
    <div className="w-full max-w-2xl mx-auto mb-8 px-4">
      <div className="relative">
        <div className="absolute top-5 left-0 right-0 h-1.5 bg-lavender/30 rounded-full" />
        
        <motion.div 
          className="absolute top-5 left-0 h-1.5 rounded-full"
          style={{ background: "linear-gradient(90deg, #ffc0cb, #e6e6fa, #b5ead7)" }}
          initial={{ width: "0%" }}
          animate={{ width: `${(activeIndex / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = index <= activeIndex
            const isCurrent = index === activeIndex
            
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ 
                  scale: isCurrent ? 1.15 : 1,
                  opacity: isActive ? 1 : 0.4
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center border-2 transition-all ${
                    isActive 
                      ? "bg-rose/20 border-rose text-rose" 
                      : "bg-cream border-lavender/30 text-lavender"
                  }`}
                  animate={isCurrent ? { 
                    boxShadow: ["0 0 0 0 rgba(255, 182, 193, 0.4)", "0 0 0 12px rgba(255, 182, 193, 0)"]
                  } : {}}
                  transition={{ duration: 1.5, repeat: isCurrent ? Infinity : 0 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.div>
                <span className={`mt-2 text-xs font-medium hidden md:block ${
                  isActive ? "text-foreground" : "text-muted-foreground"
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

// Photo placeholder with Korean style frame
function PhotoPlaceholder({ text = "Фото Валіка" }: { text?: string }) {
  return (
    <motion.div 
      className="relative w-full max-w-xs aspect-[3/4] bg-cream rounded-3xl border-2 border-rose/20 flex items-center justify-center overflow-hidden shadow-lg"
      whileHover={{ scale: 1.02, rotate: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose/10 via-transparent to-lavender/10" />
      
      {/* Korean style decorative frame corners */}
      <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-rose/40 rounded-tl-xl" />
      <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-rose/40 rounded-tr-xl" />
      <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-rose/40 rounded-bl-xl" />
      <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-rose/40 rounded-br-xl" />
      
      <div className="text-center z-10 px-4">
        <motion.div
          className="w-20 h-20 mx-auto mb-4 rounded-full bg-lavender/20 flex items-center justify-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Star className="w-8 h-8 text-lavender" />
        </motion.div>
        <p className="text-muted-foreground font-medium text-sm">{text}</p>
      </div>
      
      {/* Floating hearts */}
      <motion.div 
        className="absolute top-6 right-6"
        animate={{ y: [0, -5, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Heart className="w-4 h-4 text-rose fill-rose/50" />
      </motion.div>
    </motion.div>
  )
}

// Korean style button
function KoreanButton({ 
  children, 
  onClick, 
  variant = "primary" 
}: { 
  children: React.ReactNode
  onClick: () => void
  variant?: "primary" | "secondary"
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button 
        onClick={onClick}
        size="lg"
        className={`text-lg px-8 py-6 rounded-2xl shadow-md transition-all ${
          variant === "primary"
            ? "bg-rose hover:bg-rose/90 text-foreground border-2 border-rose/20"
            : "bg-lavender/30 hover:bg-lavender/40 text-foreground border-2 border-lavender/30"
        }`}
      >
        {children}
      </Button>
    </motion.div>
  )
}

// Page 1: Welcome - Korean idol debut concept
function WelcomePage({ onNext }: { onNext: () => void }) {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-cream via-background to-rose/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <LightstickEffect />
      
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="text-center max-w-md"
      >
        {/* Korean style logo/badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose/10 border border-rose/20 mb-6"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Star className="w-4 h-4 text-rose fill-rose/50" />
          <span className="text-sm font-medium text-rose">SPECIAL PROJECT</span>
          <Star className="w-4 h-4 text-rose fill-rose/50" />
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Місія
        </motion.h1>
        
        <motion.p 
          className="text-lg text-muted-foreground mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Терміново підготувати
        </motion.p>
        
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{ 
            background: "linear-gradient(135deg, #e8b4bc, #c9b1d4, #b5c7d3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          ВАЛІКА
        </motion.h2>
        
        <motion.p 
          className="text-muted-foreground mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          до дня народження
        </motion.p>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
        >
          <KoreanButton onClick={onNext}>
            <Sparkles className="mr-2 w-5 h-5" />
            Почати
          </KoreanButton>
        </motion.div>
      </motion.div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-rose/40"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

// Page 2: Process explanation - K-pop training concept
function ExplanationPage({ onNext }: { onNext: () => void }) {
  const stages = [
    { icon: Sparkles, label: "Енергія", desc: "100%", color: "bg-peach/50" },
    { icon: Star, label: "Стиль", desc: "MAX", color: "bg-mint/50" },
    { icon: Heart, label: "Харизма", desc: "FULL", color: "bg-rose/50" },
    { icon: Crown, label: "Вайб", desc: "READY", color: "bg-lavender/50" },
  ]
  
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-lavender/10 via-background to-mint/10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <motion.div 
        className="text-center max-w-lg"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div 
          className="inline-block px-3 py-1 rounded-full bg-lavender/20 text-sm text-lavender mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          TRAINING PROGRAM
        </motion.div>
        
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2 text-balance">
          Крок за кроком
        </h2>
        <p className="text-muted-foreground mb-8">
          зробимо Валіка ідеальним
        </p>
        
        <div className="grid grid-cols-2 gap-3 mb-10">
          {stages.map((stage, index) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={index}
                className={`${stage.color} p-5 rounded-2xl text-center border border-white/50`}
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <Icon className="w-6 h-6 mx-auto mb-2 text-foreground/70" />
                <p className="font-semibold text-sm text-foreground">{stage.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{stage.desc}</p>
              </motion.div>
            )
          })}
        </div>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <KoreanButton onClick={onNext} variant="secondary">
            Поїхали
            <ArrowRight className="ml-2 w-5 h-5" />
          </KoreanButton>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Pages 3-8: Preparation steps
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
  return (
    <motion.div 
      className={`min-h-screen flex flex-col items-center p-6 pt-20 ${bgGradient}`}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <FloatingSparkles />
      <ProgressTracker currentStep={step} />
      
      <motion.div 
        className="flex-1 flex flex-col items-center justify-center text-center max-w-md"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div 
          className="inline-block px-3 py-1 rounded-full bg-foreground/5 text-xs text-muted-foreground mb-4 border border-foreground/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          STEP {step - 2} OF 6
        </motion.div>
        
        <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2 text-balance">
          {title}
        </h2>
        <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>
        
        <PhotoPlaceholder />
        
        <motion.div
          className="mt-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <KoreanButton onClick={onNext}>
            Далі
            <ArrowRight className="ml-2 w-5 h-5" />
          </KoreanButton>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Page 9: Final page - Concert stage concept
function FinalPage({ onCelebrate }: { onCelebrate: () => void }) {
  const [showConfetti, setShowConfetti] = useState(false)
  
  useEffect(() => {
    setShowConfetti(true)
  }, [])
  
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-lavender/20 via-background to-rose/20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <LightstickEffect />
      
      {/* Soft confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: ["#ffc0cb", "#e6e6fa", "#b5ead7", "#ffdab9", "#add8e6"][i % 5],
                left: `${Math.random() * 100}%`,
              }}
              initial={{ y: -20, opacity: 0.8, rotate: 0 }}
              animate={{ 
                y: typeof window !== 'undefined' ? window.innerHeight + 20 : 1000,
                rotate: 360,
                opacity: [0.8, 0.8, 0]
              }}
              transition={{ 
                duration: 4 + Math.random() * 2,
                delay: Math.random() * 3,
                repeat: Infinity,
                repeatDelay: Math.random() * 2
              }}
            />
          ))}
        </div>
      )}
      
      <motion.div 
        className="text-center z-10 max-w-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose/10 border border-rose/20 mb-6"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Crown className="w-4 h-4 text-rose" />
          <span className="text-sm font-medium text-rose">DEBUT COMPLETE</span>
          <Crown className="w-4 h-4 text-rose" />
        </motion.div>
        
        <motion.h1 
          className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Валік готовий!
        </motion.h1>
        
        {/* K-pop group stage visualization */}
        <motion.div 
          className="relative mb-8 py-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {/* Stage spotlight effect */}
          <div className="absolute inset-0 bg-gradient-radial from-rose/10 via-transparent to-transparent rounded-full blur-2xl" />
          
          <div className="relative flex items-end justify-center gap-2 md:gap-3">
            {/* Group members silhouettes */}
            {[
              { h: "h-24 md:h-32", delay: 0.1, bg: "bg-lavender/30" },
              { h: "h-28 md:h-36", delay: 0.2, bg: "bg-lavender/40" },
              { h: "h-32 md:h-44", delay: 0, bg: "bg-rose/50", isMain: true },
              { h: "h-28 md:h-36", delay: 0.3, bg: "bg-lavender/40" },
              { h: "h-24 md:h-32", delay: 0.4, bg: "bg-lavender/30" },
            ].map((member, i) => (
              <motion.div 
                key={i}
                className={`${member.h} ${member.bg} rounded-t-full ${
                  member.isMain ? "w-16 md:w-20 border-2 border-rose/30" : "w-12 md:w-14"
                } relative flex items-center justify-center`}
                animate={{ y: [0, member.isMain ? -8 : -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: member.delay }}
              >
                {member.isMain && (
                  <>
                    <span className="text-foreground/70 font-bold text-xs">V</span>
                    <motion.div 
                      className="absolute -top-3"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Crown className="w-5 h-5 text-rose fill-rose/30" />
                    </motion.div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Stage platform */}
          <div className="w-full h-4 bg-gradient-to-r from-lavender/30 via-rose/40 to-lavender/30 rounded-lg mt-2" />
          
          {/* Stage lights */}
          <motion.div 
            className="absolute -top-4 left-1/4 w-2 h-12 bg-gradient-to-b from-peach/40 to-transparent rounded-full blur-sm"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -top-4 right-1/4 w-2 h-12 bg-gradient-to-b from-rose/40 to-transparent rounded-full blur-sm"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
          
          {/* Label */}
          <motion.div 
            className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-foreground/5 rounded-full text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Music className="w-3 h-3" />
            <span>K-pop Group Concept</span>
            <Sparkles className="w-3 h-3" />
          </motion.div>
        </motion.div>
        
        {/* CTA Button with Korean style pulse */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <motion.div
            className="relative inline-block"
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{ background: "linear-gradient(135deg, #ffc0cb, #e6e6fa)" }}
              animate={{ 
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Button 
              onClick={onCelebrate}
              size="lg"
              className="relative bg-gradient-to-r from-rose via-lavender to-rose hover:opacity-90 text-foreground text-lg px-10 py-7 rounded-2xl shadow-lg transition-all border-2 border-white/30"
            >
              <Heart className="mr-2 w-5 h-5 fill-current" />
              Привітання
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Celebration modal - Korean style
function CelebrationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null
  
  return (
    <motion.div 
      className="fixed inset-0 bg-foreground/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-background rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border border-rose/20"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Korean style header decoration */}
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
            >
              <Star className="w-4 h-4 text-rose fill-rose/50" />
            </motion.div>
          ))}
        </div>
        
        <motion.h2 
          className="text-2xl font-bold text-foreground mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          З Днем Народження!
        </motion.h2>
        
        <motion.p
          className="text-4xl font-bold mb-4"
          style={{ 
            background: "linear-gradient(135deg, #e8b4bc, #c9b1d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          ВАЛІК
        </motion.p>
        
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
          Бажаємо щастя, здоровʼя, успіхів і ще багато крутих днів народження! Ти найкращий!
        </p>
        
        <div className="flex justify-center gap-2 mb-6">
          {[Heart, Star, Sparkles, Crown, Music].map((Icon, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -6, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                delay: i * 0.15
              }}
            >
              <Icon className="w-5 h-5 text-rose fill-rose/30" />
            </motion.div>
          ))}
        </div>
        
        <p className="text-xs text-muted-foreground italic mb-4">
          Зроблено з любовʼю
        </p>
        
        <KoreanButton onClick={onClose}>
          <Heart className="mr-2 w-4 h-4 fill-current" />
          Дякую!
        </KoreanButton>
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
      subtitle: "Level up to maximum power",
      bgGradient: "bg-gradient-to-b from-peach/20 via-background to-mint/10" 
    },
    { 
      step: 4, 
      title: "Стиль на максимум", 
      subtitle: "Fashion mode: activated",
      bgGradient: "bg-gradient-to-b from-mint/20 via-background to-lavender/10" 
    },
    { 
      step: 5, 
      title: "Харизма завантажується", 
      subtitle: "Loading charisma... 89%",
      bgGradient: "bg-gradient-to-b from-rose/20 via-background to-peach/10" 
    },
    { 
      step: 6, 
      title: "Режим \"День Народження\"", 
      subtitle: "Birthday mode: ON",
      bgGradient: "bg-gradient-to-b from-lavender/20 via-background to-rose/10" 
    },
    { 
      step: 7, 
      title: "Збираємо команду", 
      subtitle: "Squad assembled",
      bgGradient: "bg-gradient-to-b from-sky/20 via-background to-mint/10" 
    },
    { 
      step: 8, 
      title: "Фінальні штрихи", 
      subtitle: "Almost ready for debut",
      bgGradient: "bg-gradient-to-b from-mint/20 via-background to-rose/10" 
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

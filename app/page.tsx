"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Zap, Star, Heart, PartyPopper, Users, Eye, ArrowRight, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

// Decorative floating elements
function FloatingElements() {
  const elements = ["✨", "🎉", "⭐", "💖", "🎈", "🎁", "🌟", "💫"]
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-3xl"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
            y: -50,
            rotate: 0,
            opacity: 0.7
          }}
          animate={{ 
            y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
            rotate: 360,
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear"
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  )
}

// Progress tracker for pages 3-8
function ProgressTracker({ currentStep }: { currentStep: number }) {
  const steps = [
    { icon: Zap, label: "Енергія" },
    { icon: Star, label: "Стиль" },
    { icon: Heart, label: "Харизма" },
    { icon: PartyPopper, label: "Свято" },
    { icon: Users, label: "Друзі" },
    { icon: Eye, label: "Фініш" },
  ]
  
  // currentStep 3-8 maps to 0-5 for the tracker
  const activeIndex = currentStep - 3
  
  return (
    <div className="w-full max-w-2xl mx-auto mb-8 px-4">
      <div className="relative">
        {/* Background line */}
        <div className="absolute top-5 left-0 right-0 h-2 bg-muted rounded-full" />
        
        {/* Active line */}
        <motion.div 
          className="absolute top-5 left-0 h-2 bg-pink rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${(activeIndex / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        {/* Step indicators */}
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
                  scale: isCurrent ? 1.2 : 1,
                  opacity: isActive ? 1 : 0.5
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isActive ? "bg-pink text-white" : "bg-muted text-muted-foreground"
                  }`}
                  animate={isCurrent ? { 
                    boxShadow: ["0 0 0 0 rgba(236, 72, 153, 0.4)", "0 0 0 15px rgba(236, 72, 153, 0)"]
                  } : {}}
                  transition={{ duration: 1, repeat: isCurrent ? Infinity : 0 }}
                >
                  <Icon className="w-5 h-5" />
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

// Photo placeholder component
function PhotoPlaceholder({ text = "Тут буде фото" }: { text?: string }) {
  return (
    <motion.div 
      className="relative w-full max-w-sm aspect-square bg-muted rounded-3xl border-4 border-dashed border-pink/30 flex items-center justify-center overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow/20 via-pink/20 to-purple/20" />
      <div className="text-center z-10">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl mb-4"
        >
          📸
        </motion.div>
        <p className="text-muted-foreground font-medium">{text}</p>
      </div>
      
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 text-2xl">✨</div>
      <div className="absolute top-4 right-4 text-2xl">⭐</div>
      <div className="absolute bottom-4 left-4 text-2xl">💫</div>
      <div className="absolute bottom-4 right-4 text-2xl">🌟</div>
    </motion.div>
  )
}

// Page 1: Welcome
function WelcomePage({ onNext }: { onNext: () => void }) {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-yellow/30 via-background to-pink/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="text-center"
      >
        <motion.div 
          className="text-6xl mb-6"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎂
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
          Сьогодні особлива місія
        </h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Потрібно терміново підготувати Валіка до дня народження
        </motion.p>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
        >
          <Button 
            onClick={onNext}
            size="lg"
            className="bg-pink hover:bg-pink/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <Sparkles className="mr-2 w-5 h-5" />
            Почати підготовку
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 text-4xl"
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🎈
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 text-4xl"
        animate={{ y: [0, -15, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      >
        🎁
      </motion.div>
    </motion.div>
  )
}

// Page 2: Process explanation
function ExplanationPage({ onNext }: { onNext: () => void }) {
  const stages = [
    { icon: "⚡", label: "Енергія", color: "bg-yellow" },
    { icon: "😎", label: "Стиль", color: "bg-lime" },
    { icon: "💫", label: "Харизма", color: "bg-pink" },
    { icon: "🎉", label: "Святковий вайб", color: "bg-purple" },
  ]
  
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-lime/20 via-background to-yellow/20"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <motion.div 
        className="text-center max-w-2xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Крок за кроком ми зробимо Валіка ідеальним
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              className={`${stage.color} p-4 rounded-2xl text-center`}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-2">{stage.icon}</div>
              <p className="font-semibold text-sm text-foreground">{stage.label}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <Button 
            onClick={onNext}
            size="lg"
            className="bg-lime hover:bg-lime/90 text-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Поїхали
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Pages 3-8: Preparation steps
function PreparationPage({ 
  step, 
  title, 
  emoji, 
  bgGradient,
  onNext 
}: { 
  step: number
  title: string
  emoji: string
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
      <ProgressTracker currentStep={step} />
      
      <motion.div 
        className="flex-1 flex flex-col items-center justify-center text-center max-w-lg"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div 
          className="text-6xl mb-4"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {emoji}
        </motion.div>
        
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6 text-balance">
          {title}
        </h2>
        
        <PhotoPlaceholder />
        
        <motion.div
          className="mt-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <Button 
            onClick={onNext}
            size="lg"
            className="bg-pink hover:bg-pink/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Далі
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Page 9: Final page
function FinalPage({ onCelebrate }: { onCelebrate: () => void }) {
  const [showConfetti, setShowConfetti] = useState(false)
  
  useEffect(() => {
    setShowConfetti(true)
  }, [])
  
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-pink/30 via-purple/20 to-yellow/30 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Confetti effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: ["#FFD700", "#FF69B4", "#9370DB", "#98FB98", "#FF6B6B"][i % 5],
                left: `${Math.random() * 100}%`,
              }}
              initial={{ y: -20, opacity: 1, rotate: 0 }}
              animate={{ 
                y: typeof window !== 'undefined' ? window.innerHeight + 20 : 1000,
                rotate: 720,
                opacity: [1, 1, 0]
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 3
              }}
            />
          ))}
        </div>
      )}
      
      <motion.div 
        className="text-center z-10"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        <motion.div 
          className="text-8xl mb-6"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎊
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-balance"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Ура, тепер Валік готовий!
        </motion.h1>
        
        {/* Final composition */}
        <motion.div 
          className="relative mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="relative flex items-end justify-center gap-4">
            {/* K-pop group silhouettes */}
            <motion.div 
              className="w-16 h-32 md:w-20 md:h-40 bg-purple/40 rounded-t-full"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
            />
            <motion.div 
              className="w-16 h-36 md:w-20 md:h-44 bg-purple/50 rounded-t-full"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            />
            
            {/* Valik placeholder - center, prominent */}
            <motion.div 
              className="relative w-24 h-44 md:w-32 md:h-52 bg-pink rounded-t-full border-4 border-yellow flex items-center justify-center"
              animate={{ 
                y: [0, -8, 0],
                boxShadow: ["0 0 20px rgba(236, 72, 153, 0.5)", "0 0 40px rgba(236, 72, 153, 0.8)", "0 0 20px rgba(236, 72, 153, 0.5)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white font-bold text-xs md:text-sm text-center px-2">ВАЛІК</span>
              <motion.div 
                className="absolute -top-4 text-2xl"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                👑
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="w-16 h-36 md:w-20 md:h-44 bg-purple/50 rounded-t-full"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div 
              className="w-16 h-32 md:w-20 md:h-40 bg-purple/40 rounded-t-full"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            />
          </div>
          
          {/* Stage */}
          <div className="w-full h-8 bg-gradient-to-r from-purple/60 via-pink/60 to-purple/60 rounded-lg mt-2" />
          
          {/* Stage lights */}
          <motion.div 
            className="absolute -top-8 left-1/4 w-4 h-16 bg-gradient-to-b from-yellow to-transparent opacity-50 rounded-full blur-sm"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -top-8 right-1/4 w-4 h-16 bg-gradient-to-b from-pink to-transparent opacity-50 rounded-full blur-sm"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
          
          {/* Label */}
          <motion.div 
            className="mt-4 inline-block px-4 py-2 bg-foreground/10 rounded-full text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Music className="inline w-4 h-4 mr-2" />
            GPT обʼєднав Валіка з k-pop вайбом ✨
          </motion.div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: ["0 0 0 0 rgba(236, 72, 153, 0.4)", "0 0 0 20px rgba(236, 72, 153, 0)", "0 0 0 0 rgba(236, 72, 153, 0.4)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Button 
              onClick={onCelebrate}
              size="lg"
              className="bg-gradient-to-r from-pink via-purple to-pink hover:opacity-90 text-white text-xl px-10 py-8 rounded-full shadow-2xl transition-all"
            >
              <PartyPopper className="mr-3 w-6 h-6" />
              Тиць за привітаннями
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Celebration modal
function CelebrationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null
  
  return (
    <motion.div 
      className="fixed inset-0 bg-foreground/80 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-background rounded-3xl p-8 max-w-lg w-full text-center shadow-2xl"
        initial={{ scale: 0.5, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div 
          className="text-6xl mb-4"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          🎂
        </motion.div>
        
        <h2 className="text-3xl font-bold text-foreground mb-4">
          З Днем Народження, Валік! 🎉
        </h2>
        
        <p className="text-lg text-muted-foreground mb-6 text-pretty">
          Бажаємо тобі щастя, здоровʼя, успіхів і ще багато крутих днів народження! 
          Ти найкращий! 💖
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {["🎈", "🎁", "🎊", "🥳", "💫", "⭐", "🌟", "✨"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-3xl"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                delay: i * 0.1
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground italic">
          Зроблено з любовʼю і приколом 💜
        </p>
        
        <Button 
          onClick={onClose}
          className="mt-6 bg-pink hover:bg-pink/90 text-white rounded-full px-6"
        >
          Дякую! 💖
        </Button>
      </motion.div>
    </motion.div>
  )
}

// Main component
export default function BirthdayWizard() {
  const [currentPage, setCurrentPage] = useState(1)
  const [showCelebration, setShowCelebration] = useState(false)
  
  const preparationSteps = [
    { step: 3, title: "Підзаряджаємо Валіка на максимум ⚡", emoji: "🔋", bgGradient: "bg-gradient-to-br from-yellow/30 via-background to-lime/20" },
    { step: 4, title: "Трохи стилю ще нікому не завадило 😎", emoji: "👔", bgGradient: "bg-gradient-to-br from-lime/30 via-background to-pink/20" },
    { step: 5, title: "Харизма завантажується… 89%", emoji: "✨", bgGradient: "bg-gradient-to-br from-pink/30 via-background to-purple/20" },
    { step: 6, title: "Активуємо режим \"День народження\" 🎉", emoji: "🎂", bgGradient: "bg-gradient-to-br from-purple/30 via-background to-yellow/20" },
    { step: 7, title: "Без друзів це не працює", emoji: "👥", bgGradient: "bg-gradient-to-br from-coral/30 via-background to-lime/20" },
    { step: 8, title: "Останні штрихи… майже готово 👀", emoji: "🎯", bgGradient: "bg-gradient-to-br from-lime/30 via-background to-pink/20" },
  ]
  
  const nextPage = () => setCurrentPage(prev => prev + 1)
  
  return (
    <main className="relative overflow-hidden">
      <FloatingElements />
      
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

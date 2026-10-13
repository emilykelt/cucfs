import { motion } from 'framer-motion'
import { useRef, } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { REVEAL_2027 } from '../config/reveal'

// CUCFS model image
const modelImage = '/hero_model.webp'

interface HeroSectionProps {
  onSectionClick?: (sectionId: string) => void
}

export function HeroSection({ onSectionClick }: HeroSectionProps) {
  const containerRef = useRef(null)
  const isMobile = useIsMobile()

  // Suppress unused parameter warning
  console.log('Hero section click handler:', onSectionClick)

  return (
    <section 
      id="home" 
      className="min-h-[120vh] flex items-center justify-center relative overflow-hidden"
      ref={containerRef}
    >
      {/* Full-width backdrop that contrasts with the theme (black in light mode, white in dark mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black dark:bg-white overflow-hidden">
        <img
          src={modelImage}
          alt="CUCFS Fashion model"
          className="absolute right-[5%] top-0 h-full w-[80%] sm:w-[70%] md:w-[55%] object-cover object-left"
        />
      </div>

      <motion.div 
        className="relative z-10 text-left max-w-6xl mx-auto px-6 flex items-center min-h-screen -translate-x-6 md:-translate-x-12 mix-blend-difference text-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <div className="max-w-2xl">
          <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl tracking-[-0.03em] font-light mb-4 leading-none">
              CUCFS
            </h1>
            <h1 className="text-7xl md:text-8xl lg:text-9xl tracking-[-0.03em] font-light mb-8 leading-none">
              2027
            </h1>
            <div className="w-24 h-px bg-white mb-8" />
          </motion.div>


          <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 1, delay: 0.2 }}
            className="max-w-lg"
          >

            <p className="text-lg tracking-wide text-white/80 leading-none">
             Cambridge University 
            </p>
            <p className="text-lg tracking-wide text-white/80 leading-none">
             Charity Fashion Show
            </p>
            {REVEAL_2027 && (
              <p className="text-lg tracking-wide leading-[3rem]">
               #TheOtherWay
              </p>
            )}
          </motion.div>

          <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 1, delay: 0.2 }}
            className="mt-12"
          >
            <div className="flex">
              <div className="w-px h-12 bg-white/50" />
            </div>
            <p className="text-xs tracking-widest text-white/80 mt-4">SCROLL TO EXPLORE</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
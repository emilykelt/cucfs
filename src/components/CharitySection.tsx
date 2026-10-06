import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { PurpleGlare } from './PurpleGlare'
import { REVEAL_2027 } from '../config/reveal'

interface CharitySectionProps {
  onSectionClick?: (sectionId: string) => void
  onNavigation?: (
    page:
      | 'home'
      | 'archive'
      | 'committee'
      | 'about'
      | 'charity'
      | 'show'
      | 'partners'
      | 'contact',
    section?: string
  ) => void
}

export function CharitySection({ onSectionClick, onNavigation }: CharitySectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isMobile = useIsMobile()

  // Suppress unused variable warnings
  console.log(onSectionClick, onNavigation)

  return (
    <section id="charity" className="py-20 px-6 bg-muted/10 relative" ref={ref}>
      <PurpleGlare position="top-right" intensity={0.4} />
      <PurpleGlare position="bottom-left" intensity={0.4} />

      <motion.div
        className="max-w-7xl mx-auto"
        initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
        animate={isMobile || isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: isMobile ? 0 : 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            animate={isMobile || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: isMobile ? 0 : 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl tracking-[-0.02em] font-light mb-6">
              Our Purpose
            </h2>
            <div className="w-16 h-px bg-foreground mb-6" />
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Every thread, design, and moment on our runway contributes to causes that matter.
            </p>
            <div className="text-sm text-muted-foreground mb-6">
              <p className="mb-2">
                Each year, we carefully select new beneficiaries that reflect our evolving mission.
              </p>
              <p className="font-medium">
                {REVEAL_2027
                  ? 'We are excited to announce our support of Everyone’s Invited this year.'
                  : 'Our 2027 charity will be announced soon.'}
              </p>
            </div>
            <button
              onClick={() => onNavigation?.('charity')}
              className="text-sm text-foreground underline hover:text-muted-foreground transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-0 focus:border-0"
            >
              Hear More About Our Charities
            </button>
          </motion.div>

          {/* Right side - this year's charity */}
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            animate={isMobile || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: isMobile ? 0 : 0.8, delay: isMobile ? 0 : 0.2 }}
          >
            <div className="bg-card/50 p-8 rounded-lg border border-border/20 hover:border-border/40 transition-all duration-300">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">2027 Charity</p>
              {REVEAL_2027 ? (
                <>
              <h4 className="text-2xl md:text-3xl font-light tracking-wide mb-4">Everyone’s Invited</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                A charity working to eradicate rape culture from the bottom up.
              </p>
              <a
                href="https://www.everyonesinvited.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:text-muted-foreground transition-colors duration-300"
              >
                Visit Everyone’s Invited
              </a>
                </>
              ) : (
                <h4 className="text-2xl md:text-3xl font-light tracking-wide">To be announced soon</h4>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

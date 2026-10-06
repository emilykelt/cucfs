import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef  } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { PurpleGlare } from './PurpleGlare'

interface SponsorsSectionProps {
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

export function SponsorsSection({ onNavigation }: SponsorsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isMobile = useIsMobile()

  return (
    <section id="sponsors" className="py-12 px-6 relative" ref={ref}>
      <PurpleGlare position="top-left" intensity={0.3} />
      <PurpleGlare position="bottom-right" intensity={0.5} />

      {/* outer wrapper always starts fully opaque */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {/* Header */}
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isMobile ? { opacity: 1, y: 0 } : isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0 : 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-center md:text-left flex-1">
              <h2 className="text-4xl md:text-5xl tracking-[-0.02em] font-light mb-4">
                Partners
              </h2>
              <div className="w-16 h-px bg-foreground mx-auto md:mx-0 mb-4" />
              <p className="text-base text-muted-foreground max-w-2xl md:max-w-xl mx-auto md:mx-0 leading-relaxed">
                Our 2027 partners will be announced soon.
              </p>
              <div className="mt-4">
                <button
                  onClick={() => onNavigation?.('partners')}
                  className="text-sm text-foreground underline hover:text-muted-foreground transition-colors duration-300 cursor-pointer focus:outline-none"
                >
                  Learn More About Partnering with CUCFS
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

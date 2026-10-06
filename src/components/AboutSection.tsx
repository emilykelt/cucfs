import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { PurpleGlare } from './PurpleGlare'
import { REVEAL_2027 } from '../config/reveal'

interface AboutSectionProps {
  onSectionClick?: (sectionId: string) => void
}

export function AboutSection({ onSectionClick }: AboutSectionProps) {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  useEffect(() => {
    const checkIsMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isSmallScreen = window.innerWidth < 768
      return isTouchDevice || isSmallScreen
    }
    setIsMobile(checkIsMobile())
  }, [])
  
  // Suppress unused variable warning
  console.log(onSectionClick)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Simplify opacity animation on mobile
  const textOpacity = useTransform(
    scrollYProgress, 
    isMobile ? [0, 0.3, 1] : [0, 0.1, 0.12, 0.15, 0.2, 0.21, 0.23, 1], 
    isMobile ? [0.3, 0.8, 1] : [0.1, 0.1, 0.2, 0.3, 0.5, 0.8, 1, 1]
  )

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      <PurpleGlare position="top-right" intensity={0.4} />
      <PurpleGlare position="bottom-left" intensity={0.3} />
      <motion.div 
        className="max-w-6xl mx-auto"
        style={{ 
          opacity: textOpacity,
          willChange: 'opacity'
        }}
      >
        <motion.div
            initial={{ opacity: 0}}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-20"
        >
          <div>
            <h2 className="text-4xl md:text-5xl tracking-[-0.02em] font-light mb-12">
              Who We Are
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
              The Cambridge University Charity Fashion Show first launched in 2014, and since then, has hosted an annual show to celebrate emerging student designers and their passion for creativity, as well as championing charities who create positive change in our local Cambridge community.
              </p>
              <p>
              {/* TODO: replace XYZ with the 2026 designer and design counts */}
              Our 2026 show titled, ‘A Walk of Becoming’ celebrated the intersection between social change and design, with each walk focusing on an era of history or creativity. We featured XYZ designers, and XYZ designs, with all proceeds being donated to the charity, Refuge.
              </p>
              <p>
              Stay tuned for more information about our upcoming 2027 show!
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0}}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl tracking-[-0.01em] font-light mb-6">President's Letter</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="italic">
                  "My involvement in CUCFS has been an incredible privilege. To lead a society which champions creative expression, from promoting young designers from across the country to bringing together over one hundred Cambridge students in the show’s production, has undoubtedly been one of the highlights of my university experience.
                </p>
                <p className="italic">
                  Community is at the heart of CUCFS and it is something we are continually endeavouring to strengthen; we are immensely proud this year to be championing{' '}
                  {REVEAL_2027 ? (
                    'Everyone’s Invited, a charity working to eradicate rape culture from the bottom up.'
                  ) : (
                    <>
                      <span
                        className="inline-block align-baseline bg-foreground text-background not-italic text-[0.7em] tracking-[0.25em] uppercase px-2 py-0.5 select-none"
                        title="To be announced"
                        aria-label="charity redacted until announced"
                      >
                        Redacted
                      </span>
                      .
                    </>
                  )}
                </p>
                <p className="italic">
                  I am hugely excited for all of our attendees to see the realisation of everyone’s hard work and talent, and to feel the joy that I did when attending the CUCFS show in my first year. Here’s to CUCFS 2027!"
                </p>
                <div className="pt-4">
                  <p className="text-sm tracking-wider">— Eliza Doran, President</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
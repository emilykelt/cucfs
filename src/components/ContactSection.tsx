import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { PurpleGlare } from './PurpleGlare'
import { Instagram, Linkedin, Facebook, Mail } from 'lucide-react'

// lucide-react has no TikTok icon
function TikTok({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

interface ContactSectionProps {
  onSectionClick?: (sectionId: string) => void
}

export function ContactSection({ onSectionClick }: ContactSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isMobile = useIsMobile()

  console.log(onSectionClick)

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      handle: '@CUCFS',
      url: 'https://instagram.com/CUCFS'
    },
    {
      icon: TikTok,
      label: 'TikTok',
      handle: '@cucfs_official',
      url: 'https://www.tiktok.com/@cucfs_official'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      handle: 'CUCFS',
      url: 'https://www.linkedin.com/company/cambridge-charity-fashion-society/about/'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      handle: 'CUCFS Official',
      url: 'https://facebook.com/CUCFS'
    },
    {
      icon: Mail,
      label: 'Email',
      handle: 'cucfs@cambridgesu.co.uk',
      url: 'mailto:cucfs@cambridgesu.co.uk'
    }
  ]

  return (
    <section id="contact" className="py-16 px-6 relative" ref={ref}>
      <PurpleGlare position="top-middle-right" intensity={0.4} />
      <PurpleGlare position="bottom-left" intensity={0.3} />

      {/* Wrapper always visible on load */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {/* Header */}
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          animate={
            isMobile || isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
          }
          transition={{ duration: isMobile ? 0 : 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl tracking-[-0.02em] font-light mb-4">
            Connect
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto mb-4" />
        </motion.div>

        {/* Social links grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={
                link.label !== 'Email' ? 'noopener noreferrer' : undefined
              }
              className="group flex items-center p-4 border border-border/20 hover:border-border/40 transition-all duration-300 w-[calc(50%-0.5rem)] lg:w-[calc((100%-2rem)/3)]"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-muted/30 group-hover:bg-muted/50 transition-colors duration-300 mr-3 flex-shrink-0">
                <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm sm:text-base font-light tracking-wide mb-0.5 group-hover:text-foreground transition-colors duration-300 truncate">
                  {link.label}
                </h3>
                <p className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 truncate">
                  {link.handle}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer text */}
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={
            isMobile || isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
          }
          transition={{ duration: isMobile ? 0 : 0.8, delay: isMobile ? 0 : 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground leading-relaxed mb-8">
            For press inquiries, partnership proposals, or general questions, we'd love to hear from you.
          </p>
          <div className="space-y-2">
            <p className="text-sm tracking-widest text-muted-foreground">CUCFS</p>
            <p className="text-xs tracking-wider text-muted-foreground">
              Showcasing creative talent, in aid of charity.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

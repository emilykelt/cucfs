import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'
import { Logo } from './Logo'

type Page = 'home' | 'archive' | 'committee' | 'about' | 'charity' | 'show' | 'partners' | 'zine' | 'contact'

export type ArchiveYear = '2026' | '2025'

// Stops on the top-bar timeline, newest first
const archiveYears: ArchiveYear[] = ['2026', '2025']

interface NavigationProps {
  currentPage: Page
  activeSection: string
  archiveYear: ArchiveYear
  onNavigation: (page: Page, section?: string) => void
  onArchiveYear: (year: ArchiveYear) => void
}

export function Navigation({ currentPage, archiveYear, onNavigation, onArchiveYear }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // All pages (for menu)
  const allPages = [
    { id: 'home', label: 'Home', type: 'page' as const },
    { id: 'charity', label: 'Charities', type: 'page' as const },
    { id: 'partners', label: 'Partners', type: 'page' as const },
    { id: 'committee', label: 'Committee', type: 'page' as const },
    { id: 'archive', label: 'Archive', type: 'page' as const },
    { id: 'zine', label: 'Zine', type: 'page' as const },
    { id: 'contact', label: 'Contact', type: 'page' as const },
    { id: 'book', label: 'Book', type: 'external' as const, url: 'https://fetch.ai/cucfs' }
  ]

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleItemClick = (item: typeof allPages[0]) => {
    // Handle external links
    if (item.type === 'external' && 'url' in item) {
      window.open(item.url, '_blank', 'noopener,noreferrer')
      setIsMenuOpen(false)
      return
    }
    
    // Every other menu item is a dedicated page
    onNavigation(item.id as Page)
    setIsMenuOpen(false)
  }

  const getActiveState = (item: { id: string; type: 'page' | 'section' | 'external' }) => {
    if (item.type === 'external') {
      return false // External links are never "active"
    }
    return currentPage === item.id
  }

  return (
    <>
      <motion.nav
    initial={{ y: 0, opacity: 1 }}
    animate={{ y: 0, opacity: 1 }}
  
        className="fixed top-0 left-0 right-0 z-50 bg-transparent nav-blend"
      >
        <div className="flex items-center justify-between px-8 py-5 max-w-full">
          {/* Logo - positioned at very left edge */}
          <motion.div
            whileHover={isMobile ? undefined : { scale: 1.05 }}
            className="cursor-pointer flex-shrink-0"
            onClick={() => onNavigation('home', 'home')}
          >
            <Logo className="h-10" forceWhite />
          </motion.div>

          {/* Centre: Home, then the archive years */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 gap-10 text-sm">
            <button
              onClick={() => onNavigation('home', 'home')}
              className={`relative font-medium transition-colors duration-300 focus:outline-none ${
                currentPage === 'home' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-foreground" />
              )}
            </button>

            <span className="h-4 w-px bg-foreground/20" aria-hidden="true" />

            {/* Archive timeline: one dot per past show, the filled dot slides to the year being viewed */}
            <div className="relative flex items-center gap-14 px-1 pt-1" role="group" aria-label="Archive years">
              <div className="absolute left-3 right-3 top-[9px] h-px bg-foreground/50" aria-hidden="true" />
              {archiveYears.map((year) => {
                const isActive = currentPage === 'archive' && archiveYear === year
                return (
                  <button
                    key={year}
                    onClick={() => {
                      onArchiveYear(year)
                      onNavigation('archive')
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    aria-pressed={isActive}
                    className="relative flex flex-col items-center gap-1.5 focus:outline-none group"
                  >
                    <span className="relative block w-[11px] h-[11px] rounded-full border border-foreground bg-background group-hover:bg-foreground/30 transition-colors">
                      {isActive && (
                        <motion.span
                          layoutId="timeline-thumb"
                          layout="position"
                          className="absolute -inset-[3px] rounded-full bg-foreground"
                          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        />
                      )}
                    </span>
                    <span
                      className={`text-xs tracking-widest transition-colors ${
                        isActive ? 'text-foreground font-medium' : 'text-muted-foreground group-hover:text-foreground'
                      }`}
                    >
                      {year}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right side - Home icon, Theme toggle and Menu button */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* Home Icon */}
            <motion.button
              whileHover={isMobile ? undefined : { scale: 1.05 }}
              whileTap={isMobile ? undefined : { scale: 0.95 }}
              onClick={() => onNavigation('home', 'home')}
              className="p-2 rounded-md text-foreground hover:bg-accent/50 transition-colors duration-300 focus:outline-none"
              title="Go to Home"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </motion.button>
            
            <ThemeToggle />
            
            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-foreground hover:bg-accent/50 transition-colors duration-300 focus:outline-none"
            >
              <motion.svg
                animate={isMobile ? undefined : { rotate: isMenuOpen ? 90 : 0 }}
                transition={isMobile ? undefined : { duration: 0.3 }}
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-height Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={isMobile ? undefined : { opacity: 0 }}
            animate={isMobile ? undefined : { opacity: 1 }}
            exit={isMobile ? undefined : { opacity: 0 }}
            transition={isMobile ? undefined : { duration: 0.3 }}
            className="fixed inset-0 z-40"
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Gradient shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-background/95" />
            
            {/* Menu Content - positioned in top right corner */}
            <motion.div
              initial={isMobile ? undefined : { x: 100, opacity: 0 }}
              animate={isMobile ? undefined : { x: 0, opacity: 1 }}
              exit={isMobile ? undefined : { x: 100, opacity: 0 }}
              transition={isMobile ? undefined : { duration: 0.4, ease: "easeOut" }}
              className="absolute top-0 right-0 h-full w-80 bg-background border-l border-border/20 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full pt-24 px-8">
                <div className="space-y-6">
                  {allPages.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      initial={isMobile ? undefined : { x: 50, opacity: 0 }}
                      animate={isMobile ? undefined : { x: 0, opacity: 1 }}
                      transition={isMobile ? undefined : { duration: 0.25, delay: index * 0.04, ease: 'easeOut' }}
                      className={`w-full text-left text-xl tracking-wide transition-colors duration-150 focus:outline-none relative py-3 block ${
                        getActiveState(item)
                          ? 'text-primary font-medium'
                          : 'text-foreground hover:text-primary'
                      }`}
                      whileHover={isMobile ? undefined : { x: 10, transition: { duration: 0.15, ease: 'easeOut' } }}
                    >
                      {item.label}
                      {getActiveState(item) && (
                        <motion.div
                          className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"
                          initial={isMobile ? undefined : { scaleX: 0 }}
                          animate={isMobile ? undefined : { scaleX: 1 }}
                          transition={isMobile ? undefined : { duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
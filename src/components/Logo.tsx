import { useTheme } from '../contexts/ThemeContext'

interface LogoProps {
  className?: string
  onClick?: () => void
  /** Use the white logo regardless of theme (for the blended transparent nav) */
  forceWhite?: boolean
}

export function Logo({ className = '', onClick, forceWhite = false }: LogoProps) {
  const { theme } = useTheme()
  
  const logoSrc = forceWhite || theme === 'dark' ? '/logo-white.svg' : '/logo-black.svg'
  
  // Debug logging
  console.log('Current theme:', theme, 'Logo src:', logoSrc)
  
  return (
    <img
      src={logoSrc}
      alt="CUCFS Logo"
      className={`h-8 w-auto ${className}`}
      onClick={onClick}
      onError={(e) => {
        console.error('Failed to load logo:', logoSrc)
        console.error('Error:', e)
      }}
      onLoad={() => {
        console.log('Successfully loaded logo:', logoSrc)
      }}
    />
  )
}

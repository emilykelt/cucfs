// import { useRef } from 'react'
// import { Button } from './ui/button'

// export function PartnersPage() {
//   const ref = useRef(null)

//   const partners = [
//     { name: "Arttoo", description: "Fractional investment platform for iconic art pieces (Sotheby's, Christie's). Supports provenance tracking and community investment." },
//     { name: "Brockway Carpets", description: "Premium wool carpets, family-run, eco-friendly production." },
//     { name: "MuJu Star", description: "Fashion brand specialising in T-shirts and Cami Tops. 'It Girl Energy.'" },
//     { name: "ByEloise London", description: "Premium hairbands that double as bangles, gift boxes shortlisted for 'Gift of the Year 2025.'" },
//     { name: "Jack's Gelato", description: "Handmade ice cream and sorbets, Cambridge favourite." },
//     { name: "Pages Coffee", description: "Independent coffee house in Cambridge city centre." },
//     { name: "Pimentae Drinks", description: "Bar-quality tequila cocktails in bottles, focus on experience and sustainability." },
//     { name: "Café Au Chocolat", description: "Crêpes, patisserie, coffee, and artisan chocolates inspired by French traditions." },
//     { name: "Saffron Walden Coffee Company", description: "Independent roasters, small-batch specialty coffee." },
//     { name: "XIX Vodka", description: "Vodka brand from the Sidemen, including pre-mixed Vodka Spritz." },
//     { name: "HumaniTea", description: "UK's first plant-based tea lattes in cans (Matcha, Earl Grey). Social enterprise." },
//     { name: "KAYTEA", description: "Creative tea brand founded in 2020, known for matcha lattes and iced teas." },
//     { name: "Savoursmiths Crisps", description: "Luxury crisps, bold flavours like Wagyu Beef & Truffle." },
//     { name: "Simply Roasted Crisps", description: "Healthier crisps roasted in unique ovens, 50% less fat." },
//     { name: "DROOLY", description: "Artisan brownies and baked treats with innovative flavours." },
//     { name: "Coupe Rocks", description: "Alcohol-free cocktail subscription boxes and gift sets." },
//     { name: "RCDS Concrete", description: "Specialists in reinforced concrete detailing, projects include Tottenham Stadium & Liverpool FC stand." },
//     { name: "Christ's College", description: "Cambridge college supporting the show through donations." },
//     { name: "Jesus College", description: "Cambridge college supporting the show through donations." },
//     { name: "Lucy Cavendish College", description: "Cambridge college supporting the show through donations." },
//   ]

//   return (
//     <div className="min-h-screen pt-32 pb-20" ref={ref} style={{ overflowY: 'auto', transform: 'none' }}>
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <h1 className="text-5xl md:text-7xl tracking-[-0.02em] font-light mb-6">
//             SPONSORS & PARTNERS
//           </h1>
//           <div className="w-24 h-px bg-foreground mx-auto mb-8" />
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Thank you to our incredible sponsors who make the Cambridge University Charity Fashion Show possible.
//           </p>
//         </div>

//         {/* Partners Grid - Scrollable on mobile */}
//         <div className="relative overflow-x-auto -mx-6 px-6" style={{ WebkitOverflowScrolling: 'touch', overscrollBehaviorX: 'contain', touchAction: 'pan-x' }}>
//           <div className="flex gap-6 whitespace-nowrap" style={{ transform: 'none' }}>
//             {partners.map((p, i) => (
//               <div
//                 key={i}
//                 className="flex-shrink-0 px-8 py-4"
//               >
//                 <div className="text-2xl md:text-3xl font-light tracking-wide text-muted-foreground">
//                   {p.name}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Contact Section */}
//         <div className="mt-20 text-center">
//           <h3 className="text-3xl font-light mb-6">Interested in Partnering?</h3>
//           <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
//             Join our community of sponsors and help us make a difference through fashion.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button asChild size="lg" className="px-8 py-3">
//               <a
//                 href="mailto:cucfs@cambridgesu.co.uk"
//                 className="flex items-center gap-2"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 Contact Us
//               </a>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { Button } from './ui/button'

export function PartnersPage() {
  const ref = useRef(null)
  // const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen pt-32 pb-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: isMobile ? 0 : 0.8 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-center md:text-left flex-1">
              <h1 className="text-5xl md:text-7xl tracking-[-0.02em] font-light mb-6">
                SPONSORS & PARTNERS
              </h1>
              <div className="w-24 h-px bg-foreground mx-auto md:mx-0 mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
                We simply could not put on CUCFS without the generosity of our sponsors, whose support is vital to bringing the Show to life each year. 
                As such, we are always looking for new companies to partner with, whether through financial contributions or in-kind support. 
                In return for sponsors’ contributions, we can offer benefits such as social media exposure, creation of high-quality visual assets, 
                opportunities for product placement, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
                By partnering with CUCFS, your brand will gain access to one of the most desirable student audiences in the UK, while supporting a platform 
                that champions creativity, sustainability, and charitable impact. We strive to build long-term, mutually beneficial partnerships that 
                highlight our sponsors both within Cambridge and beyond — connecting your company with the next generation of innovators, consumers, and leaders.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Please email <a href="mailto:cucfs@cambridgesu.co.uk" className="underline hover:text-primary transition-colors">
                  cucfs@cambridgesu.co.uk
                </a> for more information or to express interest in sponsoring the show.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: isMobile ? 0 : 0.8, delay: isMobile ? 0 : 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-light text-center mb-6">Our 2027 Sponsors & Partners</h2>
          <p className="text-center text-muted-foreground text-lg">To be announced soon.</p>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: isMobile ? 0 : 0.8, delay: isMobile ? 0 : 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-light mb-6">Interested in Partnering?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of sponsors and help us make a difference through fashion. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button
              asChild
              size="lg"
              className="px-8 py-3"
            >
              <a
                href="/partners-deck.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Partners Deck
              </a>
            </Button> */}
            <Button
              asChild
            //   variant="outline"
              size="lg"
              className="px-8 py-3"
            >
              <a
                href="mailto:cucfs@cambridgesu.co.uk"
                className="flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  )
}






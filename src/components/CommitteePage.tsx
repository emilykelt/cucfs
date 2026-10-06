import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'
// import { Button } from './ui/button'

export function CommitteePage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // 2027 Executive Committee. Photos: Eliza and Amali reuse existing files;
  // Flossie and Olivia show a placeholder until headshots are added to public/committee.
  const executives = [
    {
      name: "Eliza Doran",
      role: "President",
      image: "/Executive_Team/Eliza Doran, Creative Secretary.jpg",
      bio: ""
    },
    {
      name: "Flossie Bullion",
      role: "Vice President",
      image: "/committee/flossie-bullion.jpg",
      bio: ""
    },
    {
      name: "Olivia Pearce",
      role: "Treasurer",
      image: "/committee/olivia-pearce.jpg",
      bio: ""
    },
    {
      name: "Amali Carter",
      role: "General Secretary",
      image: "/committee/exec-3.jpg",
      bio: ""
    }
  ]

  return (
    <div className="pt-24">
      {/* Header Section */}
      <section className="py-20 px-6" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl tracking-[-0.02em] font-light mb-8">
              Committee
            </h1>
            <div className="w-24 h-px bg-foreground mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Meet the passionate individuals who bring our vision to life. 
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 px-6 bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-light tracking-[-0.01em] text-center mb-16"
          >
            The Executive Committee
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {executives.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-light tracking-wide mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground tracking-wider uppercase">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
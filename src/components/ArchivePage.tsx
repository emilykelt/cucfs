import { motion, AnimatePresence } from 'framer-motion'

interface Walk {
  number: string
  name: string
  description: string
  images?: string[]
}

interface ArchiveYear {
  year: string
  theme: string
  themeDescription: string[]
  letter: { heading: string; paragraphs: string[]; signature: string }
  charity: { heading: string; paragraphs: string[]; raised: string }
  walks: Walk[]
}

const years: ArchiveYear[] = [
  {
    year: '2026',
    theme: 'A Walk of Becoming',
    themeDescription: [
      'This show takes you through the historical oscillation of fashion as a mode of expression, with each walk focusing broadly on a different era of history or creativity. Historical motifs are constantly resurging in the fashion world today, and CUCFS 2026 is an ode to the intersection of social change and design.',
    ],
    letter: {
      heading: 'President’s Letter',
      paragraphs: [
        '“Working with such an incredible team on the Cambridge University Charity Fashion Show is the absolute highlight of my time at Cambridge. Coordinating such a large event is challenging, but so rewarding, and I am so proud of everyone’s efforts throughout the process of organising our 2025 showcase!',
        '2026 is set to be even bigger and better than ever before, with more designers, more designs, and even more creativity. We can’t wait to show you all what we’ve been working on!”',
      ],
      signature: '— Paige Griffiths, President 2026',
    },
    charity: {
      heading: 'Refuge',
      paragraphs: [
        'Refuge is the largest specialist domestic abuse organisation in the UK. They support thousands of women and children who have experienced domestic abuse. Support is offered through a range of services such as emergency accommodation, community outreach, legal help, benefits, support for children, and a 24/7 National Domestic Abuse helpline. One in four women will experience domestic abuse at some point in their lifetime.',
        'In 2024, Refuge first launched its ‘Brick by Brick’ campaign in association with The Independent and Persimmon Homes. This initiative has enabled new refuges to be built for survivors to live safely and comfortably.',
      ],
      raised: 'In 2026, CUCFS was able to raise £5,526.58 for Refuge.',
    },
    walks: [
      {
        number: 'Walk One',
        name: 'Gilded',
        description:
          'This collection prizes romantic opulence and aristocratic grandeur. Gilded explores how elegance evolves through identity and history, with touches of traditional decorum.',
        images: [
          '/archive/2026/walk1-runway-1.jpg',
          '/archive/2026/walk1-runway-2.jpg',
          '/archive/2026/walk1-runway-3.jpg',
          '/archive/2026/walk1-shoot-1.jpg',
        ],
      },
      {
        number: 'Walk Two',
        name: 'Duty',
        description:
          'This collection draws inspiration from periods of conflict and unrest, showing how social change can shape fashion and creativity in profound ways. This shows uniforms, workwear, and more as we highlight how conflict can impact the creative arts, creating symbols of empowerment and structure.',
        images: [
          '/archive/2026/walk2-runway-1.jpg',
          '/archive/2026/walk2-runway-2.jpg',
          '/archive/2026/walk2-shoot-1.jpg',
        ],
      },
      {
        number: 'Walk Three',
        name: 'Volume',
        description:
          'Volume explores the cultural shifts of the 1970s and 80s, showing bright colours and bold tailoring, as fashion became designed for movement and spectacle cutting through restraint with autonomy and glamour.',
        images: ['/archive/2026/walk3-runway-1.jpg', '/archive/2026/walk3-runway-2.jpg'],
      },
      {
        number: 'Walk Four',
        name: 'Grit',
        description:
          'Grit explores the spirit of punk rebellion in the late 20th century, where designers redefined style as protest. This walk captures the spirit of disruption and speaks to the reshaping of fashion history through subculture and confrontation.',
        images: [
          '/archive/2026/walk4-runway-1.jpg',
          '/archive/2026/walk4-runway-2.jpg',
          '/archive/2026/walk4-shoot-1.jpg',
          '/archive/2026/walk4-shoot-2.jpg',
        ],
      },
      {
        number: 'Walk Five',
        name: 'Morph',
        description:
          'Morph embraces the theme of futurism with a continuous dialogue between technology and human progress at the forefront of our creative vision.',
        images: ['/archive/2026/walk5-runway-1.jpg', '/archive/2026/walk5-shoot-1.jpg'],
      },
    ],
  },
  {
    year: '2025',
    theme: 'Beyond the Cover',
    themeDescription: [
      'The CUCFS 2025 show explored the theme ‘Beyond the Cover’, aiming to unveil how iconic publications have shaped our perceptions of style, culture, and society, inviting audiences to look deeper into the stories fashion tells. Each magazine represents a distinct aspect of society, and the theme delves into how these elements converge through fashion to tell stories that transcend the surface.',
      'The audience is invited to explore the deeper narratives, aesthetics, and emotions behind the iconic imagery, as each look offers a fresh perspective on the legacies these publications have created. The runway becomes a canvas for self-expression, transformation, and reimagining societal roles—an immersive experience that encourages viewers to break free from the confines of the printed page and witness the dynamic evolution of culture through fashion.',
    ],
    letter: {
      heading: 'A Letter from the Vice President',
      paragraphs: [
        '‘For me, this theme is not just about creative expression, it’s about reviving and celebrating a lost art form while addressing the deeper narratives that have shaped our perceptions of fashion, culture, and identity. With the rise of digitalisation, magazines have been pushed to the background, their physical presence fading into an era where everything exists online. Gone are the days when people collected print issues, cut out pages for inspiration, and engaged with magazines in a tactile, personal way. These publications were once powerful storytellers, shaping generations, defining movements, and setting the stage for cultural revolutions.',
        'Magazines like Vogue, National Geographic, Cosmopolitan, and Rolling Stone, each represents a distinct world. From high fashion to pop culture, from investigative journalism to scientific discovery, these publications shaped not just what we see but how we see it. As a child, I remember flipping through pages of my mother’s magazines, absorbing the visual storytelling, the carefully curated fashion spreads, the bold headlines that defined societal discourse. Those pages were more than just images and text; they were portals into different worlds, reflecting beauty, struggle, and transformation.’',
      ],
      signature: '— Samawia Asim, CUCFS Vice President and Head of Creative Direction 2025',
    },
    charity: {
      heading: 'Four Charities',
      paragraphs: [
        'The funds raised by CUCFS in 2025 went to support 4 charities: Cambridge Curiosity and Imagination, Cambridge Pink Week, Beat Eating Disorders and Sew Positive. Cambridge Curiosity and Imagination is a local charity that works with children to develop creativity and to help them express their feelings. Cambridge Pink Week is a student-led charitable initiative which raises money and awareness for breast cancer charities through a week of university-wide events each year. Beat is an eating disorder charity working to help individuals who struggle with eating disorders through its helpline, online support groups and campaigning. Sew Positive is a Cambridge-based charity that runs free sewing, mending and upcycling workshops to support mental wellbeing, while also reducing textile waste.',
      ],
      raised:
        'In 2025, we raised over £4,700, which was split equally between all our four charities. Another £238 was raised by the RAG team, which operated the cloakroom on the night of the show.',
    },
    walks: [
      { number: 'Walk One', name: 'Vogue', description: '' },
      { number: 'Walk Two', name: 'Cosmos', description: '' },
      {
        number: 'Walk Three',
        name: 'National Geographic',
        description: '',
        images: ['/archive/2025/walk3-natgeo-1.jpg'],
      },
      {
        number: 'Walk Four',
        name: 'Rolling Stone',
        description: '',
        images: ['/archive/2025/walk4-rollingstone-1.jpg'],
      },
      {
        number: 'Walk Five',
        name: 'GQ',
        description: '',
        images: ['/archive/2025/walk5-gq-1.jpg', '/archive/2025/walk5-gq-2.jpg', '/archive/2025/walk5-gq-3.jpg'],
      },
    ],
  },
]

// Earlier photos, not tied to a specific walk
const galleryImages = [
  '/ine/DSC10007.jpg',
  '/ine/DSC09884.jpg',
  '/ine/DSC09752.jpg',
  '/ine/DSC02122.jpg',
  '/ine/DSC02117.jpg',
  '/ine/DSC01752.jpg',
  '/ine/Burnt Soul - Signefotar.JPG',
  '/ine/Hannah Inskip - Signefotar.JPG',
  '/ine/Janet Sartor - Signefotar.JPG',
  '/ine/LK Bennett - Signefotar.JPG',
  '/ine/LK Bennett and Ted Baker - Signefotar.JPG',
  '/ine/IMG_2236.JPG',
  '/ine/IMG_2307.JPG',
  '/ine/IMG_2320.JPG',
  '/ine/IMG_2433.JPG',
]

interface ArchivePageProps {
  year: ArchiveYear['year']
  onYearChange: (year: '2026' | '2025') => void
}

export function ArchivePage({ year, onYearChange }: ArchivePageProps) {
  const y = years.find((entry) => entry.year === year) ?? years[0]
  const gallery = y.walks.flatMap((walk) =>
    (walk.images ?? []).map((src) => ({ src, alt: `${walk.name}, CUCFS ${y.year}` }))
  )

  return (
    <div className="pt-24">
      {/* Header + year switcher */}
      <section className="pt-16 pb-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl tracking-[-0.02em] font-light mb-8">ARCHIVE</h1>
          <div className="w-24 h-px bg-foreground mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            A journey through our creative evolution.
          </p>
          <div className="inline-flex border border-foreground/30" role="tablist" aria-label="Archive year">
            {years.map((entry) => (
              <button
                key={entry.year}
                role="tab"
                aria-selected={entry.year === y.year}
                onClick={() => onYearChange(entry.year as '2026' | '2025')}
                className={`px-10 py-3 text-sm tracking-[0.25em] transition-colors duration-300 focus:outline-none ${
                  entry.year === y.year
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {entry.year}
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        <motion.div
          key={y.year}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.35 }}
        >
          {/* Year banner: inverted colours so the change of year is unmistakable */}
          <section className="bg-foreground text-background py-16 px-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] opacity-70 mb-2">CUCFS</p>
            <h2 className="text-8xl md:text-[11rem] leading-none font-light">{y.year}</h2>
            <p className="text-2xl md:text-4xl font-light tracking-wide mt-4">{y.theme}</p>
          </section>

          {/* Theme */}
          <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto text-muted-foreground leading-relaxed space-y-4">
              <h3 className="text-2xl tracking-[-0.01em] font-light mb-6 text-foreground text-center">The Theme</h3>
              {y.themeDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          {/* Letter + charity */}
          <section className="py-16 px-6 bg-muted/10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl tracking-[-0.01em] font-light mb-6">{y.letter.heading}</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {y.letter.paragraphs.map((p, i) => (
                    <p key={i} className="italic">{p}</p>
                  ))}
                  <p className="text-sm tracking-wider pt-2">{y.letter.signature}</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl tracking-[-0.01em] font-light mb-6">Charity: {y.charity.heading}</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {y.charity.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <p className="text-foreground font-medium pt-2">{y.charity.raised}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Walks: all descriptions together */}
          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl tracking-[-0.01em] font-light mb-10 text-center">The Walks</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {y.walks.map((walk) => (
                  <div key={walk.name} className="border-t border-foreground/40 pt-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{walk.number}</p>
                    <h4 className="text-3xl font-light tracking-wide mb-3">{walk.name}</h4>
                    {walk.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">{walk.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Gallery: every photo from this year */}
          <section className="py-16 px-6 bg-muted/10">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl tracking-[-0.01em] font-light mb-10 text-center">{y.year} Gallery</h3>
              <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
                {gallery.map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className="w-full mb-4 rounded-sm break-inside-avoid"
                    loading="lazy"
                  />
                ))}
              </div>

              {y.year === '2025' && (
                <>
                  <h3 className="text-2xl tracking-[-0.01em] font-light mt-16 mb-10 text-center">
                    More From Past Shows
                  </h3>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                    {galleryImages.map((src, index) => (
                      <div key={src} className="aspect-square overflow-hidden rounded-sm">
                        <img
                          src={src}
                          alt={`Archive photo ${index + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>

          {/* Jump to the other year */}
          <section className="py-16 px-6 text-center">
            {years
              .filter((entry) => entry.year !== y.year)
              .map((entry) => (
                <button
                  key={entry.year}
                  onClick={() => {
                    onYearChange(entry.year as '2026' | '2025')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="text-sm tracking-[0.25em] underline underline-offset-8 hover:text-muted-foreground transition-colors"
                >
                  VIEW THE {entry.year} SHOW
                </button>
              ))}
          </section>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

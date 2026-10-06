import { Button } from './ui/button'
import { REVEAL_2027 } from '../config/reveal'

interface ShowTeaserSectionProps {
  onSectionClick?: (sectionId: string) => void
}

// DRAFT COPY: written up from the 2027 theme PDF notes. Needs committee sign-off.
const walks = [
  {
    number: 'Walk One',
    name: 'His',
    description: 'Masculinity as performance. A narrow way of dressing that still carries real weight.',
  },
  {
    number: 'Walk Two',
    name: 'Her',
    description:
      'Femininity as performance. Freer, but contested, sometimes taboo, sometimes dangerous. From the ballrooms of 18th-century France to the ballrooms of 20th-century Harlem.',
  },
  {
    number: 'Walk Three',
    name: 'Macabre',
    description: 'The darker movements that shaped counter-cultural style, and a celebration of being other.',
  },
  {
    number: 'Walk Four',
    name: 'Filth',
    description: 'Beauty against ugliness. Pushing past what tradition allows.',
  },
  {
    number: 'Walk Five',
    name: 'Perform',
    description:
      'The heart of the show: style as performance, identity as a role you play. Bright, bold and unapologetic.',
  },
]

export function ShowTeaserSection({ onSectionClick }: ShowTeaserSectionProps) {
  // Suppress unused variable warning
  console.log(onSectionClick)

  return (
    <section id="show" className="py-24 px-6 bg-muted/10 relative">
      <div className="max-w-5xl mx-auto">
        {/* Titles */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl tracking-[-0.02em] font-light mb-6">
            The Show
          </h2>
          {REVEAL_2027 && (
            <>
          <h3 className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-2">
            2027 Theme
          </h3>
          <h4 className="text-2xl md:text-3xl font-light tracking-wide mb-2">
            The Other Way
          </h4>
          <p className="text-sm tracking-widest text-muted-foreground mb-6">#TheOtherWay</p>
            </>
          )}
          <div className="w-24 h-px bg-foreground mx-auto" />
        </div>

        {REVEAL_2027 && (
          <>
        {/* Theme description */}
        <div className="max-w-3xl mx-auto text-muted-foreground leading-relaxed space-y-5 mb-12">
          <p>
            This year’s show is about the fashion that went the other way: the experimental, the
            alternative and the resistant. These are the movements that have pushed fashion, art and
            culture somewhere new, and still do. We want to show how far their influence reaches, and
            to start a conversation about identity and how we express it.
          </p>
          <p>
            Performance sits at the centre of all of it. What do clothes mean, and how do they mean it?
            The starting point is Susan Sontag’s ‘Notes on Camp’ and her ideas about style and artifice.
          </p>
          <blockquote className="border-l border-foreground/40 pl-6 italic">
            ‘Camp sees everything in quotation marks. It’s not a lamp but a ‘lamp’: not a woman, but a
            ‘woman’. To perceive Camp in objects and persons is to understand Being-as-Playing-a-Role.
            It is the farthest extension, in sensibility, of the metaphor of life as theater.’
            <span className="block not-italic text-xs tracking-widest mt-3">— Susan Sontag, Notes on Camp</span>
          </blockquote>
        </div>

        {/* Walks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-14">
          {walks.map((walk) => (
            <div
              key={walk.name}
              className="bg-card/50 p-5 rounded-lg border border-border/20 hover:border-border/40 transition-all duration-300"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{walk.number}</p>
              <h5 className="text-xl font-light tracking-wide mb-3">{walk.name}</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">{walk.description}</p>
            </div>
          ))}
        </div>

          </>
        )}

        {/* Date / venue + Instagram */}
        <div className="text-center">
          <p className="text-sm md:text-base text-muted-foreground mb-8">
            {REVEAL_2027
              ? 'Date and venue to be announced.'
              : 'Date, venue and theme coming soon.'}
          </p>
          <Button
            asChild
            size="sm"
            className="px-6 py-4 md:px-12 md:py-6 text-sm md:text-lg tracking-wide bg-gradient-to-r from-purple-700 to-purple-900 hover:from-pink-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 max-w-xs md:max-w-none"
          >
            <a
              href="https://instagram.com/cucfs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow for Show Updates
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

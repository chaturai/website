import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const CONTACT_EMAIL = 'hello@chatur.ai'
const CORTEX_URL = '/cortex'

function Wordmark({ className }: { className?: string }) {
  return (
    <span className={className}>
      chatur.<span className='text-cyan-400'>ai</span>
    </span>
  )
}

function DotGrid() {
  return (
    <div
      className='pointer-events-none absolute inset-0 opacity-[0.15]'
      style={{
        backgroundImage:
          'radial-gradient(rgb(148 163 184) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage:
          'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        WebkitMaskImage:
          'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }}
      aria-hidden
    />
  )
}

export default function Home() {
  return (
    <div className='dark bg-background text-foreground antialiased'>
      <div className='min-h-screen flex flex-col'>
        <nav className='mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6'>
          <Link
            href='/'
            className='text-lg font-bold tracking-tight hover:opacity-80 transition-opacity'
          >
            <Wordmark />
          </Link>
          <div className='flex items-center gap-3'>
            <Button asChild variant='ghost' size='sm' className='gap-1.5'>
              <Link href='/cortex'>
                Cortex
                <ArrowUpRight className='size-3.5' />
              </Link>
            </Button>
          </div>
        </nav>

        <main className='relative flex-1 overflow-hidden'>
          <DotGrid />
          <section className='relative mx-auto flex max-w-6xl flex-col justify-center px-6 py-24 md:py-32'>
            <h1 className='max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl'>
              Exploring{' '}
              <span className='bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent'>
                alternate paths
              </span>{' '}
              to artificial intelligence.
            </h1>
            <p className='mt-8 max-w-2xl text-xl text-muted-foreground md:text-2xl'>
              <Wordmark className='font-semibold text-foreground' /> is a solo
              project. One person, one workshop, a small set of bets on how
              machine intelligence might look different.
            </p>
            <p className='mt-5 max-w-2xl text-base text-muted-foreground/80'>
              Most of the field is converging on a narrow set of recipes. This
              project takes the opposite bet — that there are useful corners
              left in symbolic reasoning, structured memory, ontologies, and
              the human-shaped infrastructure around language models. The work
              here is the result of poking at those corners and shipping what
              survives.
            </p>

            <Separator className='my-12 max-w-md opacity-50' />

            <div className='max-w-2xl'>
              <p className='mb-3 font-mono text-xs uppercase tracking-wider text-cyan-400/80'>
                Consulting & enquiries
              </p>
              <p className='text-muted-foreground'>
                Open to consulting work, collaborations, and research
                conversations around knowledge graphs, agentic systems, and
                applied AI. Reach out directly — every email gets a reply.
              </p>
              <div className='mt-7 flex flex-wrap items-center gap-3'>
                <Button asChild size='lg' className='gap-2'>
                  <a href={`mailto:${CONTACT_EMAIL}`}>
                    <Mail className='size-4' />
                    {CONTACT_EMAIL}
                  </a>
                </Button>
                <Button asChild size='lg' variant='outline' className='gap-2'>
                  <Link href={CORTEX_URL}>
                    See what&apos;s shipping
                    <ArrowUpRight className='size-4' />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className='border-t border-border/60'>
          <div className='mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center'>
            <div>
              © {new Date().getFullYear()}{' '}
              <Wordmark className='font-semibold' /> · Built in the open.
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className='inline-flex items-center gap-2 hover:text-foreground transition-colors'
            >
              <Mail className='size-4' />
              {CONTACT_EMAIL}
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

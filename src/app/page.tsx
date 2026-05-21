import Link from 'next/link'
import { ArrowUpRight, Mail, Zap } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
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

          {/* Hero */}
          <section className='relative mx-auto flex max-w-6xl flex-col justify-center px-6 py-24 md:py-32'>
            <div className='max-w-4xl'>
              <Badge
                variant='outline'
                className='mb-6 border-cyan-400/40 bg-cyan-400/5 font-mono text-[0.7rem] tracking-wide text-cyan-300 uppercase'
              >
                The infrastructure layer LLMs need
              </Badge>
              <h1 className='text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl'>
                Semantic memory and{' '}
                <span className='bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent'>
                  structured reasoning
                </span>
                {' '}for AI agents.
              </h1>
              <p className='mt-8 max-w-2xl text-xl text-muted-foreground md:text-2xl'>
                <Wordmark className='font-semibold text-foreground' /> builds infrastructure for AI systems that think differently. Starting with persistent memory, ontology authoring, and RDF-backed knowledge graphs.
              </p>
              <p className='mt-5 max-w-2xl text-base text-muted-foreground/80'>
                While the field converges on narrow recipes, we're rebuilding on first principles. Symbolic reasoning. Structured memory. Semantic web standards. The infrastructure that makes agents actually learn.
              </p>

              <div className='mt-10 flex flex-wrap items-center gap-3'>
                <Button asChild size='lg' className='gap-2 bg-cyan-600 hover:bg-cyan-700'>
                  <Link href={CORTEX_URL}>
                    See Cortex in action
                    <ArrowUpRight className='size-4' />
                  </Link>
                </Button>
                <Button asChild size='lg' variant='outline' className='gap-2'>
                  <a href={`mailto:${CONTACT_EMAIL}`}>
                    <Mail className='size-4' />
                    Get in touch
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <Separator className='mx-auto max-w-6xl opacity-50' />

          {/* What we're building */}
          <section className='mx-auto max-w-6xl px-6 py-24'>
            <div className='mb-8'>
              <p className='mb-3 font-mono text-xs uppercase tracking-wider text-cyan-400/80'>
                Products
              </p>
              <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
                What&apos;s shipping now
              </h2>
            </div>
            <div className='grid gap-6 md:grid-cols-1'>
              <Link href={CORTEX_URL}>
                <Card className='border-cyan-400/30 bg-card/50 hover:border-cyan-400/60 hover:bg-card/80 transition-all cursor-pointer'>
                  <div className='flex items-start justify-between px-6 pt-6'>
                    <div>
                      <div className='flex items-center gap-2 mb-3'>
                        <CardTitle className='text-xl'>Cortex</CardTitle>
                        <Badge
                          variant='outline'
                          className='bg-green-400/10 text-green-400 border-green-400/30'
                        >
                          Live
                        </Badge>
                      </div>
                      <CardDescription className='text-base text-muted-foreground'>
                        Persistent semantic memory for Claude. Built on Apache Jena TDB2, exposed via MCP. Runs entirely on your machine.
                      </CardDescription>
                      <div className='mt-4 flex flex-wrap gap-2'>
                        <Badge variant='secondary' className='text-[0.7rem]'>Kotlin</Badge>
                        <Badge variant='secondary' className='text-[0.7rem]'>Apache Jena</Badge>
                        <Badge variant='secondary' className='text-[0.7rem]'>SPARQL 1.1</Badge>
                        <Badge variant='secondary' className='text-[0.7rem]'>RDF-star</Badge>
                        <Badge variant='secondary' className='text-[0.7rem]'>GraalVM native</Badge>
                      </div>
                    </div>
                    <Zap className='size-8 text-cyan-400 flex-shrink-0' />
                  </div>
                </Card>
              </Link>
            </div>
          </section>

          <Separator className='mx-auto max-w-6xl opacity-50' />

          {/* Philosophy */}
          <section className='mx-auto max-w-6xl px-6 py-24'>
            <div className='mb-14 max-w-3xl'>
              <p className='mb-3 font-mono text-xs uppercase tracking-wider text-cyan-400/80'>
                Our thesis
              </p>
              <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
                Rethinking AI infrastructure
              </h2>
            </div>
            <div className='grid gap-10 md:grid-cols-2'>
              <div>
                <h3 className='mb-4 text-base font-semibold uppercase tracking-wider text-cyan-400'>Problem</h3>
                <p className='text-muted-foreground'>
                  LLMs forget. Every session starts from zero. No continuity. No learning. No long-term reasoning. A system that can't remember isn't intelligent—it's just stateless.
                </p>
              </div>
              <div>
                <h3 className='mb-4 text-base font-semibold uppercase tracking-wider text-cyan-400'>Our answer</h3>
                <p className='text-muted-foreground'>
                  You author schemas—OWL ontologies declaring what's worth remembering. Cortex extracts facts, stores them in an RDF graph, and injects relevant context on every prompt. Memory you can reason about.
                </p>
              </div>
              <div>
                <h3 className='mb-4 text-base font-semibold uppercase tracking-wider text-cyan-400'>Why it matters</h3>
                <p className='text-muted-foreground'>
                  Symbolic reasoning isn't dead—it's misunderstood. Combine it with LLMs and you get agents that actually learn. Systems that carry knowledge forward. Continuity.
                </p>
              </div>
              <div>
                <h3 className='mb-4 text-base font-semibold uppercase tracking-wider text-cyan-400'>Principles</h3>
                <ul className='space-y-2 text-muted-foreground'>
                  <li>• <strong>Local first</strong> — your data stays on your machine</li>
                  <li>• <strong>Explicit</strong> — only facts you declare, never hallucinations</li>
                  <li>• <strong>Standards</strong> — W3C RDF, SPARQL, SHACL, OWL</li>
                  <li>• <strong>Queryable</strong> — reason over your memory programmatically</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className='mx-auto max-w-6xl opacity-50' />

          {/* Contact */}
          <section className='mx-auto max-w-6xl px-6 py-24'>
            <div className='max-w-3xl'>
              <p className='mb-3 font-mono text-xs uppercase tracking-wider text-cyan-400/80'>
                Partnership & collaboration
              </p>
              <h2 className='mb-6 text-3xl font-bold tracking-tight md:text-4xl'>
                Work with us
              </h2>
              <p className='text-muted-foreground'>
                We're building something new. If you're working on knowledge graphs, agentic systems, semantic infrastructure, or applied AI—let's talk. Consulting, collaborations, research partnerships. Every inquiry gets a reply.
              </p>
              <div className='mt-8 flex flex-wrap items-center gap-3'>
                <Button asChild size='lg' className='gap-2'>
                  <a href={`mailto:${CONTACT_EMAIL}`}>
                    <Mail className='size-4' />
                    {CONTACT_EMAIL}
                  </a>
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

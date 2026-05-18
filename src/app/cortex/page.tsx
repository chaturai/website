import Link from 'next/link'
import {
  Brain,
  Database,
  Layers,
  Moon,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
} from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      aria-hidden
    >
      <path d='M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.74.8 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z' />
    </svg>
  )
}

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const GITHUB_URL = 'https://github.com/chaturai/cortex-plugin'

const FEATURES = [
  {
    icon: Brain,
    title: 'Persistent memory across sessions',
    body: 'Facts you discuss stay queryable forever. Cortex injects what matters into every new prompt — silently, behind the scenes.',
  },
  {
    icon: Sparkles,
    title: 'Interactive ontology authoring',
    body: 'The /define-concept skill walks you through writing an OWL ontology in plain conversation. No semantic-web background required.',
  },
  {
    icon: Workflow,
    title: 'Automatic fact extraction',
    body: 'A per-turn glean and an end-of-session ingest pull explicit facts out of conversations and write them to the graph with provenance.',
  },
  {
    icon: ShieldCheck,
    title: 'SHACL validation & repair',
    body: 'Add shapes for cardinality, datatypes, regex patterns, and value lists. A repair agent diagnoses every failure before it corrupts the graph.',
  },
  {
    icon: Search,
    title: 'SPARQL-powered queries',
    body: 'The /query-cortex skill discovers ontologies, surfaces templates, and helps you compose queries against the full knowledge graph.',
  },
  {
    icon: Database,
    title: 'Zero-config local infrastructure',
    body: 'Apache Fuseki and cortex-server come bundled in a Docker Compose stack. Your data lives in ~/.cortex — local, portable, yours.',
  },
] as const

const COMING_SOON = [
  {
    icon: Layers,
    title: 'Interactive Memory UI',
    body: 'A web console for browsing your knowledge graph, running visual SPARQL queries, and inspecting ontologies — with admin tooling for managing concepts, instances, and validation rules in the browser.',
  },
  {
    icon: Moon,
    title: 'Learn while you sleep',
    body: 'Background memory defragmentation reconciles duplicate entities, merges aliases, and tightens the graph between sessions — so the longer you use cortex, the sharper its recall gets.',
  },
  {
    icon: Wrench,
    title: 'Tiered memory & planned obsolescence',
    body: 'Hot, warm, and cold tiers with explicit retention policies. Facts age out gracefully when they stop being relevant, keeping the working set fast and the long-term archive intact.',
  },
  {
    icon: GithubIcon,
    title: 'Fully open source',
    body: 'The plugin is already MIT-licensed. cortex-server, the upcoming UI, and the rest of the stack will follow — all of cortex will be open source once it stabilizes.',
  },
] as const

function Wordmark({ className }: { className?: string }) {
  return (
    <span className={className}>
      chatur.<span className='text-cyan-400'>ai</span>
    </span>
  )
}

function KnowledgeGraph() {
  return (
    <svg
      viewBox='0 0 400 400'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='absolute inset-0 h-full w-full opacity-[0.18]'
      aria-hidden
    >
      <defs>
        <radialGradient id='node-glow' cx='50%' cy='50%' r='50%'>
          <stop offset='0%' stopColor='rgb(34 211 238)' stopOpacity='0.9' />
          <stop offset='100%' stopColor='rgb(34 211 238)' stopOpacity='0' />
        </radialGradient>
      </defs>
      <g stroke='rgb(34 211 238)' strokeWidth='0.6' strokeOpacity='0.6'>
        <line x1='200' y1='200' x2='80' y2='90' />
        <line x1='200' y1='200' x2='340' y2='110' />
        <line x1='200' y1='200' x2='60' y2='300' />
        <line x1='200' y1='200' x2='330' y2='320' />
        <line x1='200' y1='200' x2='200' y2='40' />
        <line x1='80' y1='90' x2='200' y2='40' />
        <line x1='340' y1='110' x2='200' y2='40' />
        <line x1='60' y1='300' x2='330' y2='320' />
        <line x1='340' y1='110' x2='330' y2='320' />
        <line x1='80' y1='90' x2='60' y2='300' />
      </g>
      {[
        [200, 200, 7],
        [80, 90, 4],
        [340, 110, 4],
        [60, 300, 4],
        [330, 320, 4],
        [200, 40, 4],
      ].map(([cx, cy, r], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r * 4} fill='url(#node-glow)' />
          <circle cx={cx} cy={cy} r={r} fill='rgb(34 211 238)' />
        </g>
      ))}
    </svg>
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

export default function CortexPage() {
  return (
    <div className='min-h-screen bg-background text-foreground antialiased'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-6 py-6'>
        <Link
          href='/'
          className='text-lg font-bold tracking-tight hover:opacity-80 transition-opacity'
        >
          <Wordmark />
        </Link>
        <div className='flex items-center gap-3'>
          <Button asChild variant='ghost' size='sm'>
            <a
              href={GITHUB_URL}
              target='_blank'
              rel='noreferrer'
              className='gap-2'
            >
              <GithubIcon className='size-4' />
              GitHub
            </a>
          </Button>
        </div>
      </nav>

      <section className='relative overflow-hidden'>
        <DotGrid />
        <div className='mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-[1.3fr_1fr] md:pt-24'>
          <div className='relative z-10'>
            <Badge
              variant='outline'
              className='mb-6 border-cyan-400/40 bg-cyan-400/5 font-mono text-[0.7rem] tracking-wide text-cyan-300 uppercase'
            >
              Claude Code plugin · v0.0.1
            </Badge>
            <h1 className='text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl'>
              Introducing{' '}
              <span className='bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent'>
                Cortex
              </span>
            </h1>
            <p className='mt-6 max-w-xl text-xl text-muted-foreground md:text-2xl'>
              Persistent memory for Claude, built on a knowledge graph you
              author.
            </p>
            <p className='mt-5 max-w-xl text-base text-muted-foreground/80'>
              Claude forgets everything between sessions. Cortex fixes that —
              you declare the kinds of things worth remembering, and it extracts
              the facts, persists them in a queryable graph, and surfaces what
              matters on every new prompt.
            </p>
            <div className='mt-9 flex flex-wrap items-center gap-3'>
              <Button asChild size='lg' className='gap-2'>
                <a href='#install'>Install the plugin</a>
              </Button>
              <Button asChild size='lg' variant='outline' className='gap-2'>
                <a href={GITHUB_URL} target='_blank' rel='noreferrer'>
                  Read the docs
                </a>
              </Button>
            </div>
          </div>
          <div className='relative aspect-square w-full max-w-[420px] justify-self-center md:justify-self-end'>
            <KnowledgeGraph />
          </div>
        </div>
      </section>

      <Separator className='mx-auto max-w-6xl opacity-50' />

      <section className='mx-auto max-w-6xl px-6 py-24'>
        <div className='mb-14 max-w-3xl'>
          <p className='mb-3 font-mono text-xs uppercase tracking-wider text-cyan-400/80'>
            Philosophy
          </p>
          <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
            A memory you can reason about
          </h2>
        </div>
        <div className='grid gap-10 md:grid-cols-3'>
          <div>
            <h3 className='mb-3 text-lg font-semibold'>The problem</h3>
            <p className='text-muted-foreground'>
              Every Claude session starts from zero. You re-explain your
              domain, your teammates, your codebase. Insights surface, then
              vanish the moment the window closes — no recall, no continuity,
              no compounding.
            </p>
          </div>
          <div>
            <h3 className='mb-3 text-lg font-semibold'>The approach</h3>
            <p className='text-muted-foreground'>
              You author OWL ontologies declaring{' '}
              <em>what kinds of things</em> deserve memory. Cortex watches your
              conversations, extracts matching facts, stores them in an RDF
              graph, and silently injects relevant context on every new prompt.
            </p>
          </div>
          <div>
            <h3 className='mb-3 text-lg font-semibold'>The principles</h3>
            <p className='text-muted-foreground'>
              Only explicit facts — never inferences. User-authored schemas —
              you control the vocabulary. Idempotent storage — re-ingesting is
              a no-op. Local-first — your data lives in{' '}
              <code className='font-mono text-foreground/80'>~/.cortex</code>.
            </p>
          </div>
        </div>
      </section>

      <Separator className='mx-auto max-w-6xl opacity-50' />

      <section className='mx-auto max-w-6xl px-6 py-24'>
        <div className='mb-14 max-w-3xl'>
          <p className='mb-3 font-mono text-xs uppercase tracking-wider text-cyan-400/80'>
            What&apos;s in the box
          </p>
          <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
            Six pieces, working in concert
          </h2>
        </div>
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <Card
              key={title}
              className='border-border/60 bg-card/40 transition-colors hover:border-cyan-400/40 hover:bg-card/60'
            >
              <CardHeader>
                <div className='mb-3 inline-flex size-9 items-center justify-center rounded-md border border-cyan-400/30 bg-cyan-400/10 text-cyan-300'>
                  <Icon className='size-4' />
                </div>
                <CardTitle className='text-base'>{title}</CardTitle>
                <CardDescription className='leading-relaxed'>
                  {body}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className='mx-auto max-w-6xl opacity-50' />

      <section className='mx-auto max-w-6xl px-6 py-24'>
        <div className='mb-14 max-w-3xl'>
          <p className='mb-3 font-mono text-xs uppercase tracking-wider text-cyan-400/80'>
            Coming soon
          </p>
          <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
            On the roadmap
          </h2>
          <p className='mt-4 text-muted-foreground'>
            Cortex is early. Here&apos;s what we&apos;re building next — and
            what you can expect as the project matures.
          </p>
        </div>
        <div className='grid gap-5 md:grid-cols-2'>
          {COMING_SOON.map(({ icon: Icon, title, body }) => (
            <Card
              key={title}
              className='border-dashed border-border/50 bg-muted/20'
            >
              <CardHeader>
                <div className='mb-3 flex items-center gap-3'>
                  <div className='inline-flex size-9 items-center justify-center rounded-md border border-border/70 bg-background/40 text-muted-foreground'>
                    <Icon className='size-4' />
                  </div>
                  <Badge
                    variant='outline'
                    className='border-cyan-400/30 font-mono text-[0.65rem] tracking-wider text-cyan-300/90 uppercase'
                  >
                    Coming soon
                  </Badge>
                </div>
                <CardTitle className='text-base'>{title}</CardTitle>
                <CardDescription className='leading-relaxed'>
                  {body}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className='mx-auto max-w-6xl opacity-50' />

      <section id='install' className='mx-auto max-w-6xl px-6 py-24'>
        <div className='mb-10 max-w-3xl'>
          <p className='mb-3 font-mono text-xs uppercase tracking-wider text-cyan-400/80'>
            Get started
          </p>
          <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
            Two commands. That&apos;s it.
          </h2>
          <p className='mt-4 text-muted-foreground'>
            Requires Claude Code and Docker. The plugin will start the local
            Fuseki + cortex-server stack on first launch.
          </p>
        </div>
        <pre className='overflow-x-auto rounded-lg border border-border/60 bg-muted/30 p-6 font-mono text-sm leading-relaxed text-foreground/90'>
          <span className='text-muted-foreground'>
            # add the chatur.ai plugin marketplace
          </span>
          {'\n'}claude plugin marketplace add chaturai/cortex-plugin
          {'\n'}
          {'\n'}
          <span className='text-muted-foreground'># install cortex</span>
          {'\n'}claude plugin install cortex@chaturai-cortex
        </pre>
      </section>

      <footer className='border-t border-border/60'>
        <div className='mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center'>
          <div>
            © {new Date().getFullYear()} <Wordmark className='font-semibold' />{' '}
            · Cortex is MIT-licensed.
          </div>
          <a
            href={GITHUB_URL}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-2 hover:text-foreground transition-colors'
          >
            <GithubIcon className='size-4' />
            github.com/chaturai/cortex-plugin
          </a>
        </div>
      </footer>
    </div>
  )
}

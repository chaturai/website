import Link from 'next/link'
import {
  Code,
  Database,
  GitBranch,
  Layers,
  Zap,
  Moon,
  Network,
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

const GITHUB_URL = 'https://github.com/chaturai/cortex'

const MCP_TOOLS = [
  {
    name: 'createNamedGraph',
    type: 'tool',
    description: 'Creates a new named graph in the dataset.',
    params: 'graphIri: String',
  },
  {
    name: 'loadTurtle',
    type: 'tool',
    description: 'Parses and loads Turtle RDF data. Every triple gets per-triple RDF-star provenance tracking.',
    params: 'graphIri: String, turtleData: String',
  },
  {
    name: 'query',
    type: 'tool',
    description: 'Executes SPARQL 1.1 queries (SELECT, CONSTRUCT, ASK, UPDATE).',
    params: 'sparqlQuery: String, graphIri?: String',
  },
  {
    name: 'validateTurtle',
    type: 'tool',
    description: 'Validates Turtle syntax and well-formedness without writing.',
    params: 'turtleData: String',
  },
  {
    name: 'validateInstances',
    type: 'tool',
    description: 'Runs SHACL shape validation against instances in a graph.',
    params: 'graphIri: String, shapesGraphIri?: String',
  },
  {
    name: 'cortex://graphs',
    type: 'resource',
    description: 'Read-only JSON catalog of all named graphs, metadata, and triple counts.',
    params: 'none',
  },
] as const

const TECH_FEATURES = [
  {
    icon: Network,
    title: 'RDF-star per-triple provenance',
    body: 'Every triple written to the dataset gets &lt;&lt; s p o &gt;&gt; prov:wasGeneratedBy <activity>. Know the source, timestamp, and derivation of every fact.',
  },
  {
    icon: Code,
    title: 'SPARQL 1.1 & RDF inference',
    body: 'Execute complex SELECT, CONSTRUCT, and UPDATE queries. Forward-chaining rules with Jena GenericRuleReasoner for derived graphs.',
  },
  {
    icon: ShieldCheck,
    title: 'SHACL shape validation',
    body: 'Define cardinality constraints, datatypes, regex patterns, value lists. A repair agent diagnoses and suggests fixes before corrupting the graph.',
  },
  {
    icon: Zap,
    title: 'GraalVM native binary',
    body: 'Instant startup, 10x lower memory footprint, zero runtime dependencies. One cortex binary serves any TDB2 dataset directory.',
  },
  {
    icon: GitBranch,
    title: 'Transaction-safe with metrics',
    body: 'Every read/write wrapped in Txn.calculateRead/executeWrite. Prometheus `/actuator/prometheus` and triples-over-time dashboard.',
  },
  {
    icon: Database,
    title: 'Local-first TDB2 persistence',
    body: 'Apache Jena TDB2 dataset stored at ~/cortex or any configured path. Automatic compaction and backup jobs via Quartz.',
  },
] as const

const COMING_SOON = [
  {
    icon: Layers,
    title: 'Interactive Memory UI',
    body: 'React web console for browsing graphs, running visual SPARQL queries, inspecting ontologies, and managing concepts in the browser.',
  },
  {
    icon: Moon,
    title: 'Learn while you sleep',
    body: 'Background memory defragmentation reconciles duplicate entities, merges aliases, tightens the graph between sessions.',
  },
  {
    icon: Wrench,
    title: 'Tiered memory & planned obsolescence',
    body: 'Hot, warm, and cold tiers with retention policies. Facts age gracefully when they become irrelevant.',
  },
  {
    icon: GithubIcon,
    title: 'Fully open source',
    body: 'cortex-server and all infrastructure will be open source once stabilized. Plugin is already MIT-licensed.',
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
              Claude Code plugin · v0.1.0
            </Badge>
            <h1 className='text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl'>
              <span className='bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent'>
                Cortex
              </span>
            </h1>
            <p className='mt-6 max-w-xl text-xl text-muted-foreground md:text-2xl'>
              Persistent semantic memory for Claude. Built on W3C standards. Runs on your machine.
            </p>
            <p className='mt-5 max-w-xl text-base text-muted-foreground/80'>
              Apache Jena TDB2 triplestore with SPARQL 1.1, SHACL validation, RDF-star provenance, and forward inference. Exposed via MCP. Compiled to a GraalVM native binary.
            </p>
            <div className='mt-8 flex flex-wrap gap-2'>
              <Badge variant='outline' className='bg-cyan-400/10 text-cyan-300 border-cyan-400/30 font-mono text-xs'>Kotlin</Badge>
              <Badge variant='outline' className='bg-cyan-400/10 text-cyan-300 border-cyan-400/30 font-mono text-xs'>JDK 21</Badge>
              <Badge variant='outline' className='bg-cyan-400/10 text-cyan-300 border-cyan-400/30 font-mono text-xs'>Apache Jena 5</Badge>
              <Badge variant='outline' className='bg-cyan-400/10 text-cyan-300 border-cyan-400/30 font-mono text-xs'>GraalVM Native</Badge>
              <Badge variant='outline' className='bg-cyan-400/10 text-cyan-300 border-cyan-400/30 font-mono text-xs'>Spring Boot 3.5</Badge>
              <Badge variant='outline' className='bg-cyan-400/10 text-cyan-300 border-cyan-400/30 font-mono text-xs'>SPARQL 1.1</Badge>
              <Badge variant='outline' className='bg-cyan-400/10 text-cyan-300 border-cyan-400/30 font-mono text-xs'>SHACL</Badge>
              <Badge variant='outline' className='bg-cyan-400/10 text-cyan-300 border-cyan-400/30 font-mono text-xs'>RDF-star</Badge>
              <Badge variant='outline' className='bg-cyan-400/10 text-cyan-300 border-cyan-400/30 font-mono text-xs'>MCP</Badge>
            </div>
            <div className='mt-9 flex flex-wrap items-center gap-3'>
              <Button asChild size='lg' className='gap-2'>
                <a href='#install'>Install now</a>
              </Button>
              <Button asChild size='lg' variant='outline' className='gap-2'>
                <a href={GITHUB_URL} target='_blank' rel='noreferrer'>
                  View source
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

      {/* Architecture */}
      <section className='mx-auto max-w-6xl px-6 py-24'>
        <div className='mb-14 max-w-3xl'>
          <p className='mb-3 font-mono text-xs uppercase tracking-wider text-cyan-400/80'>
            Architecture
          </p>
          <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
            Three interfaces, one knowledge graph
          </h2>
        </div>
        <div className='grid gap-8 md:grid-cols-3'>
          <Card className='border-border/60 bg-card/40'>
            <CardHeader>
              <Database className='mb-3 size-6 text-cyan-400' />
              <CardTitle className='text-base'>TDB2 Persistence</CardTitle>
              <CardDescription className='leading-relaxed'>
                Apache Jena TDB2 dataset. Configurable location. Transaction-safe reads/writes. Automatic compaction and backup.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className='border-border/60 bg-card/40'>
            <CardHeader>
              <Network className='mb-3 size-6 text-cyan-400' />
              <CardTitle className='text-base'>MCP Surface</CardTitle>
              <CardDescription className='leading-relaxed'>
                5 tools + 1 resource. SSE + WebSocket transport. Spring AI MCP server. Integrated with Claude Code.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className='border-border/60 bg-card/40'>
            <CardHeader>
              <Code className='mb-3 size-6 text-cyan-400' />
              <CardTitle className='text-base'>Web UI</CardTitle>
              <CardDescription className='leading-relaxed'>
                Thymeleaf server pages. React dashboard. D3 triples-over-time chart. Full graph admin and search.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <Separator className='mx-auto max-w-6xl opacity-50' />

      {/* MCP Tools */}
      <section className='mx-auto max-w-6xl px-6 py-24'>
        <div className='mb-14 max-w-3xl'>
          <p className='mb-3 font-mono text-xs uppercase tracking-wider text-cyan-400/80'>
            MCP Surface
          </p>
          <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
            5 tools + 1 resource
          </h2>
          <p className='mt-4 text-muted-foreground'>
            The complete MCP surface for building and querying semantic memory.
          </p>
        </div>
        <div className='grid gap-4 md:grid-cols-2'>
          {MCP_TOOLS.map(({ name, type, description, params }) => (
            <Card key={name} className='border-cyan-400/30 bg-cyan-400/5'>
              <CardHeader>
                <div className='flex items-center gap-3 mb-3'>
                  <code className='px-2 py-1 rounded bg-background text-cyan-300 font-mono text-sm'>
                    {name}
                  </code>
                  <Badge
                    variant='outline'
                    className='text-[0.7rem] font-mono'
                  >
                    {type}
                  </Badge>
                </div>
                <CardDescription className='leading-relaxed'>
                  {description}
                </CardDescription>
                {params !== 'none' && (
                  <div className='mt-3 pt-3 border-t border-cyan-400/20'>
                    <p className='text-xs font-mono text-cyan-400/60'>{params}</p>
                  </div>
                )}
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className='mx-auto max-w-6xl opacity-50' />

      {/* Technical features */}
      <section className='mx-auto max-w-6xl px-6 py-24'>
        <div className='mb-14 max-w-3xl'>
          <p className='mb-3 font-mono text-xs uppercase tracking-wider text-cyan-400/80'>
            Technical depth
          </p>
          <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
            Built for production reasoning
          </h2>
        </div>
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {TECH_FEATURES.map(({ icon: Icon, title, body }) => (
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

      {/* Claude skills */}
      <section className='mx-auto max-w-6xl px-6 py-24'>
        <div className='mb-14 max-w-3xl'>
          <p className='mb-3 font-mono text-xs uppercase tracking-wider text-cyan-400/80'>
            Claude skills
          </p>
          <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
            Four slash commands
          </h2>
          <p className='mt-4 text-muted-foreground'>
            Build and query your knowledge graph through natural conversation.
          </p>
        </div>
        <div className='grid gap-6 md:grid-cols-2'>
          <Card className='border-border/60 bg-card/40'>
            <CardHeader>
              <div className='mb-3 inline-block px-3 py-1.5 rounded bg-cyan-400/10 border border-cyan-400/30 font-mono text-sm text-cyan-300'>/define-concept</div>
              <CardTitle className='text-base'>Define Concept</CardTitle>
              <CardDescription className='leading-relaxed'>
                Author OWL ontologies in plain conversation. Declare classes, properties, cardinality, and validation rules.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className='border-border/60 bg-card/40'>
            <CardHeader>
              <div className='mb-3 inline-block px-3 py-1.5 rounded bg-cyan-400/10 border border-cyan-400/30 font-mono text-sm text-cyan-300'>/refine-concept</div>
              <CardTitle className='text-base'>Refine Concept</CardTitle>
              <CardDescription className='leading-relaxed'>
                Evolve your schema. Add or update SHACL shapes and constraints as your model matures.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className='border-border/60 bg-card/40'>
            <CardHeader>
              <div className='mb-3 inline-block px-3 py-1.5 rounded bg-cyan-400/10 border border-cyan-400/30 font-mono text-sm text-cyan-300'>/add-instances</div>
              <CardTitle className='text-base'>Add Instances</CardTitle>
              <CardDescription className='leading-relaxed'>
                Populate the graph. Load data from prose, CSV, JSON, or natural language descriptions.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className='border-border/60 bg-card/40'>
            <CardHeader>
              <div className='mb-3 inline-block px-3 py-1.5 rounded bg-cyan-400/10 border border-cyan-400/30 font-mono text-sm text-cyan-300'>/query-cortex</div>
              <CardTitle className='text-base'>Query Cortex</CardTitle>
              <CardDescription className='leading-relaxed'>
                Build and execute SPARQL queries. Discover ontologies, surface templates, reason over your memory.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <Separator className='mx-auto max-w-6xl opacity-50' />

      {/* Philosophy */}
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
              Every Claude session starts from zero. You re-explain your domain, your teammates, your codebase. Insights surface, then vanish the moment the window closes — no recall, no continuity, no compounding.
            </p>
          </div>
          <div>
            <h3 className='mb-3 text-lg font-semibold'>The approach</h3>
            <p className='text-muted-foreground'>
              You author OWL ontologies declaring{' '}
              <em>what kinds of things</em> deserve memory. Cortex watches your conversations, extracts matching facts, stores them in an RDF graph, and silently injects relevant context on every new prompt.
            </p>
          </div>
          <div>
            <h3 className='mb-3 text-lg font-semibold'>The principles</h3>
            <p className='text-muted-foreground'>
              Only explicit facts — never inferences. User-authored schemas — you control the vocabulary. Idempotent storage — re-ingesting is a no-op. Local-first — your data lives in{' '}
              <code className='font-mono text-foreground/80'>~/.cortex</code>.
            </p>
          </div>
        </div>
      </section>

      <Separator className='mx-auto max-w-6xl opacity-50' />

      {/* Install */}
      <section id='install' className='mx-auto max-w-6xl px-6 py-24'>
        <div className='mb-10 max-w-3xl'>
          <p className='mb-3 font-mono text-xs uppercase tracking-wider text-cyan-400/80'>
            Get started
          </p>
          <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
            Two commands. That&apos;s it.
          </h2>
          <p className='mt-4 text-muted-foreground'>
            Requires Claude Code and Docker. The cortex-server will start on port 8080.
          </p>
        </div>
        <pre className='overflow-x-auto rounded-lg border border-border/60 bg-muted/30 p-6 font-mono text-sm leading-relaxed text-foreground/90'>
          <span className='text-muted-foreground'>
            # add the chatur.ai plugin marketplace
          </span>
          {'\n'}claude plugin marketplace add chaturai/cortex
          {'\n'}
          {'\n'}
          <span className='text-muted-foreground'># install cortex</span>
          {'\n'}claude plugin install cortex@chaturai
        </pre>
      </section>

      <Separator className='mx-auto max-w-6xl opacity-50' />

      {/* Roadmap */}
      <section className='mx-auto max-w-6xl px-6 py-24'>
        <div className='mb-14 max-w-3xl'>
          <p className='mb-3 font-mono text-xs uppercase tracking-wider text-cyan-400/80'>
            Coming soon
          </p>
          <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
            On the roadmap
          </h2>
          <p className='mt-4 text-muted-foreground'>
            Cortex is early. Here&apos;s what we&apos;re building next.
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
            github.com/chaturai/cortex
          </a>
        </div>
      </footer>
    </div>
  )
}

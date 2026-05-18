import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cortex — Persistent memory for Claude',
  description:
    'A Claude Code plugin that gives Claude persistent memory across sessions, built on user-authored OWL ontologies and an RDF knowledge graph.',
}

export default function CortexLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className='dark bg-background text-foreground'>{children}</div>
}

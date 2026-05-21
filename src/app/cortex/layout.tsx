import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cortex — Semantic memory for Claude | chatur.ai',
  description: 'Persistent semantic memory for Claude. Built on Apache Jena TDB2, SPARQL 1.1, SHACL validation, and RDF-star provenance. Compiled to a GraalVM native binary.',
}

export default function CortexLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className='dark bg-background text-foreground'>{children}</div>
}

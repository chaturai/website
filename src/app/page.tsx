import { Skeleton } from '@/components/ui/skeleton'

function Logo() {
  return (
    <h1 className='text-4xl font-extrabold'>
      chatur.<span className='text-cyan-500'>ai</span>
    </h1>
  )
}

export default function Home() {
  return (
    <main className='grid grid-cols-3 gap-8 min-h-screen w-screen px-12 py-12'>
      <section className='col-span-3 flex justify-between h-fit'>
        <Logo />
        <h2 className='text-xl font-bold'>WIP</h2>
      </section>
      <section className='col-span-3 p-8'>
        <Skeleton className='h-96' />
      </section>
      <section className='col-span-1 p-8'>
        <Skeleton className='h-96' />
      </section>
      <section className='col-span-1 p-8'>
        <Skeleton className='h-96' />
      </section>
      <section className='col-span-1 p-8'>
        <Skeleton className='h-96' />
      </section>
      <section className='col-span-2 p-8'>
        <Skeleton className='h-96' />
      </section>
      <section className='col-span-1 p-8'>
        <Skeleton className='h-96' />
      </section>
    </main>
  )
}

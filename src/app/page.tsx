import { User } from '@/components/User'
import Link from 'next/link'
import { Suspense } from 'react'
import Loading from './loading'
export default async function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link href='/app'>Dashboard</Link>
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>
    </div>
  )
}

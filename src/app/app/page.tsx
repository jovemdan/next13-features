import Link from 'next/link'
import { Repo } from '@/components/Repo'
import { Suspense } from 'react'
export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href='/'>Home</Link>

      <Suspense fallback={<p color='red'>Carregando Repositórios...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Repo />
      </Suspense>
    </div>
  )
}


import { ReactNode } from 'react'

export const metadata = {
  title: {
    default: 'Rocketseat',
    template: '%s | Rocketseat'
  }
}
export default function AppLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div>
      <h1>App</h1>
      {children}
    </div>
  )
}

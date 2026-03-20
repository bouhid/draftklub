import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-zinc-900">Dashboard</h1>
      <p className="text-zinc-500 mt-1">Bem-vindo, {user.email}</p>
    </div>
  )
}

'use client'
import BaseLayout from '@/layouts/BaseLayout'
import Link from 'next/link'
import type { User } from '@/app/page'
import { useEffect, useState } from 'react'
import { apiFetch } from '@/lib/api'

export default function MyPage() {
  const [user, setUser] = useState<User | null>(null)

  async function getUser() {
    const res = await apiFetch('/api/user')
    const user: User = await res.json()
    setUser(user)
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
    <BaseLayout>
      <h1>My Page</h1>
      <div>
        <h2>Name: {user?.name}</h2>
        <h2>Email: {user?.email}</h2>
        <Link href="/mypage/post-list">My Posts</Link>
      </div>
    </BaseLayout>
  )
}

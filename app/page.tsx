'use client'
import styles from './page.module.css'
import PublishBlog from '@/components/PublishBlog'
import BlogList from '@/components/BlogList'
import { useEffect, useState } from 'react'
import { apiFetch, clearToken } from '@/lib/api'
import { redirect } from 'next/navigation'

export interface User {
  id: number
  email: string
  name: string
  posts: Post[]
}
export interface Post {
  id: number
  title: string
  body: string
  published: boolean
  authorId: number
  author: User
}
export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  async function refreshPosts() {
    const res = await apiFetch('/api/posts').then((res) => res.json())
    const data: Post[] = await res.data
    setPosts(data)
  }
  useEffect(() => {
    refreshPosts()
  }, [])

  async function handleLogout() {
    const res = await apiFetch('/api/logout', {
      method: 'POST'
    })
    if (res.ok) {
      clearToken()
      redirect('/login')
    } else {
      alert('Logout failed')
    }
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button onClick={() => handleLogout()}>Logout</button>
        <h1 style={{ margin: '0 auto' }}>Welcome to HanaBlog</h1>
        <PublishBlog refreshPosts={refreshPosts} />
        <BlogList posts={posts} />
      </main>
    </div>
  )
}

'use client'
import styles from './page.module.css'
import PublishBlog from '@/components/PublishBlog'
import BlogList from '@/components/BlogList'
import { useEffect, useState } from 'react'
import { apiFetch, clearToken } from '@/lib/api'
import { redirect } from 'next/navigation'
import BlogDetail from '@/components/BlogDetail'

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
  const postId = '6'
  async function refreshPosts() {
    const res = await apiFetch('/api/posts').then((res) => res.json())
    const data: Post[] = await res.data
    setPosts(data)
  }
  useEffect(() => {
    refreshPosts()
  }, [])

  function handleLogout() {
    clearToken()
    redirect('/login')
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button onClick={() => handleLogout()}>Logout</button>
        <h1 style={{ margin: '0 auto' }}>Welcome to HanaBlog</h1>
        <PublishBlog refreshPosts={refreshPosts} />
        <BlogList posts={posts} />
        {/* <BlogDetail postId={postId} /> */}
      </main>
    </div>
  )
}

'use client'
import styles from './page.module.css'
import PublishBlog from '@/components/PublishBlog'
import BlogList from '@/components/BlogList'
import { useEffect, useState } from 'react'

export interface User {
  id: number
  email: string
  name: string
  posts: Post[]
}
export interface Post {
  id: number
  title: string
  content: string
  published: boolean
  authorId: number
  author: User
}
export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  async function refreshPosts() {
    const res = await fetch('http://localhost:8082/api/posts', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer 3|rcYaHBpbGMnM3yiP4LYN4nt1dAgVr0MFZoggjMSnfc7c56ca',
      },
    }).then(res => res.json())
    const data: Post[] = await res.data
    console.log('get data:', data)
    setPosts(data)
  }
  useEffect(() => {
    refreshPosts()
  }, [])
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={{ margin: '0 auto' }}>Welcome to HanaBlog</h1>
        <PublishBlog refreshPosts={refreshPosts} />
        <BlogList posts={posts} />
      </main>
    </div>
  )
}

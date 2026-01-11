'use client'
import styles from './page.module.css'
import PublishBlog from '@/components/PublishBlog'
import BlogList from '@/components/BlogList'
import { useEffect, useState } from 'react'
import { apiFetch } from '@/lib/api'
import BaseLayout from '@/layouts/BaseLayout'

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

  return (
    <BaseLayout>
      <PublishBlog refreshPosts={refreshPosts} />
      <BlogList posts={posts} />
    </BaseLayout>
  )
}

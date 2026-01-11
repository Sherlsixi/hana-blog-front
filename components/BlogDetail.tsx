'use client'
import { Post } from '@/app/page'
import { apiFetch } from '@/lib/api'
import { useEffect, useState } from 'react'

export default function BlogDetail({ postId }: { postId: string }) {
  console.log('postId:', typeof postId)
  const [post, setPost] = useState<Post | null>(null)

  async function getPost() {
    const result = await apiFetch(`/api/posts/${postId}`).then((res) => res.json())
    console.log('post:', result)
    setPost(result.data)
  }
  useEffect(() => {
    getPost()
  }, [])

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  )
}

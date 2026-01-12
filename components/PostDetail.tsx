'use client'
import { Post } from '@/app/page'
import { apiFetch } from '@/lib/api'
import { useEffect, useState } from 'react'

export default function PostDetail({ postId }: { postId: string }) {
  const [post, setPost] = useState<Post | null>(null)

  async function getPost() {
    const result = await apiFetch(`/api/posts/${postId}`).then((res) => res.json())
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

'use client'
import { useEffect, useState } from 'react'
import { Post, User } from '@/app/page'
import { apiFetch } from '@/lib/api'
export function UserPosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [userName, setUserName] = useState('')
  async function getUserPost() {
    const res = await apiFetch('/api/posts/myposts')
    const data: Post[] = await res.json().then((res) => res.data)
    console.log('posts:', data)
    setPosts(data)
  }
  useEffect(() => {
    getUserPost()
  }, [])
  return (
    <>
      <h1>{userName}のブログ一覧</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  )
}

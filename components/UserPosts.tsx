'use client'
import { useEffect, useState } from 'react'
import { Post, User } from '@/app/page'
export function UserPosts({ userId }: { userId: string }) {
  const [posts, setPosts] = useState<Post[]>([])
  const [userName, setUserName] = useState('')
  async function getUserPost() {
    const res = await fetch(`/api/user/${userId}`)
    const user: User = await res.json()
    console.log('userList:', user)
    const publishedPosts = user.posts.filter((post) => post.published)
    setPosts(publishedPosts)
    setUserName(user.name)
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
          <p>{post.content}</p>
        </div>
      ))}
    </>
  )
}

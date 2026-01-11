'use client'

import { apiFetch } from '@/lib/api'
import { useState } from 'react'

export default function PublishBlog({ refreshPosts }: { refreshPosts: () => void }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  async function handleSubmit() {
    console.log('title:', title)
    console.log('content:', content)
    if (title.trim() && content.trim()) {
      await apiFetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: content
        })
      })
      refreshPosts()
      setTitle('')
      setContent('')
    }
  }
  return (
    <>
      <label>
        title:
        <br />
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        content:
        <br />
        <textarea
          name="content"
          id="content"
          placeholder="投稿内容を入力..."
          style={{ width: '500px', height: '120px' }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </label>
      <button onClick={handleSubmit}>投稿</button>
    </>
  )
}

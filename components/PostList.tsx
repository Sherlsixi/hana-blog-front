import { Post } from '@/app/page'
import Link from 'next/link'

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <>
      <div>
        {posts.map((post) => (
          <div key={post?.id}>
            <Link href={`/profile/${post.author.id}`}>{post?.author.name}</Link>
            <Link href={`/posts/${post.id}`}>
              <h1>{post?.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

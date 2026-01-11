import { Post } from '@/app/page'
import Link from 'next/link'

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <>
      <div>
        {posts.map((post) => (
          <div key={post?.id}>
            <Link href={`/user/${post.authorId}`}>{post?.author.name}</Link>
            <Link href={`/posts/${post.id}`}>
              <h1>{post?.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

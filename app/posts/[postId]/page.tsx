import BlogDetail from '@/components/BlogDetail'

export default async function PostDetail({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params

  return (
    <div>
      <BlogDetail postId={postId} />
    </div>
  )
}

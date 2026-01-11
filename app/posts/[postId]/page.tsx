import BlogDetail from '@/components/BlogDetail'
import BaseLayout from '@/layouts/BaseLayout'

export default async function PostDetail({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params

  return (
    <BaseLayout>
      <BlogDetail postId={postId} />
    </BaseLayout>
  )
}

import PostDetail from '@/components/PostDetail'
import BaseLayout from '@/layouts/BaseLayout'

export default async function Post({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params

  return (
    <BaseLayout>
      <PostDetail postId={postId} />
    </BaseLayout>
  )
}

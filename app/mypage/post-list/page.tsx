import { MyPagePosts } from '@/components/MyPagePosts'
import BaseLayout from '@/layouts/BaseLayout'

export default async function MyPosts() {
  return (
    <BaseLayout>
      <MyPagePosts />
    </BaseLayout>
  )
}

import { UserPosts } from '@/components/UserPosts'
import BaseLayout from '@/layouts/BaseLayout'

export default async function MyPosts() {
  return (
    <BaseLayout>
      <UserPosts />
    </BaseLayout>
  )
}

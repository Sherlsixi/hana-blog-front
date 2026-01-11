import { UserPosts } from '@/components/UserPosts'

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <>
      <UserPosts userId={id} />
    </>
  )
}

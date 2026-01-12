export default async function Profile({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params
  return (
    <div>
      <h1>Profile</h1>
      <h2>User ID: {userId}</h2>
    </div>
  )
}

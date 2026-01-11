export default async function PostDetail({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params
  const post = await fetch(`http://localhost:8082/api/posts/${postId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer 3|rcYaHBpbGMnM3yiP4LYN4nt1dAgVr0MFZoggjMSnfc7c56ca',
    },
  }).then(res => res.json()).then(data => data.data)

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  )
}

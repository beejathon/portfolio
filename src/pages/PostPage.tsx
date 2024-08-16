import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import LikeButton from '../components/LikeButton'
import Comments from '../components/Comments'
import { uri } from '../routes/router'

export interface PostPageData {
  post: any
  likes: string[]
  comments: string[]
}

const PostPage = () => {
  const data = useLoaderData() as PostPageData

  useEffect(() => {
    console.log(data)
  })

  return (
    <div>
      <h1>Post Page</h1>
      <LikeButton {...data} />
      {data.comments.length ? <Comments {...data} /> : ''}
    </div>
  )
}

export const postLoader = async (id: string | undefined) => {
  const res1 = await fetch(`${uri}/posts/${id}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  })
  const post = await res1.json()
  const res2 = await fetch(`${uri}/posts/${id}/likes`, {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  })
  const likes = await res2.json()
  const res3 = await fetch(`${uri}/posts/${id}/comments`, {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  })
  const comments = await res3.json()
  return { post, likes, comments }
}

export default PostPage

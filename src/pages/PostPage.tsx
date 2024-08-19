import { useLoaderData } from 'react-router-dom'
import LikeButton from '../components/LikeButton'
import Comments from '../components/Comments'
import { uri } from '../routes/router'

export interface PostPageData {
  post: any
  likes: any[]
  comments: any[]
}

const PostPage = () => {
  const data = useLoaderData() as PostPageData

  return (
    <div className="md:px-30 flex flex-col items-center justify-center px-10 py-10 sm:px-20 lg:px-40 xl:px-72">
      <h1 className="my-10 text-center font-mono text-4xl font-bold uppercase text-eucalyptus-500">
        {data.post.title}
      </h1>
      <article
        dangerouslySetInnerHTML={{ __html: data.post.sanitizedHtml }}
        className="prose text-chatelle-200 prose-img:mx-auto prose-img:max-w-lg"
      />
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

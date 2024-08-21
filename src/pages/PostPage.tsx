import { ActionFunctionArgs, useLoaderData } from 'react-router-dom'
import LikeButton from '../components/LikeButton'
import Comments from '../components/Comments'
import { uri } from '../routes/router'
import { useFetcher } from 'react-router-dom'
import { useEffect } from 'react'

export interface PostPageData {
  post: any
  likes: any[]
  comments: any[]
}

const PostPage = () => {
  const data = useLoaderData() as PostPageData
  const fetcher = useFetcher({ key: 'like-post' })

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

export const postActions = async ({ request }: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData())
  let intent = data.intent
  let errors: any = {}

  if (intent === 'like') {
    try {
      const res = await fetch(`${uri}/posts/${data.post_id}/like`, {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${data.token}`,
        },
      })
      if (res.status === 200) {
        return { success: 'Post liked!' }
      } else if (res.status === 401) {
        return { error: 'You must be logged in to do that!' }
      } else {
        return { error: 'There was an error liking this post.' }
      }
    } catch (error) {
      return { error: 'There was an error liking this post.' }
    }
  }

  if (intent === 'unlike') {
    try {
      const payload = {
        like_id: data.like_id,
      }
      const res = await fetch(`${uri}/posts/${data.post_id}/unlike`, {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${data.token}`,
        },
      })
      if (res.status === 200) {
        return { success: 'Post unliked!' }
      } else if (res.status === 401) {
        return { error: 'You must be logged in to do that!' }
      } else {
        return { error: 'There was an error unliking this post.' }
      }
    } catch (error) {
      return { error: 'There was an error unliking this post.' }
    }
  }

  // form validation
  if (intent === 'comment') {
    if (typeof data.comment !== 'string' || data.comment.length < 3) {
      errors.comment = 'Comment must be at least 3 characters long.'
    }
    if (Object.keys(errors).length) {
      return { errors }
    }
    try {
      const payload = {
        comment: data.comment,
      }
      const res = await fetch(`${uri}/posts/${data.post_id}/comments`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${data.token}`,
        },
      })
      if (res.status === 200) {
        console.log('Comment added!')
        return { success: 'Comment added!' }
      } else {
        return { error: 'There was an error adding your comment.' }
      }
    } catch (error) {
      return { error: 'There was an error adding your comment.' }
    }
  }
}
export default PostPage

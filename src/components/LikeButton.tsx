import { useEffect, useState } from 'react'
import { PostPageData } from '../pages/PostPage'
import { useAuth } from '@/hooks/useAuthProvider'
import { useFetcher } from 'react-router-dom'

const LikeButton = ({ likes, post }: PostPageData) => {
  const [liked, setLiked] = useState(false)
  const [likeId, setLikeId] = useState('')
  const { user, token } = useAuth()
  const fetcher = useFetcher({ key: 'like-post' })

  useEffect(() => {
    setLiked(false)
    if (likes.length > 0 && user) {
      setLiked(false)
      likes.forEach((like) => {
        if (like.liker === user._id) {
          setLiked(true)
          setLikeId(like._id)
        }
      })
    }
  })

  return (
    <>
      {liked ? (
        <fetcher.Form method="post">
          <input type="hidden" name="like_id" value={liked ? likeId : ''} />
          <input type="hidden" name="post_id" value={post._id} />
          <input type="hidden" name="token" value={token ?? ''} />
          <button
            type="submit"
            name="intent"
            value="unlike"
            className="h-20 cursor-pointer text-2xl"
          >
            ❤️
          </button>
        </fetcher.Form>
      ) : (
        <fetcher.Form method="post">
          <input type="hidden" name="post_id" value={post._id} />
          <input type="hidden" name="token" value={token ?? ''} />
          <button
            type="submit"
            name="intent"
            value="like"
            className="h-20 transform cursor-pointer text-white transition duration-500 ease-in-out hover:scale-110"
          >
            <span className="text-xl">🤍</span>{' '}
            <span className="pl-2 text-xs">Like this post</span>
          </button>
        </fetcher.Form>
      )}
    </>
  )
}

export default LikeButton

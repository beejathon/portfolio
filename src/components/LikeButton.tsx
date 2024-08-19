import { useEffect, useState } from 'react'
import { PostPageData } from '../pages/PostPage'
import { useAuth } from '@/hooks/useAuthProvider'
import { uri } from '@/routes/router'

const LikeButton = ({ likes, post }: PostPageData) => {
  const [liked, setLiked] = useState(false)
  const [likeId, setLikeId] = useState<string | undefined>('')
  const { user } = useAuth()
  const { token } = useAuth()

  const handleLike = async () => {
    try {
      const res = await fetch(`${uri}/posts/${post._id}/like`, {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      })
      if (res.status === 200) {
        const data = await res.json()
        setLiked(true)
        setLikeId(data._id)
        console.log(data)
      } else if (res.status === 401) {
        console.log('You must be logged in to do that!')
      } else {
        console.log(res)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleUnlike = async () => {
    try {
      const payload = {
        like_id: likeId,
      }
      const res = await fetch(`${uri}/posts/${post._id}/like/${likeId}`, {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      })
      if (res.status === 200) {
        setLiked(false)
        setLikeId('')
      } else if (res.status === 401) {
        console.log('You must be logged in to do that!')
      } else {
        console.log(res)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log(likes)
    if (likes.length > 0 && user) {
      likes.forEach((like) => {
        if (like.liker === user.id) {
          setLiked(true)
          setLikeId(like._id)
        }
      })
    }
  })

  return (
    <>
      {liked ? (
        <div onClick={handleUnlike} className="h-20 cursor-pointer text-2xl">
          ❤️
        </div>
      ) : (
        <div
          onClick={handleLike}
          className="h-20 cursor-pointer text-2xl font-extrabold text-chatelle-50 hover:text-eucalyptus-400"
        >
          ♡
        </div>
      )}
    </>
  )
}

export default LikeButton

import { useEffect, useState } from 'react'
import { PostPageData } from '../pages/PostPage'

const LikeButton = ({ likes }: PostPageData) => {
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    console.log(likes)
  })

  return <button onClick={() => setLiked(!liked)}>{liked ? '❤️' : '♡'}</button>
}

export default LikeButton

import { useEffect } from 'react'
import { PostPageData } from '../pages/PostPage'

const Comments = ({ comments }: PostPageData) => {
  useEffect(() => {
    console.log(comments)
  })
  return (
    <div>
      <h2>Comments</h2>
    </div>
  )
}

export default Comments

import { useEffect } from 'react'
import { PostPageData } from '../pages/PostPage'

const Comments = ({ comments }: PostPageData) => {
  useEffect(() => {
    console.log(comments)
  })
  return (
    <div className="w-full">
      <h2 className="my-10 text-chatelle-100">Comments</h2>
      <ul className="flex flex-col gap-10 text-chatelle-50">
        {comments.map((comment: any) => (
          <li key={comment._id}>
            <div className="flex gap-2 text-sm text-chatelle-500">
              <span>{comment.date_formatted}</span>
              <span>{` by ${comment.commenter.userName}`}</span>
            </div>
            <div
              className="prose text-chatelle-50"
              dangerouslySetInnerHTML={{ __html: comment.comment }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Comments

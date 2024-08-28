import { useEffect, useRef } from 'react'
import { PostPageData } from '../pages/PostPage'
import { useFetcher } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuthProvider'
import Button from './ui/Button'

const Comments = ({ comments, post }: PostPageData) => {
  const fetcher = useFetcher({ key: 'comment-post' })
  const { token } = useAuth()
  const formRef = useRef<HTMLFormElement>(null)
  const isSubmitting = fetcher.state === 'submitting'

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current?.reset()
    }
  }, [isSubmitting])

  return (
    <div className="w-full">
      <fetcher.Form method="post" ref={formRef}>
        <textarea
          name="comment"
          className="h-40 w-full p-4 text-chatelle-900"
          placeholder="Add your comment here..."
        />
        <input type="hidden" name="post_id" value={post._id} />
        <input type="hidden" name="token" value={token ?? ''} />
        <Button type="submit" name="intent" value="comment" text="Submit" />
      </fetcher.Form>
      <h2 className="my-10 text-xl font-semibold text-eucalyptus-500">
        Comments
      </h2>
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

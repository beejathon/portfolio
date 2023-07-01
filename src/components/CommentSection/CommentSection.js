import React, { useEffect } from "react";
import { useComments } from "../../hooks/useComments";
import { Comment } from "../Comment/Comment"
import { CommentForm } from "../CommentForm/CommentForm"
import "./CommentSection.css"

export const CommentSection = ({ notify, postid }) => {
  const { comments, setPostId } = useComments();
    
  useEffect(() => {
    setPostId(postid)
  }, [])

  if (!comments) return 'Loading...'

  return (
    <>
      <div className="comments">
        <h2>comments</h2>
        { comments && comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <div key={comment._id}>
                <Comment key={comment._id} comment={comment} />
              </div>
            )
          })
        ) : (
          null
        )}
        <CommentForm notify={notify} postid={postid} />
      </div>
    </>
  )
}
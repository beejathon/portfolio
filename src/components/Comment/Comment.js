import React from "react";
import "./Comment.css"
export const Comment = ({comment}) => {
  return (
    <div className="comment-container">
      <div className="comment-header">
        <span>
          {comment.date_formatted} 
        </span>
        <span>
          {` by ${comment.commenter.userName}`}
        </span>
      </div>
      <div className="comment-body">
        <div className="comment-text" dangerouslySetInnerHTML={ {__html: comment.comment} } />
      </div>
    </div>
  )
}
import React from "react";
import "./PostCard.css"

const uri = 'https://blog-boyz.up.railway.app/';

export const PostCard = ({ post }) => {
  return (
    <>
      <div className="post-card">
        <div className="post-card-header">
          <img src={uri + post.image} alt=""></img>
        </div>
        <div className="post-card-body">
          <div className="post-title">
            {post.title}
          </div>
          <div className="post-subtitle">
            <span>
              {post.date_formatted}
            </span>
            <span>
              by {post.author.userName}
            </span>
          </div>
          <div className="post-preview">
            {post.content}
          </div>
        </div>
        <div className="post-card-footer">
          <span>
            {post.commentCount} {post.commentCount === 1 ? 'comment' : 'comments'}
          </span>
          <span>
            {post.likeCount} {post.likeCount === 1 ? 'like' : 'likes'}
          </span>
        </div>
      </div>
    </>
  )
}
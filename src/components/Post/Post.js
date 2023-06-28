import React, { useEffect, useRef, useState } from "react";
import { usePost } from "../../hooks/usePost";
import { useComments } from "../../hooks/useComments";
import { Comment } from "../Comment/Comment";
import { useParams } from "react-router-dom";
import { CommentForm } from "../CommentForm/CommentForm";
import likeBtn from "../../assets/like.png"
import likedBtn from "../../assets/liked.png"
import "./Post.css"
import { useAuthToken } from "../../hooks/useAuthToken";
import { useLikes } from "../../hooks/useLikes";
import { useAuthUser } from "../../hooks/useAuthUser";

export const Post = () => {
  const post = usePost(useParams());
  const comments = useComments(useParams());
  const likes = useLikes(useParams());
  const user = useAuthUser();
  const token = useAuthToken();
  const [liked, setLiked] = useState(false);  
  const likeId = useRef(null);
  
  const uri = 'https://blog-boyz.up.railway.app/api';
  const addLike = async () => {
    fetch(`${uri}/posts/${post._id}/like`, {
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${token}`
      }
    })     
    .then(res => res.json(res))
    .then(res => {
      likeId.current = res.like._id;
      setLiked((liked) => !liked);
      console.log(res);
    })
    .catch(err => console.log(err))
  }
  
  const removeLike = async () => {
    const data = {
      like_id : likeId.current
    }
    fetch(`${uri}/posts/${post._id}/unlike`, {
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${token}`
      }
    })     
    .then(res => res.json(res))
    .then(res => {
      setLiked((liked) => !liked);
      console.log(res);
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    likes?.forEach((like) => {
      if (like.liker === user._id) {
        likeId.current = like._id;
        setLiked(true);
      };
    })
  })

  if (!post) return 'Loading...'
  
  return (
    <>
      <div className="post">
        <div className="post-header">
          <div className="post-title">
            {post.title}
          </div>
          <div className="post-subtitle">
            <span>{post.date_formatted}</span>
            <span>{post.author.userName}</span>
          </div>
        </div>
        <div className="post-body">
          <div className="post-content" dangerouslySetInnerHTML={ {__html: post.sanitizedHtml} }></div>
        </div>
        <div className="post-footer">
          { liked ? (
            <div onClick={removeLike} className="like-btn">
              <img src={likedBtn} alt="unlike" />
            </div>
          ) : (
            <div onClick={addLike} className="like-btn">
              <img src={likeBtn} alt="like" />
            </div>
          )}
          <h2>comments</h2>
          { comments && comments.length > 0 ? (
            comments.map((comment) => {
              return (
                <>
                  <Comment key={comment._id} comment={comment} />
                </>
              )
            })
          ) : (
            null
          )}
          <CommentForm />
        </div>
      </div>
    </>
  )
}
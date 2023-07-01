import React, { useEffect } from "react";
import { usePost } from "../../hooks/usePost";
import { useParams } from "react-router-dom";
import likeBtn from "../../assets/like.png"
import likedBtn from "../../assets/liked.png"
import "./Post.css"
import { useAuthToken } from "../../hooks/useAuthToken";
import { useLikes } from "../../hooks/useLikes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CommentSection } from "../CommentSection/CommentSection";

export const Post = () => {
  const post = usePost(useParams());
  const { 
    liked, 
    setLiked, 
    likeId, 
    setLikeId,
    setPostId,
  } = useLikes();
  const token = useAuthToken();
  
  const notify = (message) => {
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    })
  };

  const uri = 'https://blog-boyz.up.railway.app/api';
  const addLike = async () => {
    try {
      const res = await fetch(`${uri}/posts/${post._id}/like`, {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Bearer ${token}`
        }
      })
      if (res.status === 200) {
        const data = await res.json();
        setLiked(true);
        setLikeId(data._id);
        console.log(data);
      } else {
        notify('You must be logged in to do that!');
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  const removeLike = async () => {
    try {
      const payload = {
        like_id : likeId
      }
      const res = await fetch(`${uri}/posts/${post._id}/unlike`, {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await res.json();
      setLiked(false);
      setLikeId(null);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (post) {
      setPostId(post._id)
    }
  }, [post])

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
          { post ? (<CommentSection notify={notify} postid={post._id} />) : ( null )}
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </>
  )
}
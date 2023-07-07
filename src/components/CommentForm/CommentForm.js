import React, { useState } from "react";
import "./CommentForm.css"
import { useComments } from "../../hooks/useComments";
import { useAuth } from "../../hooks/useAuthProvider";

export const CommentForm = ({ notify, postid }) => {
  const [text, setText] = useState('');
  const { user, token } = useAuth();
  const { setComments } = useComments();

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        comment: text
      }
      const uri = process.env.REACT_APP_API_URI;
      const res = await fetch(`${uri}/posts/${postid}/comments`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Bearer ${token}`
        }
      })
      if (res.status === 200) {
        const data = await res.json();
        resetForm(data.comment_created)
        console.log(data.comment_created)
      } else if (res.status === 401) {
        notify('You must be logged in to do that!');
      } else {
        notify('Something went wrong.')
      }
    } catch (err) {
      console.log(err)
    }
    setText('');
  }

  const resetForm = (comment) => {
    const userName = user ? user.userName : null;
    console.log(user)
    const temp = {
      commenter: { userName: userName },
      comment: comment.comment,
      date_formatted: comment.date_formatted,
      post: comment.post
    }
    setComments((prev) => {
      let newComments;
      if (prev.length > 0) {
        newComments = [
          ...prev,
          temp
        ]
      } else {
        newComments = [
          temp
        ]
      }
      console.log(newComments)
      return newComments;
    })
  }

  return (
    <>
      <div className="comment-form">
        <textarea 
          onChange={(e) => handleChange(e)} 
          name="comment" 
          rows="5"
          placeholder="Write a comment..." 
          value={text} />
        <button 
          onClick={handleSubmit}>
            Comment
        </button>
      </div>
    </>
  )
}
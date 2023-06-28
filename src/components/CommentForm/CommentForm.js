import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthToken } from "../../hooks/useAuthToken";
import "./CommentForm.css"

export const CommentForm = () => {
  const [text, setText] = useState([]);
  const { postid } = useParams();
  const token = useAuthToken();

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      comment: text
    }
    const uri = 'https://blog-boyz.up.railway.app/api';
    fetch(`${uri}/posts/${postid}/comments`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));
    setText([]);
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
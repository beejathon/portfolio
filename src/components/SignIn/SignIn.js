import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css"
import { Register } from "../Register/Register";

export const SignIn = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  }

  const onChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }

  const handleSubmit = async () => {
    const uri = 'https://blog-boyz.up.railway.app/api';
    const data = {
      username: username,
      password: password,
    }
    fetch(`${uri}/users/login`, {
      method:'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(res => res.json())
    .then(res => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        setUsername(null);
        setPassword(null);
        setMessage(null);
        navigate('/portfolio/blog');
      } else {
        setMessage(res.message)
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="forms-container">
      <h2>Sign In</h2>
      <div className="sign-in-form">
        <input 
          onChange={(e) => onChangeUsername(e)}
          type="text"
          name="username"
          placeholder="username"
          value={username} />
        <input 
          onChange={(e) => onChangePassword(e)}
          type="password"
          name="password"
          placeholder="password"
          value={password} />
        <button 
          onClick={handleSubmit}>
            Sign In
        </button>
        <div hidden={ message ? false : true}>{message}</div>
      </div>
      <h2>New User</h2>
      <Register />
    </div>
  )
}
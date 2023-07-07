import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css"
import { Register } from "../Register/Register";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../../hooks/useAuthProvider";

export const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, setToken} = useAuth();
  const navigate = useNavigate();

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

  const onChangeUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  }

  const onChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }

  const handleSubmit = async () => {
    const uri = process.env.REACT_APP_API_URI;
    fetch(`${uri}/users/login`, {
      method:'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'username': username,
        'password': password
      })
      .toString()
    })
    .then(res => res.json())
    .then(res => {
      if (res.token) {
        signUserIn(res);
      } else {
        notify(res.error);
      }
    })
    .catch(err => console.log(err))
  }

  const signUserIn = (res) => {
    localStorage.setItem('user', JSON.stringify(res.user));
    localStorage.setItem('token', res.token);
    setUser(res.user);
    setToken(res.token);
    setUsername('');
    setPassword('');
    navigate('/blog');
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
      </div>
      <h2>New User</h2>
      <Register notify={notify} />
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
    </div>
  )
}
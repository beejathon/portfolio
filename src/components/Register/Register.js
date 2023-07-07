import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"
import { useAuth } from "../../hooks/useAuthProvider";

export const Register = ({ notify }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [email, setEmail] = useState('');
  const { setUser, setToken } = useAuth();
  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  }

  const onChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }

  const onChangePasswordConf = (e) => {
    e.preventDefault();
    setPasswordConf(e.target.value);
  }

  const handleSubmit = async () => {
    const uri = process.env.REACT_APP_API_URI;
    const data = {
      username: username,
      email: email,
      password: password,
      password_conf: passwordConf,
    }
    fetch(`${uri}/users/register`, {
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
        signUserIn(res);
      } else {
        res.errors.forEach((err) => {
          notify(err.msg)
        })
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
    setEmail('');
    setPassword('');
    setPasswordConf('');
    navigate('/blog');
  }

  return (
    <>
      <div className="register-form">
        <input 
          onChange={(e) => onChangeUsername(e)}
          type="text"
          name="username"
          placeholder="username"
          value={username} />
        <input 
          onChange={(e) => onChangeEmail(e)}
          type="email"
          name="email"
          placeholder="email"
          value={email} />
        <input 
          onChange={(e) => onChangePassword(e)}
          type="password"
          name="password"
          placeholder="password"
          value={password} />
        <input 
          onChange={(e) => onChangePasswordConf(e)}
          type="password"
          name="confirm-password"
          placeholder="confirm password"
          value={passwordConf} />
        <button 
          onClick={handleSubmit}>
            Register
        </button>
      </div>
    </>
  )
}
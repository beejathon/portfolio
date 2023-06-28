import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"

export const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null);
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
    const uri = 'https://blog-boyz.up.railway.app/api';
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
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('token', res.token);
        setUsername('');
        setEmail('');
        setPassword('');
        setPasswordConf('');
        setMessage('');
        navigate('/portfolio/blog');
      } else {
        setMessage(res.errors)
      }
    })
    .catch(err => console.log(err))
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
        <ul hidden={ message ? false : true}>
          {message ? (
            message.map((err) => {
              return <li>{err.msg}</li>
            })
          ) : (
            null
          )}
        </ul>
      </div>
    </>
  )
}
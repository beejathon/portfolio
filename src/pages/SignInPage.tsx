import { useEffect } from 'react'
import { useActionData, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuthProvider'
import { uri } from '@/routes/router'
import { ActionFunctionArgs } from 'react-router-dom'
import SignIn from '@/components/SignIn'
import Register from '@/components/Register'

interface User {
  _id: string
  username: string
  email: string
  admin: boolean
}

const SignInPage = () => {
  const actionData: any = useActionData()
  const { setUser, setToken } = useAuth()
  const navigate = useNavigate()

  const signUserIn = (user: User, token: string) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    setUser(user)
    setToken(token)
    navigate('/blog')
  }

  useEffect(() => {
    if (actionData && actionData.user && actionData.token) {
      signUserIn(actionData.user, actionData.token)
    }
  }, [actionData])

  return (
    <div className="flex flex-col gap-10 font-mono text-eucalyptus-700">
      <SignIn />
      <Register />
    </div>
  )
}

export const signInAction = async ({ request }: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData())
  let intent = data.intent
  let errors: any = {}

  // form validation

  if (intent === 'signin') {
    if (typeof data.username !== 'string' || data.username.length < 3) {
      errors.username =
        'That username is too short. Please use at least 3 characters.'
    }
    if (typeof data.password !== 'string' || data.password.length < 6) {
      errors.password = 'Password must be > 6 characters'
    }
    if (Object.keys(errors).length) {
      errors.intent = 'signin'
      return errors
    }
  }

  if (intent === 'register') {
    if (typeof data.username !== 'string' || data.username.length < 3) {
      errors.username =
        'That username is too short. Please use at least 3 characters.'
    }
    if (typeof data.email !== 'string' || !data.email.includes('@')) {
      errors.email = 'Please enter a valid email address'
    }
    if (typeof data.passwordConfirm !== 'string') {
      errors.passwordConfirm = 'Please confirm your password'
    }
    if (data.password !== data.passwordConfirm) {
      errors.passwordConfirm = 'Passwords do not match'
    }
    if (Object.keys(errors).length) {
      errors.intent = 'register'
      return errors
    }
  }

  // POST to api for sigin or register request

  if (intent === 'signin') {
    const res = await fetch(`${uri}/users/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(
        'username=' + data.username + '&password=' + data.password
      ),
    })
    if (!res.ok) {
      throw res
    }
    return await res.json()
  }

  if (intent === 'register') {
    const res = await fetch(`${uri}/users/register`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
        password_conf: data.passwordConfirm,
      }),
    })
    if (!res.ok) {
      throw res
    }
    return await res.json()
  }
}

export default SignInPage

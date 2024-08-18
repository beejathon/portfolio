import { useState } from 'react'
import { Form, useActionData } from 'react-router-dom'

export const Register = () => {
  const [username, setUsername] = useState<string | undefined>('')
  const [email, setEmail] = useState<string | undefined>('')
  const [password, setPassword] = useState<string | undefined>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string | undefined>('')
  const errors: any = useActionData()

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUsername(e.target.value)
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPasswordConfirm(e.target.value)
  }

  return (
    <>
      <Form method="post" className="flex w-96 flex-col gap-4">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={onChangeUsername}
          minLength={3}
          maxLength={20}
          required
        />

        {errors?.username && errors.intent === 'register' && (
          <p>{errors.username}</p>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={onChangeEmail}
          required
        />
        {errors?.email && errors.intent === 'register' && <p>{errors.email}</p>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChangePassword}
          minLength={6}
          maxLength={20}
          required
        />
        {errors?.password && errors.intent === 'register' && (
          <p>{errors.password}</p>
        )}
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
          required
        />
        {errors?.passwordConfirm && errors.intent === 'register' && (
          <p>{errors.passwordConfirm}</p>
        )}
        <button
          type="submit"
          name="intent"
          value="register"
          className="m-auto rounded-lg bg-chatelle-700 px-4 py-2"
        >
          Register
        </button>
      </Form>
    </>
  )
}

export default Register

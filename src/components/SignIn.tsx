import { useState } from 'react'
import { Form, useActionData } from 'react-router-dom'

export const SignIn = () => {
  const [username, setUsername] = useState<string | undefined>('')
  const [password, setPassword] = useState<string | undefined>('')
  const errors: any = useActionData()

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUsername(e.target.value)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPassword(e.target.value)
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
        />
        {errors?.username && errors.intent === 'signin' && (
          <p>{errors.username}</p>
        )}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChangePassword}
        />
        {errors?.password && errors.intent === 'signin' && (
          <p>{errors.password}</p>
        )}
        <button
          type="submit"
          name="intent"
          value="signin"
          className="m-auto rounded-lg bg-chatelle-700 px-4 py-2"
        >
          Sign In
        </button>
      </Form>
    </>
  )
}

export default SignIn

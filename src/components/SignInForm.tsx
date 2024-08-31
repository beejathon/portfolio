import { useState } from 'react'
import { Form, useActionData } from 'react-router-dom'
import PasswordInput from './ui/PasswordInput'
import Button from './ui/Button'

export const SignInForm = () => {
  const [username, setUsername] = useState<string | undefined>('')
  const [password, setPassword] = useState<string | undefined>('')

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
          className="w-full border-[0.4px] border-border/50 p-2 text-[12px] text-black md:text-xs lg:text-sm"
        />
        <PasswordInput
          label="Password"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChangePassword}
          minLength={8}
          maxLength={20}
          required={true}
        />
        <Button type="submit" name="intent" value="signin" text="Sign In" />
      </Form>
    </>
  )
}

export default SignInForm

import { useState } from 'react'
import { Form, useActionData } from 'react-router-dom'
import PasswordInput from './ui/PasswordInput'
import Button from './ui/Button'

export const RegisterForm = () => {
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
          className="w-full border-[0.4px] border-border/50 p-2 text-[12px] text-black md:text-xs lg:text-sm"
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
          className="w-full border-[0.4px] border-border/50 p-2 text-[12px] text-black md:text-xs lg:text-sm"
        />
        {errors?.email && errors.intent === 'register' && <p>{errors.email}</p>}
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
        {errors?.password && errors.intent === 'register' && (
          <p>{errors.password}</p>
        )}
        <PasswordInput
          label="Confirm Password"
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
          required={true}
        />
        {errors?.passwordConfirm && errors.intent === 'register' && (
          <p>{errors.passwordConfirm}</p>
        )}
        <Button type="submit" name="intent" value="register" text="Register" />
      </Form>
    </>
  )
}

export default RegisterForm

import { useState } from 'react'

type InputProps = {
  label: string
  type: string
  name: string
  id: string
  value: string | undefined
  onChange: (e: any) => void
  minLength?: number
  maxLength?: number
  required: boolean
  placeholder?: string
}

export const PasswordInput = ({ label, ...props }: InputProps) => {
  const [type, setType] = useState('password')

  const handleToggle = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    if (type === 'password') {
      setType('text')
    } else {
      setType('password')
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <label htmlFor={props.id || props.name}>{label}</label>
        <div className="relative m-0 flex w-full flex-row items-center p-0">
          <input
            {...props}
            type={type}
            className="w-full border-[0.4px] border-border/50 p-2 text-[12px] text-black md:text-xs lg:text-sm"
          />
          <div
            className="absolute right-0 mr-2 flex cursor-pointer items-center justify-around"
            onClick={handleToggle}
          >
            <span
              className={`${
                type === 'password' ? '' : 'hidden'
              } material-symbols-outlined`}
            >
              visibility
            </span>
            <span
              className={`${
                type === 'text' ? '' : 'hidden'
              } material-symbols-outlined`}
            >
              visibility_off
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default PasswordInput

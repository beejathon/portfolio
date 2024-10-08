type ButtonProps = {
  type: 'submit' | 'reset' | 'button' | undefined
  name: string
  value: string
  text?: string
  children?: React.ReactNode
}

const Button = ({ ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="mx-auto mt-4 rounded-full border-[0.5px] border-mountain-mist-200 bg-mountain-mist-300 px-4 py-2 font-thin leading-4 text-mountain-mist-900 shadow-lg shadow-slate-700 hover:bg-mountain-mist-500 hover:text-white"
    >
      {props.text ?? props.children}
    </button>
  )
}

export default Button

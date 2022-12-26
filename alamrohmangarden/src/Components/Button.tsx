import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  level?: 'primary' | 'secondary'
}

const Button = (props: Props) => {
  if (props.level === 'primary') {
    return (
      <button {...props} className={`px-5 py-2.5 min-w-[44px] min-h-[44px] bg-first text-white hover:bg-first-darker active:bg-first-darkest rounded ${'' + props.className}`}>
        {props.children}
      </button>
    )
  }
  return (
    <button {...props} className={`px-5 py-2.5 min-w-[44px] min-h-[44px] ${'' + props.className}`}>
      {props.children}
    </button>
  )
}

export default Button
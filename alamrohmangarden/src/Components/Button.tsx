import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  level?: 'primary' | 'secondary'
}

const Button = (props: Props) => {
  if (props.level === 'primary') {
    return (
      <button className={`px-5 py-2.5`} {...props}>
        {props.children}
      </button>
    )
  }
  return (
    <button className={`px-5 py-2.5`} {...props}>
      {props.children}
    </button>
  )
}

export default Button
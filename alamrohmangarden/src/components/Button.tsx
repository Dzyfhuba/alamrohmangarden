import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: 'zero' | 'primary' | 'secondary'
}

const Button = (props: Props) => {
  if (props.level === 'primary') {
    return (
      <button 
        {...props} 
        className={`px-5 py-2.5 bg-green-2 text-white 
          rounded hover:bg-green-700 active:bg-green-600${props.className ? ' '+props.className : ''}`}>
        {props.children}
      </button>
    )
  }

  if (props.level === 'zero') {
    return (
      <button {...props} className={`px-5 py-2.5${props.className ? ' '+props.className : ''}`}>
        {props.children}
      </button>
    )
  }
  
  return (
    <button {...props} className={`${props.className ? ' '+props.className : ''}`}>
      {props.children}
    </button>
  )
}

export default Button
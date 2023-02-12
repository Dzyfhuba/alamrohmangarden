import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: Props) => {
  return (
    <button {...props} className={`${props.className && ' '+props.className}`}>
      {props.children}
    </button>
  )
}

export default Button
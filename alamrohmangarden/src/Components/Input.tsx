import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: Props) => {
  return (
    <input {...props} className={`bg-slate-200 min-h-[44px] p-3 rounded ${props.className}`} />
  )
}

export default Input
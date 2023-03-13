import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  //
}

const Input = (props: Props) => {
  return (
    <input {...props} className={`border rounded px-5 py-2.5`} />
  )
}

export default Input
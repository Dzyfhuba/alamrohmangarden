import React from 'react'

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = (props: Props) => {
  return (
    <label {...props} className={`text-sm ${props.className}`}>{props.children}</label>
  )
}

export default Label
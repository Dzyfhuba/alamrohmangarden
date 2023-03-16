import Link, { LinkProps } from 'next/link'
import React from 'react'

interface Props extends LinkProps{
  level?: 'zero' | 'primary' | 'secondary'
  className?: string
  children?: React.ReactNode
}

const ButtonAnchor = (props: Props) => {
  if (props.level === 'primary') {
    return (
      <Link
        {...props} 
        className={`px-5 py-2.5 bg-green-2 text-white 
          rounded hover:bg-green-700 active:bg-green-600${props.className ? ' '+props.className : ''}`}>
        {props.children}
      </Link>
    )
  }

  if (props.level === 'zero') {
    return (
      <Link {...props} className={`px-5 py-2.5${props.className ? ' '+props.className : ''}`}>
        {props.children}
      </Link>
    )
  }
  
  return (
    <Link {...props} className={`${props.className ? ' '+props.className : ''}`}>
      {props.children}
    </Link>
  )
}

export default ButtonAnchor
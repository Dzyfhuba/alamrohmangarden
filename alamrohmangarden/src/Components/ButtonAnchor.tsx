import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

interface Props extends LinkProps {
  level?: 'primary' | 'secondary'
}

const ButtonAnchor = (props: Props) => {
  if (props.level === 'primary') {
    return (
      <Link {...props} className={`px-5 py-2.5 min-w-[44px] min-h-[44px] border-first border-2 bg-first text-white hover:bg-first-darker active:bg-first-darkest disabled:bg-first-darkest rounded ${'' + props.className}`}>
        {props.children}
      </Link>
    )
  } else if (props.level === 'secondary') {
    return (
      <Link {...props} className={`px-5 py-2.5 min-w-[44px] min-h-[44px] border-first border-2 text-first hover:bg-first-darker hover:text-white active:bg-first-darkest disabled:bg-first-darkest rounded ${'' + props.className}`}>
        {props.children}
      </Link>
    )
  }
  return (
    <Link {...props} className={`px-5 py-2.5 min-w-[44px] min-h-[44px] ${'' + props.className}`}>
      {props.children}
    </Link>
  )
}

export default ButtonAnchor
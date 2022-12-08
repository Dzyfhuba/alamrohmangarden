import React from 'react'

type Props = {
    children: React.ReactNode
}

const Main = (props: Props) => {
  return (
    <>
        {props.children}
    </>
  )
}

export default Main
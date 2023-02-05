import Navbar from '@/containers/Navbar'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Guest = (props: Props) => {
  return (
    <>
      <Navbar />
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Guest
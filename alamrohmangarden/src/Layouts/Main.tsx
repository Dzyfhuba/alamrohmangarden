import React from 'react'
import Sidebar from '../Containers/Sidebar'

type Props = {
    children: React.ReactNode
}

const Main = (props: Props) => {
  return (
    <>
      <Sidebar />
      <main className='z-0'>
        {props.children}
      </main>
    </>
  )
}

export default Main
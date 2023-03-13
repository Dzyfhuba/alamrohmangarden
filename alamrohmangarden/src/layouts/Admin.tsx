import Sidebar from '@/containers/Sidebar'
import React, { HTMLAttributes } from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'

interface Props extends HTMLAttributes<HTMLElement>{
  //
}
const Admin = (props: Props) => {
  return (
    <main {...props}>
      <Sidebar />
      {props.children}
    </main>
  )
}

export default Admin
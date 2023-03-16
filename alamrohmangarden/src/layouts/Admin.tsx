import AdminNavbar from '@/containers/AdminNavbar'
import AdminSidebar from '@/containers/AdminSidebar'
import useIsLoggedIn from '@/hooks/IsLoggedIn'
import useUser from '@/hooks/User'
import { HTMLAttributes, useEffect, useState } from 'react'

interface Props extends HTMLAttributes<HTMLElement>{
  //
}
const Admin = (props: Props) => {
  // const user = useUser({ redirectTo: '/' })
  useIsLoggedIn({ strict:false })

  return (
    <>
      <AdminNavbar />
      <AdminSidebar />
      <main {...props} 
        className={`px-5 pt-3${props.className? ' ' + props.className : ''}`}
      >
        {props.children}
      </main>
    </>
  )
}

export default Admin
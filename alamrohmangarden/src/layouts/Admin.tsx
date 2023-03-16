import AdminNavbar from '@/containers/AdminNavbar'
import AdminSidebar from '@/containers/AdminSidebar'
import useUser from '@/hooks/User'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement>{
  //
}
const Admin = (props: Props) => {
  const user = useUser({ redirectTo: '/' })

  return (
    <>
      <AdminSidebar />
      <AdminNavbar />
      <main {...props} 
        className={`px-5 pt-3${props.className? ' ' + props.className : ''}`}
      >
        {props.children}
      </main>
    </>
  )
}

export default Admin
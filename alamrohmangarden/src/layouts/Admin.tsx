import AdminNavbar from '@/containers/AdminNavbar'
import AdminSidebar from '@/containers/AdminSidebar'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement>{
  //
}
const Admin = (props: Props) => {
  return (
    <main {...props}>
      <AdminSidebar />
      <AdminNavbar />
      {props.children}
    </main>
  )
}

export default Admin
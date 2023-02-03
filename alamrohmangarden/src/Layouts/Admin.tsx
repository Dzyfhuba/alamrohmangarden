import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../Containers/Admin/AdminNavbar'
import AdminSidebar from '../Containers/Admin/AdminSidebar'
import { AuthCheck } from '../Utils/AuthCheck'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Admin = (props: Props) => {
  const navigate = useNavigate()
  useEffect(() => {
    (async () => {
      const { isLoggedIn } = await AuthCheck()
      console.log(isLoggedIn);
      
      if (!isLoggedIn) {
        navigate('/404')
      }
    })()
  }, [navigate])
  return (
    <div className='flex' {...props}>
      <AdminSidebar />
      <div className="flex flex-col dark:bg-dark dark:text-white">
        <AdminNavbar base='top' />
        <main className='p-3'>
          {props.children}
        </main>
        <AdminNavbar base='bottom' />
      </div>
    </div>
  )
}

export default Admin
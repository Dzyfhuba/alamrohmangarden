import React from 'react'
import AdminSidebar from '../Containers/Admin/AdminSidebar'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Admin = (props: Props) => {
  return (
    <div className='flex' {...props}>
      <AdminSidebar />
      <main className='p-3 dark:bg-dark dark:text-white'>
        {props.children}
      </main>
    </div>
  )
}

export default Admin
import Button from '@/components/Button'
import React from 'react'
import { MdMenu } from 'react-icons/md'
import { useProSidebar } from 'react-pro-sidebar'

type Props = {}

const AdminNavbar = (props: Props) => {
  const { collapseSidebar } = useProSidebar()
  return (
    <nav className='shadow h-14'>
      <Button level='zero' onClick={() => collapseSidebar()}>
        <MdMenu size={36} />
      </Button>
    </nav>
  )
}

export default AdminNavbar
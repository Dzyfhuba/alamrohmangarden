import Button from '@/components/Button'
import { routeName } from '@/config/app'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { useProSidebar } from 'react-pro-sidebar'
import LogoutButton from './LogoutButton'

type Props = {}

const AdminNavbar = (props: Props) => {
  const { collapseSidebar } = useProSidebar()
  const router = useRouter()
  const [title, setTitle] = useState<String>()

  useEffect(() => {
    setTitle(routeName.filter(a => a.path.includes(router.pathname))[0].title)
  }, [router])

  return (
    <nav className='flex shadow h-14 pr-4'>
      <Button level='zero' onClick={() => collapseSidebar()}>
        <MdMenu size={36} />
      </Button>
      <div className='flex justify-between grow h-full items-center'>
        <h1 className='text-xl font-bold'>
          {title}
        </h1>
        <LogoutButton className='h-full' />
      </div>
    </nav>
  )
}

export default AdminNavbar
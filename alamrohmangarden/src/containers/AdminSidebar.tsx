import Button from '@/components/Button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { Menu, MenuItem, Sidebar as SidebarComp, useProSidebar } from 'react-pro-sidebar';

type Props = {}

const AdminSidebar = (props: Props) => {
  const { collapseSidebar, collapsed } = useProSidebar()
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 100)

    return () => {
      clearTimeout(timeout)
    }
  }, [])
  
  return (
    <>
      <SidebarComp defaultCollapsed={true} className={`${show ? 'fixed' : 'hidden'} z-[999] top-0 left-0`} collapsedWidth='0'>
        <Menu className='bg-white h-screen'>
          <Button onClick={() => collapseSidebar()} className='ml-auto block'>
            <MdClose size={36} />
          </Button>
          <MenuItem component={<Link href={'/admin/services'} />}>
            Services
          </MenuItem>
          <MenuItem component={<Link href={'/admin/articles'} />}>
            Articles
          </MenuItem>
          <MenuItem component={<Link href={'/admin/about'} />}>
            About
          </MenuItem>
        </Menu>
      </SidebarComp>
      {
        !collapsed && <div className={`${show ? 'fixed' : 'hidden'} top-0 left-0 w-screen h-screen bg-black opacity-25 z-[998]`} onClick={() => collapseSidebar()}></div>
      }
    </>
  )
}

export default AdminSidebar
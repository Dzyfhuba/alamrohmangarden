import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react'
import { MdMenu } from 'react-icons/md';
import { Sidebar as SidebarComp, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';

type Props = {}

const AdminSidebar = (props: Props) => {
  const { collapseSidebar, collapsed } = useProSidebar()
  return (
    <>
      <SidebarComp className='fixed z-[999] top-0 left-0' collapsedWidth='0' defaultCollapsed={true}>
        <Menu className='bg-white h-screen'>
          <Button onClick={() => collapseSidebar()}>
            <MdMenu />
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
        !collapsed && <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-25 z-[998]" onClick={() => collapseSidebar()}></div>
      }
    </>
  )
}

export default AdminSidebar
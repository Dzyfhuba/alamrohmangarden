import React from 'react'
import { Menu, MenuItem, Sidebar as ProSidebar, useProSidebar } from 'react-pro-sidebar'
import { GrClose } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'

type Props = {}

const Sidebar = (props: Props) => {
  const { collapseSidebar, collapsed } = useProSidebar()
  return (
    <div className={`fixed top-0 left-0`}>
      <ProSidebar collapsedWidth='0' defaultCollapsed={true} className='bg-white z-50 h-screen'>
        <Menu>
          <MenuItem onClick={() => collapseSidebar()}><span className='flex justify-center'><GrClose /></span></MenuItem>
          <MenuItem routerLink={<NavLink to={'/'} />}>Dashboard</MenuItem>
          <MenuItem routerLink={<NavLink to={'/services'} />}>Jasa</MenuItem>
          <MenuItem routerLink={<NavLink to={'/articles'} />}>Artikel</MenuItem>
          <MenuItem routerLink={<NavLink to={'/about'} />}>Tentang Kami</MenuItem>
        </Menu>
      </ProSidebar>
      <div className={`fixed w-screen h-screen top-0 left-0 z-40 ${collapsed ? 'hidden' : 'backdrop-brightness-50'}`} onClick={() => collapseSidebar()}></div>
    </div>
  )
}

export default Sidebar
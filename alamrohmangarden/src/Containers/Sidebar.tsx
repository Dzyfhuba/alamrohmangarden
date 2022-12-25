import React from 'react'
import { Menu, MenuItem, Sidebar as ProSidebar, useProSidebar } from 'react-pro-sidebar'
import { GrClose } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'
import ButtonTheme from '../Components/ButtonTheme'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Sidebar = (props: Props) => {
  const { collapseSidebar, collapsed } = useProSidebar()
  return (
    <div className={`md:hidden fixed top-0 left-0 ${props.className}`} {...props}>
      <ProSidebar collapsedWidth='0' defaultCollapsed={true} className='bg-white z-50 h-screen'>
        <Menu>
          <MenuItem onClick={() => collapseSidebar()}><span className='flex justify-center'><GrClose /></span></MenuItem>
          <MenuItem routerLink={<NavLink to={'/'} />}>Dashboard</MenuItem>
          <MenuItem routerLink={<NavLink to={'/services'} />}>Jasa</MenuItem>
          <MenuItem routerLink={<NavLink to={'/articles'} />}>Artikel</MenuItem>
          <MenuItem routerLink={<NavLink to={'/about'} />}>Tentang Kami</MenuItem>
          <MenuItem><ButtonTheme className='w-full flex justify-center' /></MenuItem>
        </Menu>
      </ProSidebar>
      <div className={`fixed w-screen h-screen top-0 left-0 z-40 ${collapsed ? 'hidden' : 'backdrop-brightness-50'}`} onClick={() => collapseSidebar()}></div>
    </div>
  )
}

export default Sidebar
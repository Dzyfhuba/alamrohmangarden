import React from 'react'
import { Menu, MenuItem, Sidebar as ProSidebar, useProSidebar } from 'react-pro-sidebar'
import { GrClose } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'
import ButtonTheme from '../Components/ButtonTheme'
import Button from '../Components/Button'
import { MdClose } from 'react-icons/md'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Sidebar = (props: Props) => {
  const { collapseSidebar, collapsed } = useProSidebar()
  return (
    <div className={`md:hidden fixed z-50 top-0 left-0 ${props.className}`} {...props}>
      <ProSidebar backgroundColor='rgb(249, 249, 249, 0.0)' collapsedWidth='0' defaultCollapsed={true} className='bg-white z-50 dark:bg-dark h-screen border-0'>
        <Menu className='bg-white dark:bg-dark dark:text-white transition-colors duration-300'>
          <MenuItem className='z-20 dark:hover:bg-darker' onClick={() => collapseSidebar()}><span className='flex justify-center fill-white'><MdClose size={24} /></span></MenuItem>
          <MenuItem className='z-20 dark:hover:bg-darker' routerLink={<NavLink to={'/'} />}>Dashboard</MenuItem>
          <MenuItem className='z-20 dark:hover:bg-darker' routerLink={<NavLink to={'/services'} />}>Jasa</MenuItem>
          <MenuItem className='z-20 dark:hover:bg-darker' routerLink={<NavLink to={'/articles'} />}>Artikel</MenuItem>
          <MenuItem className='z-20 dark:hover:bg-darker' routerLink={<NavLink to={'/about'} />}>Tentang Kami</MenuItem>
          <MenuItem className='z-20 dark:hover:bg-darker'><ButtonTheme className='w-full flex justify-center' /></MenuItem>
        </Menu>
      </ProSidebar>
      <div className={`fixed w-screen h-screen top-0 left-0 z-[19] ${collapsed ? 'hidden' : 'backdrop-brightness-50'}`} onClick={() => collapseSidebar()}></div>
    </div>
  )
}

export default Sidebar
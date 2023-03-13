import React from 'react'
import { Sidebar as SidebarComp, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';

type Props = {}

const Sidebar = (props: Props) => {
  const { collapseSidebar, collapsed } = useProSidebar()
  return (
    <>
      <SidebarComp className='fixed z-[999]' collapsedWidth='0' defaultCollapsed={true}>
        <Menu className='bg-white h-screen'>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </SidebarComp>
      {
        !collapsed && <div className="bg-fixed w-screen h-screen bg-black opacity-25 z-[998]" onClick={() => collapseSidebar()}></div>
      }
    </>
  )
}

export default Sidebar
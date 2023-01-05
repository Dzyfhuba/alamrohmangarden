import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin'
import React, { useEffect, useState } from 'react'
import { GiGardeningShears, GiHamburgerMenu } from 'react-icons/gi'
import { ImProfile } from 'react-icons/im'
import { MdArticle, MdDarkMode, MdLightMode, MdLogout } from 'react-icons/md'
import { Menu, MenuItem, Sidebar, useProSidebar } from 'react-pro-sidebar'
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { ConfirmLogoutSweetAlertOption } from '../../Options/Sweetalert2Options'
import { useStoreActions } from '../../State/hook'
import GetTheme from '../../Utils/GetTheme'
import LogoutRequest from '../../Utils/LogoutRequest'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const AdminSidebar = (props: Props) => {
  const {collapseSidebar} = useProSidebar()
  const [theme, setTheme] = useState<string>('light')
  const themeToggle = useStoreActions(actions => actions.themeToggle)
  const setLoading = useStoreActions(actions => actions.setLoading)
  const navigate = useNavigate()
  useEffect(() => {
    (async () => {
      const theme = await GetTheme()
      setTheme(theme)
    })()
  }, [])
  return (
    <Sidebar backgroundColor='rgb(249, 249, 249, 0.0)' defaultCollapsed={true} className='bg-white z-50 dark:bg-dark h-screen border-0 sticky hidden md:block top-0 shadow shadow-neutral-900'>
      <Menu className='bg-white dark:bg-dark dark:text-white duration-300'>
        <MenuItem className='z-20 dark:hover:text-black' onClick={() => collapseSidebar()}><span className='flex justify-center fill-white'><GiHamburgerMenu size={24} /></span></MenuItem>
        <MenuItem icon={<GiGardeningShears />} className='z-20 dark:hover:text-black' routerLink={<NavLink to={'/services'} />}>Jasa</MenuItem>
        <MenuItem icon={<MdArticle />} className='z-20 dark:hover:text-black' routerLink={<NavLink to={'/articles'} />}>Artikel</MenuItem>
        <MenuItem icon={<ImProfile />} className='z-20 dark:hover:text-black' routerLink={<NavLink to={'/about'} />}>Tentang Kami</MenuItem>
        <MenuItem icon={<MdLogout />} className='z-20 dark:hover:text-black' onClick={() => {
          Swal.fire(ConfirmLogoutSweetAlertOption)
            .then(async () => {
              setLoading(true)
              const {isSuccess} = await LogoutRequest()
              if (isSuccess) {
                navigate('/')
                setLoading(false)
              }
            })
        }}>Logout</MenuItem>
        <MenuItem icon={theme === 'dark' ? <MdDarkMode /> : <MdLightMode /> } className='z-20 dark:hover:text-black capitalize' 
          onClick={async() => {
            await SecureStoragePlugin
              .set({key: 'theme', value: (await SecureStoragePlugin.get({key: 'theme'})).value === 'light' ? 'dark' : 'light'})
            const fromStorage = (await SecureStoragePlugin.get({ key: 'theme' })).value
    
            setTheme(fromStorage)
            themeToggle({value: fromStorage})
            if (fromStorage === 'dark') {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          }}
        >
          {`${theme} Mode`}
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default AdminSidebar
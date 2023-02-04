import React, { useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useProSidebar } from 'react-pro-sidebar'
import { Link, NavLink } from 'react-router-dom'
import Button from '../Components/Button'
import ButtonTheme from '../Components/ButtonTheme'
import Logo from '../Images/logo.png'
import LogoDark from '../Images/logo-dark.png'
import { useStoreActions, useStoreState } from '../State/hook'
import GetTheme from '../Utils/GetTheme'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Navbar = (props: Props) => {
  const { collapseSidebar } = useProSidebar()
  const theme = useStoreState(state => state.theme)
  const themeToggle = useStoreActions(actions => actions.themeToggle)

  useEffect(() => {
    (async () => {
      const theme = await GetTheme()
      themeToggle(theme)
    })()
  }, [themeToggle])

  return (
    <nav className='shadow-[0_4px_12px_0px_rgba(0,0,0,0.3)] sticky top-0 px-2 xl:px-11 md:px-8 flex justify-between items-center dark:bg-dark dark:text-white' {...props}>
      <div className='flex w-full justify-between md:w-fit'>
        <Button className='md:hidden' onClick={() => collapseSidebar()}>
          <GiHamburgerMenu size={32} />
        </Button>
        <Link to={'/'}>
          <img src={theme === 'light' ? Logo : LogoDark} className={'max-h-14'} alt="alam rohman garden" /> 
        </Link>
      </div>
      <div className='hidden md:flex'>
        <NavLink className={'px-5 py-2.5 whitespace-nowrap hover:shadow-soft active:shadow-hard'} to={'/'}>Dashboard</NavLink>
        <NavLink className={'px-5 py-2.5 whitespace-nowrap hover:shadow-soft active:shadow-hard'} to={'/services'}>Jasa</NavLink>
        <NavLink className={'px-5 py-2.5 whitespace-nowrap hover:shadow-soft active:shadow-hard'} to={'/articles'}>Artikel</NavLink>
        <NavLink className={'px-5 py-2.5 whitespace-nowrap hover:shadow-soft active:shadow-hard'} to={'/about'}>Tentang Kami</NavLink>
        <ButtonTheme />
      </div>
    </nav>
  )
}

export default Navbar
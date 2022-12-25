import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useProSidebar } from 'react-pro-sidebar'
import { Link, NavLink } from 'react-router-dom'
import Button from '../Components/Button'
import ButtonTheme from '../Components/ButtonTheme'
import Logo from '../Images/logo.png'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Navbar = (props: Props) => {
  const { collapseSidebar } = useProSidebar()
  
  return (
    <nav className='shadow sticky top-0 px-2 xl:px-11 md:px-88 flex justify-between items-center dark:bg-slate-900 dark:text-white transition-colors duration-1000' {...props}>
      <div className='flex w-full justify-between md:w-fit'>
        <Button className='md:hidden' onClick={() => collapseSidebar()}>
          <GiHamburgerMenu size={32} />
        </Button>
        <Link to={'/'}>
          <img src={Logo} className={'max-h-14'} alt="alam rohman garden" />
        </Link>
      </div>
      <div className='hidden md:flex'>
        <NavLink className={'px-5 py-2.5 whitespace-nowrap hover:border-b-4 active:border-black'} to={'/'}>Dashboard</NavLink>
        <NavLink className={'px-5 py-2.5 whitespace-nowrap hover:border-b-4 active:border-black'} to={'/services'}>Jasa</NavLink>
        <NavLink className={'px-5 py-2.5 whitespace-nowrap hover:border-b-4 active:border-black'} to={'/articles'}>Artikel</NavLink>
        <NavLink className={'px-5 py-2.5 whitespace-nowrap hover:border-b-4 active:border-black'} to={'/about'}>Tentang Kami</NavLink>
        <ButtonTheme />
      </div>
    </nav>
  )
}

export default Navbar
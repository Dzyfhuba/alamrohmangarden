import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import Logo from '../../public/logo.png'

const Navbar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  
  return (
    <>
      <nav className='h-14 shadow px-3 sm:px-12 flex justify-between capitalize font-bold tracking-[0.5px]'>
        <Link href={'/'}>
          <Image src={Logo} alt={'Alam Rohman Garden'} className='h-full w-full' height={56} width={262} priority />
        </Link>
        <div className="hidden md:flex items-center">
          <Link href={'/services'} className='h-14 px-5 flex items-center hover:shadow-hover duration-300 transition-all'>jasa</Link>
          <Link href={'/articles'} className='h-14 px-5 flex items-center hover:shadow-hover duration-300 transition-all'>artikel</Link>
          <Link href={'/about'} className='h-14 px-5 flex items-center hover:shadow-hover duration-300 transition-all'>tentang kami</Link>
        </div>
        <Button
          className='aspect-square md:hidden'
          onClick={() => setCollapsed(!collapsed)}
        >
          <MdMenu size={28} className='mx-auto' />
        </Button>
        <>
          <aside className={`z-[100] bg-base fixed top-0 left-0 h-screen transition-transform duration-300 ${!collapsed ? 'translate-x-0' : '-translate-x-full'}`}>
            <Link href={'/services'} className='h-14 px-5 flex items-center hover:shadow-hover duration-300 transition-all'>jasa</Link>
            <Link href={'/articles'} className='h-14 px-5 flex items-center hover:shadow-hover duration-300 transition-all'>artikel</Link>
            <Link href={'/about'} className='h-14 px-5 flex items-center hover:shadow-hover duration-300 transition-all'>tentang kami</Link>
          </aside>
          {
            !collapsed && <div 
              className="h-screen w-screen fixed backdrop-brightness-50 z-[99]" 
              onClick={() => setCollapsed(!collapsed)}
            />
          }
        </>
      </nav>
    </>
  )
}

export default Navbar
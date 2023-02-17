import Button from '@/components/Button'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Image from 'next/image'
import Link from 'next/link'
import { HTMLAttributes, useRef, useState } from 'react'
import { MdMenu } from 'react-icons/md'
import Logo from '../../public/logo.png'

const Navbar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const nav = useRef<HTMLElement>(null)
  const [hideOnScroll, setHideOnScroll] = useState<boolean>(true)
  
  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y > prevPos.y
    if (isShow !== hideOnScroll) setHideOnScroll(isShow)
  }, [hideOnScroll], undefined, false, 300)
  
  return (
    <>
      <nav
        className={`h-14 w-full shadow px-3 sm:px-12 
          flex justify-between capitalize font-bold tracking-[0.5px] 
          fixed top-0 left-0 z-50 bg-base
          ${hideOnScroll ? 'ease-in translate-y-0' : 'ease-out -translate-y-full'} duration-300 transition-transform`}
        ref={nav}
      >
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
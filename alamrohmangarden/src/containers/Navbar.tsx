import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../public/logo.png'

type Props = {}

const Navbar = (props: Props) => {
  
  return (
    <nav className='h-14 shadow px-12 flex justify-between capitalize font-bold tracking-[0.5px]'>
      <Link href={'/'}>
        <Image src={Logo} alt={'Alam Rohman Garden'} className='h-full w-full' fill={false} />
      </Link>
      <div className="hidden sm:flex items-center">
        <Link href={'/services'} className='h-14 px-5 flex items-center hover:shadow-hover' locale='en'>services</Link>
        <Link href={'/services'} className='h-14 px-5 flex items-center hover:shadow-hover' locale='id'>jasa</Link>
        <Link href={'/articles'} className='h-14 px-5 flex items-center hover:shadow-hover'>articles</Link>
        <Link href={'/about'} className='h-14 px-5 flex items-center hover:shadow-hover'>about</Link>
      </div>
    </nav>
  )
}

export default Navbar

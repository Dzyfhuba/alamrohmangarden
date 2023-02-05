import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  console.log('asd')
  return (
    <nav className='h-14 shadow px-12 flex justify-between capitalize font-bold tracking-[0.5px]'>
      <Link href={'/'}>
        <Image src={'/logo.png'} alt={'Alam Rohman Garden'} height={56} width={261} />
      </Link>
      <div className="flex items-center">
        <Link href={'/services'} className='h-14 px-5 flex items-center hover:shadow-hover'>services</Link>
        <Link href={'/articles'} className='h-14 px-5 flex items-center hover:shadow-hover'>articles</Link>
        <Link href={'/about'} className='h-14 px-5 flex items-center hover:shadow-hover'>about</Link>
      </div>
    </nav>
  )
}

export default Navbar

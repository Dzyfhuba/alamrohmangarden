import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
// import Logo from '../../public/logo.png'

const Navbar = () => {
  const { prefetch } = useRouter()
  useEffect(() => {
    prefetch('/logo.png')
  }, [prefetch])
  return (
    <nav className='h-14 shadow px-12 flex justify-between capitalize font-bold tracking-[0.5px]'>
      <Link href={'/'}>
        <Image src={'/logo.png'} alt={'Alam Rohman Garden'} className='h-full w-full' height={56} width={262} fill={false} priority />
      </Link>
      <div className="hidden sm:flex items-center">
        <Link href={'/services'} className='h-14 px-5 flex items-center hover:shadow-hover'>services</Link>
        <Link href={'/articles'} className='h-14 px-5 flex items-center hover:shadow-hover'>articles</Link>
        <Link href={'/about'} className='h-14 px-5 flex items-center hover:shadow-hover'>about</Link>
      </div>
    </nav>
  )
}

export default Navbar
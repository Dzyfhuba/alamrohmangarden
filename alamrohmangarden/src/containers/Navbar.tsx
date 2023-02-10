import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/logo.png'

const Navbar = () => {
  return (
    <nav className='h-14 shadow px-3 sm:px-12 flex justify-between capitalize font-bold tracking-[0.5px]'>
      <Link href={'/'}>
        <Image src={Logo} alt={'Alam Rohman Garden'} className='h-full w-full' height={56} width={262} priority />
      </Link>
      <div className="hidden sm:flex items-center">
        <Link href={'/services'} className='h-14 px-5 flex items-center hover:shadow-hover duration-300 transition-all'>services</Link>
        <Link href={'/articles'} className='h-14 px-5 flex items-center hover:shadow-hover duration-300 transition-all'>articles</Link>
        <Link href={'/about'} className='h-14 px-5 flex items-center hover:shadow-hover duration-300 transition-all'>about</Link>
      </div>
    </nav>
  )
}

export default Navbar
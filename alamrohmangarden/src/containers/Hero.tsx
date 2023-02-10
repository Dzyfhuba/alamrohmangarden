import React from 'react'
import Hero1 from '@/images/hero1.jpg'
import { appName } from '@/config/app'
import Image from 'next/image'
import { Patrick_Hand }  from '@next/font/google'

const patrickaHand = Patrick_Hand({
  subsets: ['latin'],
  weight: '400'
})

const Hero = () => {
  return (
    <section className='h-[420px] sm:h-[600px] relative'>
      <Image src={Hero1} alt={appName} fill className='contrast-50 object-cover' />
      <div className="text-3xl sm:text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center capitalize whitespace-nowrap flex flex-col gap-3">
        <h1 className=''>
          {'bring a natural feel'}
        </h1>
        <h1 className='border-t border-b w-1/4 mx-auto flex justify-center -rotate-[6deg]' style={{ fontFamily: patrickaHand.style.fontFamily }}>
          {'in your home!'}
        </h1>
      </div>
    </section>
  )
}

export default Hero
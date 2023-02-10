import { appName } from '@/config/app'
import Hero1 from '@/images/hero1.jpg'
import Hero2 from '@/images/hero2.jpg'
import Hero3 from '@/images/hero3.jpg'
import Hero4 from '@/images/hero4.jpg'
import Hero5 from '@/images/hero5.jpg'
import { Patrick_Hand } from '@next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const patrickaHand = Patrick_Hand({
  subsets: ['latin'],
  weight: '400'
})

const Hero = () => {
  const [image, setImage] = useState(Hero1)
  const [counter, setCounter] = useState<number>(0)

  useEffect(() => {
    const images = [Hero1, Hero2, Hero3, Hero4, Hero5]
    const interval = setInterval(() => {
      setCounter(counter + 1)
      setImage(images[counter % images.length])
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [counter])

  return (
    <section className='h-[420px] sm:h-[600px] relative'>
      <Image src={image} alt={appName} fill className='contrast-[0.6] object-cover' />
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
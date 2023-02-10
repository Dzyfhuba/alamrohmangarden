import Navbar from '@/containers/Navbar'
import '@/styles/globals.css'
import { Montserrat } from '@next/font/google'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

const montserrat = Montserrat({ subsets: ['latin'], preload: true })

export default function App({ Component, pageProps }: AppProps) {
  const [screenSize, setScreenSize] = useState<number>(9999999)
  
  useEffect(() => {
    const screenSize = window.screen.availWidth
    setScreenSize(screenSize)
  }, [])

  if (screenSize > 768) {
    return (
      <>
        <style jsx global>
          {`
          html {
            font-family: ${montserrat.style.fontFamily}
          }
        `}
        </style>
        <Navbar />
        <Component />
      </>
    )
  }

  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${montserrat.style.fontFamily}
          }
        `}
      </style>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

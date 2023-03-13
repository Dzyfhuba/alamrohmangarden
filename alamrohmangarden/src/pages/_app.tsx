import Navbar from '@/containers/Navbar'
import '@/styles/globals.css'
import { Montserrat } from '@next/font/google'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'

const montserrat = Montserrat({ subsets: ['latin'], preload: true })

export default function App({ Component, pageProps }: AppProps) {
  const [screenSize, setScreenSize] = useState<number>(9999999)
  const router = useRouter()

  useEffect(() => {
    const screenSize = window.screen.availWidth
    setScreenSize(screenSize)
  }, [])

  return (
    <ProSidebarProvider>
      <style jsx global>
        {`
          html {
            font-family: ${montserrat.style.fontFamily}
          }
        `}
      </style>
      {
        router.pathname.includes('/admin') ? '' : <Navbar />
      }
      <Component {...pageProps} />
    </ProSidebarProvider>
  )
}

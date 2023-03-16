import Navbar from '@/containers/Navbar'
import useIsLoggedIn from '@/hooks/IsLoggedIn'
import Admin from '@/layouts/Admin'
import '@/styles/globals.css'
import { Montserrat } from '@next/font/google'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ProSidebarProvider, Sidebar } from 'react-pro-sidebar'

const montserrat = Montserrat({ subsets: ['latin'], preload: true })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
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
        router.pathname.includes('/admin') ? (
          ''
        ) : <Navbar />
      }
      <Component {...pageProps} />
    </ProSidebarProvider>
  )
}

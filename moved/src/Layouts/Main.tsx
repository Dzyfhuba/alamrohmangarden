import React, { useEffect } from 'react'
import Navbar from '../Containers/Navbar'
import Sidebar from '../Containers/Sidebar'
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin'
import { useNavigate } from "react-router-dom";


type Props = {
    children: React.ReactNode
}

const Main = (props: Props) => {
  const navigate = useNavigate()
  useEffect(() => {
    (async () => {
      const theme = await SecureStoragePlugin.get({key: 'theme'}).catch(async () => await SecureStoragePlugin.set({key: 'theme', value: 'dark'}))
      if (theme.value === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    })()

    
  }, [navigate])
  window.onbeforeunload = (event: Event) => {
    event.preventDefault()
    navigate(0)
    return 
  }
  window.onunload = (e: Event) => {
    e.preventDefault()
    navigate(0)
  }

  return (
    <>
      <Sidebar  />
      <Navbar />
      <main className='z-0 min-h-screen dark:bg-dark dark:text-white'>
        {props.children}
      </main>
    </>
  )
}

export default Main
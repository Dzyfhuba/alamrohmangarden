import React, { useEffect } from 'react'
import Navbar from '../Containers/Navbar'
import Sidebar from '../Containers/Sidebar'
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin'

type Props = {
    children: React.ReactNode
}

const Main = (props: Props) => {
  useEffect(() => {
    (async () => {
      const theme = await SecureStoragePlugin.get({key: 'theme'}).catch(async () => await SecureStoragePlugin.set({key: 'theme', value: 'dark'}))
      if (theme.value === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    })()
  }, [])

  return (
    <>
      <Sidebar  />
      <Navbar />
      <main className='z-0 dark:bg-slate-900 dark:text-white transition-colors duration-1000'>
        {props.children}
      </main>
    </>
  )
}

export default Main
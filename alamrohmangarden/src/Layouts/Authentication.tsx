import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonTheme from '../Components/ButtonTheme'
import { AuthCheck } from '../Utils/AuthCheck'
import { ToastContainer, toast } from 'react-toastify';



interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Authentication = (props: Props) => {
  const navigate = useNavigate()
  useEffect(() => {
    (async () => {
      const theme = await SecureStoragePlugin.get({key: 'theme'}).catch(async () => await SecureStoragePlugin.set({key: 'theme', value: 'dark'}))
      if (theme.value === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      const { isLoggedIn } = await AuthCheck()
      if (isLoggedIn) {
        navigate('/admin')
      }
    })()
  }, [navigate])

  return (
    <div className="h-screen flex justify-center items-center mx-auto dark:bg-dark dark:text-white">
      <div className="max-w-sm">
        {props.children}
      </div>
      <ButtonTheme className='fixed bottom-3 right-3 dark:text-dark dark:bg-white bg-dark text-white rounded-full border aspect-square' />
    </div>
  )
}

export default Authentication
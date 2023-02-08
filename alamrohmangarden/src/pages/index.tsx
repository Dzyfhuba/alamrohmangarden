import { useLocalNotification } from '@/hooks/LocalNotification'
import { Montserrat } from '@next/font/google'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { host } from '@/config/app'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  const { showNotification } = useLocalNotification()
  
  return (
    <>
      <button 
        className='h-11 px-5 py-2.5 bg-blue-500'
        onClick={
          () => showNotification({ title: 'Local Notification Test', body: '' })
        }
      >
          Local Notification Test
      </button>
      <button 
        className='h-11 px-5 py-2.5 bg-red-500'
        onClick={
          async() => await axios.get(`${host}/send-notification`)
        }
      >
          Remote Notification Test
      </button>
    </>
  )
}

import { appName, host } from '@/config/app'
import Hero from '@/containers/Hero'
import { useLocalNotification } from '@/hooks/LocalNotification'
import axios from 'axios'
import Head from 'next/head'

export default function Home() {
  const { showNotification } = useLocalNotification()
  
  return (
    <>
      <Head>
        <title>{appName}</title>
      </Head>
      <Hero />
      <button
        className='px-5 py-2.5 bg-red-400'
        onClick={() => showNotification({ title: 'Haloo', body: 'BOdy' })}
      >
        Local
      </button>
      <button
        className='px-5 py-2.5 bg-blue-400'
        onClick={async() => {
          axios.get(host + '/send-notification')
        }}
      >
        Remote
      </button>
    </>
  )
}

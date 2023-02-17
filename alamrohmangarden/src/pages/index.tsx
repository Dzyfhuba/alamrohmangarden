import { appName, host } from '@/config/app'
import Hero from '@/containers/Hero'
import { useLocalNotification } from '@/hooks/LocalNotification'
import { ServiceInterface } from '@/Interfaces/ServiceInterface'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import NoImageFound from '../images/No-Image-Found.png'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const { showNotification } = useLocalNotification()
  const [services, setServices] = useState<ServiceInterface[]>([])

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async() => {
    const services = await axios.get(`${host}/dashboard/services`)
      .then(res => {
        return res.data as ServiceInterface[]
      })
      .catch(err => {
        console.error(err)
        return [] as ServiceInterface[]
      })
    setServices(services)
  }

  return (
    <>
      <Head>
        <title>{appName}</title>
      </Head>
      <Hero />
      <div className="p-3">
        <section className='grid grid-cols-2 grid-flow-row md:flex md:justify-center text-center'>
          {services ? services.map((service, index) => (
            <article key={index} className='border p-3'>
              <Image 
                src={service.images?.length ? service.images[0] : NoImageFound} 
                alt={`${service.slug}-${appName}`} 
                fill={false} 
                width={300}
                height={100} 
                priority
                placeholder='blur'
                blurDataURL='/404.png'
              />
              <h1>
                <Link 
                  href={`/services/${service.slug}`}
                  className='capitalize text-green-1 text-lg hover:text-blue-500 hover:underline duration-300 transition-colors'
                >
                  {service.title}
                </Link>
              </h1>
            </article>
          )) : ''}
        </section>
      </div>
      <article>
        <h1 className='capitalize text-4xl text-center'>{'kami tangani semuanya untuk anda'}</h1>
      </article>
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
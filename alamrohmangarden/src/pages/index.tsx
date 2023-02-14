import { appName, host } from '@/config/app'
import Hero from '@/containers/Hero'
import { useLocalNotification } from '@/hooks/LocalNotification'
import { ServiceInterface } from '@/Interfaces/ServiceInterface'
import axios from 'axios'
import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import NoImageFound from '../images/No-Image-Found.png'

export default function Home({ services }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { showNotification } = useLocalNotification()

  return (
    <>
      <Head>
        <title>{appName}</title>
      </Head>
      <Hero />
      <div className="p-3">
        <section className='grid grid-cols-2 grid-flow-row md:flex md:justify-center text-center shadow gap-1 border'>
          {services ? services.map((service, index) => (
            <article key={index} className="">
              <Image src={service.images?.length ? service.images[0] : NoImageFound} alt={`${service.slug}-${appName}`} fill={false} width={300} height={100} />
              <h1 className='capitalize'>{service.title}</h1>
            </article>
          )) : ''}
        </section>
      </div>
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

export const getServerSideProps: GetServerSideProps<{services: ServiceInterface[]}> = async() => {
  const services = await axios.get(`${host}/dashboard/services`)
    .then(res => {
      return res.data as ServiceInterface[]
    })
    .catch(err => {
      console.error(err)
      return [] as ServiceInterface[]
    })
  console.log('service:', services)

  return {
    props: {
      services: services,
    }
  }
}

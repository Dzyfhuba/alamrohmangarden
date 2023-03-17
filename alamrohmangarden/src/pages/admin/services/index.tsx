/* eslint-disable react-hooks/rules-of-hooks */
import useAxios from '@/applications/Axios'
import ButtonAnchor from '@/components/ButtonAnchor'
import { host } from '@/config/app'
import { ServiceInterface } from '@/Interfaces/ServiceInterface'
import Admin from '@/layouts/Admin'
import { InferGetServerSidePropsType } from 'next'
import { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useProSidebar } from 'react-pro-sidebar'

const index = () => {
  const [services, setServices] = useState<ServiceInterface[]>([])

  const { collapseSidebar } = useProSidebar()
  const { AxiosAuth, isLoading } = useAxios()

  useEffect(() => {
    // if (!isLoading) {
    (async() => {
      const services = await AxiosAuth.get(host + '/admin/services')
        .then(res => res.data)
        .catch(err => {
          console.error(err)
          return []
        })
      console.log(services)
      setServices(services)
    })()
    // }
  }, [isLoading])

  return (
    <Admin>
      <ButtonAnchor 
        level='zero' 
        href={'/admin/services/create'} 
        className='flex items-center border rounded shadow hover:shadow-inner bg-slate-100'
      >
        {'Baru '} <FaPlus className='inline' />
      </ButtonAnchor>
      
      {/* List */}
      <section id="services">
        <ul>
          {
            services.length ? services.map((service) => (
              <li key={service.id}>
                <h1>{service.id}</h1>
              </li>
            )) : (
              <span>Tidak Ada Jasa Yang Dibuat</span>
            )
          }
        </ul>
      </section>
    </Admin>
  )
}

export default index
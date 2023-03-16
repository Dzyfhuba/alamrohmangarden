import useAxios from '@/applications/Axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

type Props = {
  strict?: boolean,
}

const useIsLoggedIn = (props: Props) => {
  const { AxiosAuth, isLoading } = useAxios()
  const router = useRouter()

  useEffect(() => {
    console.log(`axios auth isLoading: ${isLoading}`)
    if (!isLoading) {
      AxiosAuth.get('/check')
        .then(res => {
          console.log(res.data)
          if (router.pathname.includes('/login'))
            router.push('/admin/services')
        })
        .catch(err => {
          if (router.pathname.includes('/admin')) 
            router.push('/')
          console.error(err)
        })
    }
  }, [AxiosAuth, isLoading, router])
}

export default useIsLoggedIn
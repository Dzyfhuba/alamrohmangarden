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
          console.log(res.data.isLoggedIn)
          if (res.data.isLoggedIn && router.pathname.includes('/login'))
            router.push('/admin/services')
          if (!res.data.isLoggedIn && router.pathname.includes('/admin'))
            router.push('/')
        })
    }
  }, [AxiosAuth, isLoading, router])
}

export default useIsLoggedIn
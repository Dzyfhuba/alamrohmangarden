import useAxios from '@/applications/Axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useIsLoggedIn = () => {
  const { AxiosAuth, isLoading } = useAxios()
  const router = useRouter()

  useEffect(() => {
    (async() => {
      console.log(`axios auth isLoading: ${isLoading}`)
      if (!isLoading) {
        await AxiosAuth.get('/check')
          .then(res => {
            console.log(res.data)
            router.push('/admin/services')
          })
          .catch(err => {
            console.error(err)
          })
      }
    })()
  }, [AxiosAuth, isLoading, router])
}

export default useIsLoggedIn
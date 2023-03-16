import useAxios from '@/applications/Axios'
import React, { useEffect, useState } from 'react'

type Props = {
  redirectTo: string
}

export interface IsLoggedInInterface {
  // user: Userinter
}

const useUser = (props: Props) => {
  const [data, setData] = useState()

  const { AxiosAuth } = useAxios()
  

  useEffect(() => {
    (async() => {
      const res = await AxiosAuth.get('/check')
        .then(res => res.data)
        .catch(err => {
          console.error(err)
          return null
        })

      console.log(res)
    })()
  }, [AxiosAuth])
  
  return 
}

export default useUser
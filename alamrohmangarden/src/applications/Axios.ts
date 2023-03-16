import { host } from '@/config/app'
import { TokenInterface } from '@/pages/login'
import axios from 'axios'
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const useAxios = () => {
  const [token, setToken] = useState<TokenInterface>({ type: '', token: '' })
  const [isLoading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    (async() => {
      const tokenStorage = await SecureStoragePlugin.get({ key: 'token' })
        .then(val => JSON.parse(val.value))
        .catch(err => {
          console.error(err)
          if(router.pathname.includes('/admin'))
            router.push('/')
        })
      const token:{type: string, token: string} = tokenStorage || { token: '', type: '' }
      setToken(token)
      setLoading(false)
    })()
  }, [])

  const AxiosAuth = axios.create({
    baseURL: host,
    headers: {
      Authorization: `${token.type} ${token.token}`
    },
    timeout: 20000,
  })

  return { AxiosAuth, isLoading }
}

export default useAxios

export const getAxiosAuth = async() => {
  const tokenStorage = await SecureStoragePlugin.get({ key: 'token' })
    .then(val => JSON.parse(val.value))
  const token:{type: string, token: string} = tokenStorage || { token: '', type: '' }

  const AxiosAuth = axios.create({
    baseURL: host,
    headers: {
      Authorization: `${token.type} ${token.token}`
    }
  })

  return AxiosAuth
}
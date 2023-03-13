import { host } from '@/config/app'
import { TokenInterface } from '@/pages/login'
import axios from 'axios'
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin'
import { useEffect, useState } from 'react'

const useAxios = () => {
  const [token, setToken] = useState<TokenInterface>({ type: '', token: '' })
  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    (async() => {
      const tokenStorage = await SecureStoragePlugin.get({ key: 'token' })
        .then(val => JSON.parse(val.value))
      const token:{type: string, token: string} = tokenStorage || { token: '', type: '' }
      setToken(token)
      setLoading(false)
    })()
  }, [])

  const AxiosAuth = axios.create({
    baseURL: host,
    headers: {
      Authorization: `${token.type} ${token.token}`
    }
  })

  return { AxiosAuth, isLoading }
}

export default useAxios
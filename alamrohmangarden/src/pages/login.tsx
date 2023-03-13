import Button from '@/components/Button'
import Input from '@/components/Input'
import { host } from '@/config/app'
import useIsLoggedIn from '@/hooks/IsLoggedIn'
import axios from 'axios'
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin'
import { useRouter } from 'next/router'
import React, { ChangeEvent, useState } from 'react'

type Props = {}

export interface LoginBody {
  username?: string
  password?: string
}

export interface UserInterface {
  id: number
  username: string
  email: string
  created_at: string
  updated_at: string
}

export interface TokenInterface {
  token: string
  type: string
}

const Login = (props: Props) => {
  const [formData, setFormData] = useState<LoginBody>({})
  const [isLoading, setLoading] = useState<boolean>(false)

  const router = useRouter()
  useIsLoggedIn()
  
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault()

    const { user, token }: {user: UserInterface, token: TokenInterface} = await axios.post(`${host}/login`, formData)
      .then(res => res.data)
      .catch(err => {
        console.error(err)
        return {}
      })

    await SecureStoragePlugin.set({
      key: 'user',
      value: JSON.stringify(user)
    })
    await SecureStoragePlugin.set({
      key: 'token',
      value: JSON.stringify(token)
    })
    setLoading(false)
    router.push('/admin/services')
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <form className='flex flex-col gap-3 items-end p-5 shadow' onSubmit={handleSubmit}>
        <h1 className='text-xl text-center self-center font-bold'>Login</h1>
        <Input 
          placeholder='Username / Email' 
          name='username' 
          type='text' 
          onChange={(e:ChangeEvent<HTMLInputElement>) => 
            setFormData({
              ...formData,
              username: e.target.value
            })
          } 
        />
        <Input 
          placeholder='Password'
          name='password'
          type='password' 
          onChange={(e:ChangeEvent<HTMLInputElement>) => 
            setFormData({
              ...formData,
              password: e.target.value
            })
          } 
        />
        <Button type='submit' level='primary' >
          {'Login'}
        </Button>
      </form>
    </div>
  )
}

export default Login
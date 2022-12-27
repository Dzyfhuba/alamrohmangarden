import React, { useState } from 'react'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import Label from '../../Components/Label'
import Icon from '../../Images/icon.png'
import IconDark from '../../Images/icon-dark.png'
import { useStoreState } from '../../State/hook'
import axios, { AxiosError } from 'axios'
import { host } from '../../Variables'
import Swal from 'sweetalert2'
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin'
import { JsonApiErrorNode } from '../../Utils/ErrorBadRequest'
import { useNavigate } from 'react-router-dom'

type Props = {}

interface FormData {
  username?: string
  email?: string
  password?: string
  passwordConfirmation?: string
}

const LoginForm = (props: Props) => {
  const [formData, setFormData] = useState<FormData>()
  const theme = useStoreState(state => state.theme.value)
  const navigate = useNavigate()

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()

    axios
      .post(`${host}/login`, formData)
      .then(async res => {
        console.log({data: res.data})
        await SecureStoragePlugin.set({key: 'user', value: JSON.stringify(res.data.user)})
        const user = await SecureStoragePlugin.get({key: 'user'})
        console.table(JSON.parse(user.value))
        await SecureStoragePlugin.set({key: 'token', value: res.data.token.token})
        const token = await SecureStoragePlugin.get({key: 'token'})
        console.log(token.value);
        navigate('/admin')
      })
      .catch((err: AxiosError) => {
        const data = err.response?.data as JsonApiErrorNode
        console.error(data)
        
        Swal.fire('Error', data.error.messages.errors.map(item => `${item.source.pointer} is invalid`).join(', '), 'error')
      })
  }

  return (
    <form
      className='flex flex-col gap-3 w-full'
      onSubmit={handleSubmit}
    >
      <img src={theme === 'light' ? Icon : IconDark} alt="alam rohman garden" className='w-24 mx-auto' />
      <h1 className='text-center text-4xl font-bold'>Login</h1>
      <div className="flex flex-col">
        <Label>Username</Label>
        <Input name='username' onChange={(e:React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, username: e.target.value})} required/>
      </div>
      <div className="flex flex-col">
        <Label>Password</Label>
        <Input onChange={(e:React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, password: e.target.value})} type={'password'} required/>
      </div>
      <Button type='submit' level='primary'>Login</Button>
    </form>
  )
}

export default LoginForm
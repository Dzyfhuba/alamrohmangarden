import React, { useState } from 'react'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import Label from '../../Components/Label'
import Icon from '../../Images/icon.png'
import IconDark from '../../Images/icon-dark.png'
import { useStoreState } from '../../State/hook'

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

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()

    console.log(formData);
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
import React, { useState } from 'react'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import Label from '../../Components/Label'
import Icon from '../../Images/icon.png'

type Props = {}

interface FormData {
  username?: string
  email?: string
  password?: string
  passwordConfirmation?: string
}

const RegisterForm = (props: Props) => {
  const [formData, setFormData] = useState<FormData>()

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()

    console.log(formData);
    
  }

  return (
    <form
      className='flex flex-col gap-3 w-full'
      onSubmit={handleSubmit}
    >
      <img src={Icon} alt="alam rohman garden" className='w-24 mx-auto' />
      <h1 className='text-center text-4xl font-bold'>Register</h1>
      <div className="flex flex-col">
        <Label>Username</Label>
        <Input onChange={(e:React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, username: e.target.value})} required/>
      </div>
      <div className="flex flex-col">
        <Label>Email</Label>
        <Input onChange={(e:React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})} required/>
      </div>
      <div className="flex flex-col">
        <Label>Password</Label>
        <Input onChange={(e:React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, password: e.target.value})} type={'password'} required/>
      </div>
      <div className="flex flex-col">
        <Label>Retype Password</Label>
        <Input onChange={(e:React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, passwordConfirmation: e.target.value})} type={'password'} required/>
      </div>
      <Button type='submit' level='primary'>Register</Button>
    </form>
  )
}

export default RegisterForm
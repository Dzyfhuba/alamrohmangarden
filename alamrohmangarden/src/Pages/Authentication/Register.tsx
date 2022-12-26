import React from 'react'
import RegisterForm from '../../Containers/Forms/RegisterForm'
import Authentication from '../../Layouts/Authentication'

type Props = {}

const Register = (props: Props) => {
  return (
    <Authentication>
      <RegisterForm />
    </Authentication>
  )
}

export default Register
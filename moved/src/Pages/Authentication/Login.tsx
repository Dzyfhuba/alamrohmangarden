import React from 'react'
import LoginForm from '../../Containers/Forms/LoginForm'
import Authentication from '../../Layouts/Authentication'

type Props = {}

const Login = (props: Props) => {
  return (
    <Authentication>
      <LoginForm />
    </Authentication>
  )
}

export default Login
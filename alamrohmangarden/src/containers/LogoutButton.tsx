import useAxios from '@/applications/Axios'
import Button from '@/components/Button'
import { host } from '@/config/app'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import React, { ButtonHTMLAttributes, EventHandler, MouseEventHandler } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const LogoutButton = (props: Props) => {
  const { AxiosAuth } = useAxios()
  const ReactSwal = withReactContent(Swal)
  const router = useRouter()

  const handleLogout = async() => {
    AxiosAuth.get('/logout')
      .then(() => {
        ReactSwal.fire({
          title: 'Berhasil Logout',
          timer: 5000,
          icon: 'success'
        })
          .then(() => router.push('/'))
      })
      .catch((err: AxiosError) => {
        ReactSwal.fire({
          title: 'Gagal Logout',
          timer: 5000,
          icon: 'error',
          html: JSON.stringify(err.response!.data)
        })
      })
  }
  return (
    <Button
      {...props}
      onClick={handleLogout}
      className={`hover:underline active:font-bold${props.className ? ' ' + props.className : ''}`}
    >
      Logout
    </Button>
  )
}

export default LogoutButton
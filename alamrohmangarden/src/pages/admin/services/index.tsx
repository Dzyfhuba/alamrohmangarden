import Button from '@/components/Button'
import Admin from '@/layouts/Admin'
import React from 'react'
import { useProSidebar } from 'react-pro-sidebar'

type Props = {}

const index = (props: Props) => {
  const { collapseSidebar } = useProSidebar()

  return (
    <Admin>
      sadasd
      <Button className='bg-red-500' onClick={() => collapseSidebar()}>
        ads
      </Button>
    </Admin>
  )
}

export default index
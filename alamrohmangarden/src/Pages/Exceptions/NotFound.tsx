import React, { useEffect, useState } from 'react'
import ButtonAnchor from '../../Components/ButtonAnchor'
import { useStoreState } from '../../State/hook'

type Props = {}

const NotFound = (props: Props) => {
  const [counter, setCounter] = useState<number>(10)
  const isLoading = useStoreState(state => state.isLoading)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter - 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [counter])
  return (
    <main className='bg-light h-screen w-screen flex flex-col justify-center items-center'>
      {
        !isLoading && 
        <div className="mx-3 text-center flex flex-col items-center lg:flex-row lg:w-1/2">
          <div className="">
            <div className='text-7xl font-bold lg:text-9xl'>
            404
            </div>
          </div>
          <article className='flex flex-col gap-3'>
            <h1 className='uppercase text-3xl font-semibold'>page not found!</h1>
            <p>The page you are looking for was moved, removed, renamed or might never existed.</p>
            <div className="flex justify-between gap-3">
              <ButtonAnchor level='primary' className='uppercase whitespace-nowrap' to={'/'}>back to home page</ButtonAnchor>
              <ButtonAnchor level='secondary' className='uppercase whitespace-nowrap' to={'/about'}>contact us</ButtonAnchor>
            </div>
          </article>
        </div>
      }
    </main>
  )
}

export default NotFound
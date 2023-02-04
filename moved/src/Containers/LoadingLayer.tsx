import React from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader'
import { useStoreState } from '../State/hook'

const LoadingLayer = () => {
  const isLoading = useStoreState(state => state.isLoading)
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen justify-center items-center backdrop-brightness-50 backdrop-blur-sm ${isLoading ? 'flex' : 'hidden'}`}>
      <ScaleLoader color='#fff' />
    </div>
  )
}

export default LoadingLayer
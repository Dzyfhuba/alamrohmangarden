import React from 'react'
import ButtonTheme from '../Components/ButtonTheme'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Authentication = (props: Props) => {
  return (
    <div className="h-screen flex justify-center items-center max-w-sm mx-auto">
      {props.children}
      <ButtonTheme className='fixed bottom-3 right-3 dark:text-dark dark:bg-white bg-dark text-white rounded-full border aspect-square' />
    </div>
  )
}

export default Authentication
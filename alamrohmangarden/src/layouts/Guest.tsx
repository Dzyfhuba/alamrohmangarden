import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Guest = (props: Props) => {
  return (
    <>
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Guest
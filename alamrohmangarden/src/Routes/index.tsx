import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import DataList from '../Pages/DataList'

type Props = {}

const index = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/datalist' element={<DataList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index
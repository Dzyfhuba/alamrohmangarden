import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from '../Pages/About'
import Articles from '../Pages/Articles'
import Dashboard from '../Pages/Dashboard'
import DataList from '../Pages/DataList'
import Services from '../Pages/Services'

type Props = {}

const index = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/services' element={<Services />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index
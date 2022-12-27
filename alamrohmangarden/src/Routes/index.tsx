import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import AdminServices from '../Pages/Admin/AdminServices'
import Articles from '../Pages/Articles'
import Login from '../Pages/Authentication/Login'
import Register from '../Pages/Authentication/Register'
import Dashboard from '../Pages/Dashboard'
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

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        
        <Route path='/admin/services' element={<AdminServices />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index
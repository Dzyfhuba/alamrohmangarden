/* eslint-disable react-hooks/rules-of-hooks */
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin'
import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import AdminAbout from '../Pages/Admin/AdminAbout'
import AdminArticles from '../Pages/Admin/AdminArticles'
import AdminServices from '../Pages/Admin/AdminServices'
import Articles from '../Pages/Articles'
import Login from '../Pages/Authentication/Login'
import Dashboard from '../Pages/Dashboard'
import NotFound from '../Pages/Exceptions/NotFound'
import Services from '../Pages/Services'
import { useStoreActions, useStoreState } from '../State/hook'

type Props = {}

const index = (props: Props) => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
  const isLoggedInState = useStoreState(state => state.isLoggedIn)
  const setLoading = useStoreActions(actions => actions.setLoading)

  useEffect(() => {
    (async () => {
      setLoading(true)
      const user = await SecureStoragePlugin.get({key: 'user'})
        .then(() => true)
        .catch(() => false)
      setLoggedIn(user)
      setLoading(false)
    })()
  }, [setLoading])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Suspense><Dashboard /></Suspense>} />
        <Route path='/services' element={<Suspense><Services /></Suspense>} />
        <Route path='/articles' element={<Suspense><Articles /></Suspense>} />
        <Route path='/about' element={<Suspense><About /></Suspense>} />

        <Route path='/login' element={<Suspense><Login /></Suspense>} />
        {/* <Route path='/register' element={<Suspense><Register /></Suspense>} /> */}
        
        {(isLoggedInState || isLoggedIn) && (
          <>
            <Route path='/admin' element={<Suspense><AdminServices /></Suspense>} />
            <Route path='/admin/services' element={<Suspense><AdminServices /></Suspense>} />
            <Route path='/admin/articles' element={<Suspense><AdminArticles /></Suspense>} />
            <Route path='/admin/about' element={<Suspense><AdminAbout /></Suspense>} />
          </>
        )}
        
        <Route path='*' element={<Suspense><NotFound /></Suspense>} />
      </Routes>
    </BrowserRouter>
  )
}

export default index
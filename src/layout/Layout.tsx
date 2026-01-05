import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout

import React from 'react'
import Header from '../../layout/Site/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/Site/Footer/Footer'
import useHTTP from '../../hooks/useHTTP'

const SiteRoot = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default SiteRoot
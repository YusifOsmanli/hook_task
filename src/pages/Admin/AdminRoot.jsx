import React from 'react'
import Header from '../../layout/Admin/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/Admin/Footer/Footer'
import useHTTP from '../../hooks/useHTTP'

const AdminRoot = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default AdminRoot
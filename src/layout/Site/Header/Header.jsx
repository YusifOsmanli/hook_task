import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
    return (
        <nav className='navbar'>
            <h1>Products</h1>
            <div className="link">
                <Link className='site' to=''>Home</Link>
                <Link className='site' to='/admin'>Admin</Link>
            </div>
        </nav>
    )
}

export default Header
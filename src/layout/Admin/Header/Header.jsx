import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='navbar'>
            <h1>Products</h1>
            <div className="link">
                <Link className='site' to='/'>Site</Link>
                <Link className='site' to='addproduct'>Add Product</Link>
            </div>
        </nav>
    )
}

export default Header
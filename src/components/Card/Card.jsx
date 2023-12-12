import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
const Card = ({ item }) => {
    return (
        <Link className='detail' to={`/${item.id}`}>
            <div className="card" style={{ width: "18rem", height: "500px" }}>
                <img src="https://wallpapercave.com/wp/wp11392579.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text"><b>{item.unitPrice} ₼</b></p>
                </div>
            </div>
        </Link>
    )
}

export default Card
import React, { useEffect, useState } from 'react'
import useHTTP from '../../../hooks/useHTTP'
import { useParams } from 'react-router'
import "./CardDetail.css"
import axios from 'axios'
const CardDetail = () => {
  const { id } = useParams()
  const [item, setItem] = useState({})
  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/products/${id}`).then(res => {
      setItem(res.data)
    })
  }, [])
  return (
    <div className='cardDetail'>
      <h1 className='detailh1'>Card Detail</h1>
      <div className='cardDetailHeading'>
        <h2 className='h2'><b className='bold'>Name:</b> {item.name}</h2>
        <div className='texts'>
          <p className='p'><b className='bold'>Id:</b> {item.id}</p>
          <p className='p'><b className='bold'>SupplierId:</b> {item.supplierId}</p>
          <p className='p'><b className='bold'>CategoryId:</b> {item.categoryId}</p>
          <p className='p'><b className='bold'>UnitPrice:</b> {item.unitPrice}</p>
          <p className='p'><b className='bold'>QuantityPerUnit:</b> {item.quantityPerUnit}</p>
          <p className='p'><b className='bold'>UnitsInStock:</b> {item.unitsInStock}</p>
          <p className='p'><b className='bold'>ReorderLevel:</b> {item.reorderLevel}</p>
        </div>
      </div>
    </div>
  )
}

export default CardDetail
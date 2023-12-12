import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const EditProduct = () => {
    const { id } = useParams()
    const [data, setData] = useState({
        id: id,
        name: '',
        unitPrice: ''
    })
    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/products/${id}`).then(res => {
            setData({ ...data, name: res.data.name, unitPrice: res.data.unitPrice })
        })
    }, [])

    const handleSubmit = (e)=>{   
        e.preventDefault()
        axios.post(`https://northwind.vercel.app/api/products/${id}`, data).then(res => {
            setData({ ...data, name: res.data.name, unitPrice: res.data.unitPrice })
        })
    }

    return (
        <div className="Form">
            <h1 className="h1">Edit Product</h1>
            <form className='form' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name"
                        name="name"
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, name: e.target.value })
                        }}
                        value={data.name}
                        className="form-control formInp"
                        placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="unitPrice">Unit Price</label>
                    <input id="unitPrice"
                        name="unitPrice"
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, unitPrice: e.target.value })
                        }}
                        value={data.unitPrice}
                        className="form-control formInp"
                        placeholder="Unit Price" />
                </div>
                <div className="addBtn">
                    <button type="submit" className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct
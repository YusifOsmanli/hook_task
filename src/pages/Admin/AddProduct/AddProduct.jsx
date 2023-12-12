import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast'
import "./AddProduct.css"
const AddProduct = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            unitPrice: ''
        },
        onSubmit: values => {
            axios.post("https://northwind.vercel.app/api/products", { ...values }).then(res => {
                toast.success('Item elave olundu')
                console.log(res.data)
            })
        }
    })
    return (
        <div className="Form">
            <h1 className="h1">Add Product</h1>
            <form className='form' onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        className="form-control formInp"
                        placeholder="Name" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Unit Price</label>
                    <input id="unitPrice"
                        name="unitPrice"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.unitPrice}
                        className="form-control formInp"
                        placeholder="Unit Price" />
                </div>
                <div className="addBtn">
                    <button type="submit" className="btn btn-primary">Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
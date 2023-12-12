import React from 'react'
import useHTTP from '../../../hooks/useHTTP'
import { Link } from 'react-router-dom'
import "./Table.css"
import { BaseUrl } from '../../../env/env'
const Table = () => {
    const { data, loading, error, deleteData } = useHTTP(BaseUrl)

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Detail</th>
                </tr>
            </thead>
            <tbody className='tbody'>
                {
                    loading ? <div class="spinner-border spinner" role="status">
                        <span class="sr-only">Loading...</span>
                    </div> :
                        data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.unitPrice} ₼</td>
                                    <td><Link to={`editproduct`}><button className='btn btn-warning edit' >Edit</button></Link></td>
                                    <td><button className='btn btn-danger delete' onClick={() => {
                                        deleteData(item.id)
                                    }}>Delete</button></td>
                                    <td><Link to={`/${item.id}`}><button className='btn btn-primary goDetail'>Go Detail</button></Link></td>
                                </tr>
                            )
                        })
                }
            </tbody>
        </table>
    )
}

export default Table
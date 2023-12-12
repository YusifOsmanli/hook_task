import React from 'react'
import useHTTP from '../hooks/useHTTP'
import { BaseUrl } from '../env/env'
import "./Pagination.css"
const Pagination = ({ postsPerPage, setCurrentPage, currentPage }) => {
    const { data } = useHTTP(BaseUrl)
    let pages = []
    for (let index = 0; index < Math.ceil(data.length / postsPerPage); index++) {
        pages.push(index)
    }
    return (
        <div className='btn'>{
            pages.map((page, index) => {
                return (
                    <button key={index} className={index + 1 == currentPage ? 'active' : 'passive'} onClick={() => {
                        setCurrentPage(index + 1)
                    }}>{index + 1}</button>
                )
            })
        }</div>
    )
}

export default Pagination
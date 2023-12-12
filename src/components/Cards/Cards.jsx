import React from 'react'
import useHTTP from '../../hooks/useHTTP'
import Card from '../Card/Card'
import { BaseUrl } from '../../env/env'

const Cards = ({pagination, setPostsPerPage}) => {
    const { data, loading, error, handleSearch } = useHTTP(BaseUrl)

    return (
        <div>
            <form>
                <input className="input" type='search' placeholder='Search' aria-label='Search' onChange={(e)=>{

                    handleSearch(e)
                }
                } />
            </form>
            <div className='container'>
                <div className="row">
                    {
                        loading ? <div className="spinner-border spinner" role="status">
                            <span className="sr-only">Loading...</span>
                        </div> :
                            pagination.map((item, index) => {
                                return (
                                    <div key={index} className="col-3 mb-5">
                                        <Card item={item} />
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
            <select className='select' onChange={(e) => {
                setPostsPerPage(e.target.value)
            }} name='perPage' id=''>
                <option value='8'>8</option>
                <option value='12'>12</option>
                <option value='14'>14</option>
            </select>
        </div>

    )
}

export default Cards
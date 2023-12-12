import React, { useState } from 'react'
import Cards from '../../../components/Cards/Cards'
import useHTTP from '../../../hooks/useHTTP'
import Pagination from '../../../components/Pagination'
import { BaseUrl } from '../../../env/env'

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(8)
  const { data } = useHTTP(BaseUrl)
  const lastItemIndex = currentPage * postsPerPage
  const firstItemIndex = lastItemIndex - postsPerPage
  const pagination = data.slice(firstItemIndex, lastItemIndex)
  return (
    <div><Cards
      pagination={pagination}
      setPostsPerPage={setPostsPerPage} />
      <Pagination
        pagination={pagination}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /></div>
  )
}

export default Home
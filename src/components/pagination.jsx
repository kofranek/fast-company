import React from 'react'
import _ from  'lodash'

const Pagination = (props) => {
  const { itemsCount, pageSize } = props
  const pageCount=Math.ceil(itemsCount/pageSize)
  //console.log('pagination pageCount',pageCount)
  if (pageCount===1) return null
  //1,2,3... pageCount
  const pages = _.range(1,pageCount+1)
  //console.log('pagination pages=',pages)
  return <nav>
    <ul className="pagination">
      {pages.map((page)=>(
        <li className="page-item" key={page}>
          <a className="page-link">{page}</a>
        </li>
      ))}
    </ul>
  </nav>
}

export default Pagination

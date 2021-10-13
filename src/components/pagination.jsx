import React from 'react'
import _ from 'lodash'

const Pagination = ({ onPageChange, itemsCount, pageSize, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize)
  //console.log('pagination pageCount',pageCount)
  console.log('pagination currentPage=', currentPage)

  if (pageCount === 1) return null

  //1,2,3... pageCount
  const pages = _.range(1, pageCount + 1)
  //console.log('pagination pages=',pages)
  return <nav>
    <ul className="pagination">
      { pages.map((page) => (
        <li className={ 'page-item ' + (page === currentPage ? 'active' : '') } key={ page }>
          <a className="page-link" onClick={ () => onPageChange(page) }>{ page }</a>
        </li>
      )) }
    </ul>
  </nav>
}

export default Pagination

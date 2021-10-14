import React, { useState } from 'react'
import Pagination from './pagination'
import User from './user'
import { paginate } from '../utils/paginate'
import PropTypes from 'prop-types'
import api from '../API'
import GroupList from './groupList'

const Users = ({ users: allUsers, ...rest }) => {

  const count = allUsers.length
  const pageSize = 4
  const [currentPage, setCurrentPage] = useState(1)
  const [professions] = useState(api.professions.fetchAll())
  const handlePageChange = (pageIndex) => {
    //console.log('page:', pageIndex)
    setCurrentPage(pageIndex)
  }
  const handleProfessionSelect = (params) => {
    console.log('handelProessionSelect', params)
  }
  console.log('users professions=', professions)
  let users = paginate(allUsers, currentPage, pageSize)

  if (users.length === 0) {
    console.log('currentPage=', currentPage)
    if (currentPage > 1) {
      handlePageChange(currentPage - 1)
      users = paginate(allUsers, currentPage, pageSize)
    }
  }

  function tableRender () {
    if (count === 0) return
    return (
      <>
        <GroupList items={ professions } onItemSelect={ handleProfessionSelect }/>
        <table className={ 'table table-sm' }>
          <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
          </tr>
          </thead>
          {/*<tbody>{ rowRender() }</tbody>*/ }
          <tbody>
          { users.map((row) => (
            <User
              key={ row._id }
              { ...row }
              { ...rest }
              // onDelete={ onDelete }
              // onToggleBookmark={ onToggleBookmark }
            />
          )) }
          </tbody>
        </table>

        <Pagination
          itemsCount={ count }
          pageSize={ pageSize }
          currentPage={ currentPage }
          onPageChange={ handlePageChange }
        />
      </>
    )
  }

  //console.log('users.length=', users.length, 'users=', users)
  return (
    <>
      { tableRender() }
    </>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
}

export default Users
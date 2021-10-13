import React from 'react'
import Pagination from './pagination'
import User from './user'

const Users = ({ users, ...rest }) => {
  console.log('Users rest=', rest)
  const count = users.length
  const pageSize = 4
  const handlePage = (pageIndex) =>{
    console.log('page:', pageIndex)
  }
  function tableRender () {
    if (count === 0) return
    return (
      <>
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
          itemsCount = {count}
          pageSize = {pageSize}
          onPageChange = {handlePage}

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

export default Users
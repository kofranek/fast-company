import React from 'react'
import User from './user'

const Users = ({ users, onDelete, onToggleBookmark }) => {
//console.log('Users props=',props)
  function tableRender () {
    if (users.length === 0) return
    return (
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
            // _id={ row._id }
            // name={ row.name }
            // qualities={ row.qualities }
            // profession={ row.profession }
            // completedMeetings={ row.completedMeetings }
            // rate={ row.rate }
            // bookmark={ row.bookmark }

            { ...row }
            onDelete={ onDelete }
            onToggleBookmark={ onToggleBookmark }

          />
        )) }
        </tbody>
      </table>
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
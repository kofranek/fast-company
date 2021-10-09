import React, { useState } from 'react'
import User from './user'
import api from '../API'
import SearchStatus from './searchStatus'

// const Users = ({ users, ...rest }) => {
const Users = () => {
  const [users, setUsers] = useState(initUsers())

  function initUsers () {
    const usrs = api.users.fetchAll()
    const newUsrs = usrs.map(el => ({ ...el, bookmark: false }))
    //console.log('newUsrs',newUsrs)
    return newUsrs
  }

  function initBookmarks () {
    return users.map((el) => (
      { _id: el._id, selected: false }
    ))
  }

  // const russianPhrasesRender = number => {
  //   if (number === 0) {
  //     return <span className={ 'badge bg-danger' }>Никто с тобой не тусанет</span>
  //   }
  //   const variableStringPart =
  //     number === 1 || number > 4 ? 'человек тусанет' : 'человека тусанут'
  //   const russianPhrase = number + ' ' + variableStringPart + ' с тобой сегодня'
  //   return <span className={ 'badge bg-primary' }> { russianPhrase } </span>
  // }

  function handleDelete (indx) {
    setUsers(users.filter(user => user._id !== indx))
  }

  function handleBookmark (id) {
    //console.log('handleBookmark id=', id)
    users.forEach(el => {
      if (el._id === id) {
        el.bookmark = !el.bookmark
      }
    })
    //users[index].selected = !users[index].selected
    setUsers(users.filter(user => true))
  }

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
            _id={ row._id }
            name={ row.name }
            qualities={ row.qualities }
            profession={ row.profession }
            completedMeetings={ row.completedMeetings }
            rate={ row.rate }
            bookmark={ row.bookmark }
            onDelete={ handleDelete }
            onToggleBookmark={ handleBookmark }

          />
        )) }
        </tbody>
      </table>
    )
  }

  //console.log('users.length=', users.length, 'users=', users)
  return (
    <>
      <SearchStatus
           length = {users.length}
      />
      {/*{ russianPhrasesRender(users.length) }*/}
      { tableRender() }
    </>
  )
}

export default Users
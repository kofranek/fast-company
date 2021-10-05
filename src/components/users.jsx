import React, { useState } from 'react'
import User from './user'
import api from '../API'

// const Users = ({ users, ...rest }) => {
const Users = () => {
  const [users, setUsers] = useState(initUsers())

  function initUsers () {
    const usrs = api.users.fetchAll()
    const newUsrs = usrs.map(el => ({ ...el, selected: false }))
    //console.log('newUsrs',newUsrs)
    return usrs
  }

  function initBookmarks () {
    return users.map((el) => (
      { _id: el._id, selected: false }
    ))
  }

  const russianPhrasesRender = number => {
    if (number === 0) {
      return <span className={ 'badge bg-danger' }>Никто с тобой не тусанет</span>
    }
    const variableStringPart =
      number === 1 || number > 4 ? 'человек тусанет' : 'человека тусанут'
    const russianPhrase = number + ' ' + variableStringPart + ' с тобой сегодня'
    return <span className={ 'badge bg-primary' }> { russianPhrase } </span>
  }

  function handleDelete (indx) {
    setUsers(users.filter(user => user._id !== indx))
  }

  function handleSelected (id) {
    users.forEach(el => {
      if (el._id === id) {
        el.selected = !el.selected
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
            key={row._id}
            _id={ row._id }
            name={ row.name }
            qualities={ row.qualities }
            profession={ row.profession }
            completedMeetings={ row.completeMeetings }
            rate={ row.rate }
            onDelete={ row.onDelete }
            bookmark={ row.bookmarks }
            onToggleBookMark={ row.onToggleBookMark }
          />
        )) }
        </tbody>
      </table>
    )
  }

  //console.log('users.length=', users.length, 'users=', users)
  return (
    <>
      { russianPhrasesRender(users.length) }
      { tableRender() }
    </>
  )
}

export default Users
import React, { useState } from 'react'
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import api from './API'

// function App(){
//   const [users, setUsers] = useState(api.users.fetchAll())
//   const handleDelete = (userId)=>{}
//   const handleToggleBookmark = (id)=>{}
// }

const App = () => {
  const [users, setUsers] = useState(initUsers())


  function initUsers(){
    const usrs=api.users.fetchAll()
    const newUsrs=usrs.map(el=>({...el, selected:false}))
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

  function handleSelected (index) {
    users[index].selected=!users[index].selected
    setUsers(users.filter(user=>true))
  }

  function iconSelected (selected) {
    //console.log('***bookMarks=', bookMarks,'*****')
    if (selected) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             className="bi bi-bookmark-fill" viewBox="0 0 16 16">
          <path
            d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
        </svg>
      )
    } else return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark"
           viewBox="0 0 16 16">
        <path
          d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
      </svg>
    )
  }

  const rowRender = () => {
    return users.map((row, index) => {
      return (
        <tr key={ row._id }>
          <td>{ row.name }</td>
          <td>{ row.qualities
            .map(el =>
                   <span
                     className={ 'badge m-1 bg-' + el.color }
                     key={ el._id }
                   >{ el.name }</span>) }</td>
          <td>{ row.profession.name }</td>
          <td>{ row.completedMeetings }</td>
          <td>{ row.rate } / 5</td>
          <td>
            <a href="#" onClick={ () => handleSelected(index) }>
              { iconSelected(row.selected) }
            </a>
          </td>
          <td>
            <button
              className={ 'btn btn-danger' }
              onClick={ () => handleDelete(row._id) }
            >
              delete
            </button>
          </td>
        </tr>
      )
    })
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
        <tbody>{ rowRender() }</tbody>
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

export default App


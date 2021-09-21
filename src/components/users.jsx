import React, { useState } from 'react'
import api from '../API'

const Usrs = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const russianPhrasesRender = number => {
    if (number === 0) {
      return <span className={'badge bg-danger'}>Никто с тобой не тусанет</span>
    }
    const variableStringPart =
      number === 1 || number > 4 ? 'человек тусанет' : 'человека тусанут'
    const russianPhrase = number + ' ' + variableStringPart + ' с тобой сегодня'
    return <span className={'badge bg-primary'}> {russianPhrase} </span>
  }

  function handleDelete (indx) {
    console.log('delete item index=', indx)

    console.log('users.length before deletion', users.length, 'users=', users) //12
    setUsers(users.splice(indx, 1)) //not working - after deletion bad rendering
    console.log(
      'user.length after deletions deletion',
      users.length,
      'users=',
      users
    ) //11
  }

  const rowRender = () => {
    return users.map((row, index) => {
      return (
        <tr key={row._id}>
          <td>{row.name}</td>
          <td>{row.qualities[0].name}</td>
          <td>{row.profession.name}</td>
          <td>{row.completedMeetings}</td>
          <td>{row.rate} / 5</td>
          <td>
            <button
              className={'btn btn-danger'}
              onClick={() => handleDelete(index)}
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
      <table className={'table'}>
        <thead>
          <tr>
            <th scope='col'>Имя</th>
            <th scope='col'>Качества</th>
            <th scope='col'>Профессия</th>
            <th scope='col'>Встретился, раз</th>
            <th scope='col'>Оценка</th>
            <th scope='col'> </th>
          </tr>
        </thead>
        <tbody>{rowRender()}</tbody>
      </table>
    )
  }

  console.log('users.length=', users.length, 'users=', users)

  //console.log( api.users.fetchProfessions())
  //console.log( api.users.fetchQualities())
  return (
    <>
      {russianPhrasesRender(users.length)}
      {tableRender()}
    </>
  )
}

export default Usrs

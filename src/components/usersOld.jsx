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
    setUsers(users.filter(users => users._id !== indx))
  }

  const rowRender = () => {
    return users.map((row, index) => {
      return (
        <tr key={row._id}>
          <td>{row.name}</td>
          <td>{row.qualities
            .map(el=>
                   <span
                     className={'badge m-1 bg-'+el.color}
                     key={el._id}
                   >{el.name}</span>)}</td>
          <td>{row.profession.name}</td>
          <td>{row.completedMeetings}</td>
          <td>{row.rate} / 5</td>
          <td>
            <button
              className={'btn btn-danger'}
              onClick={() => handleDelete(row._id)}
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

  // console.log('users.length=', users.length, 'users=', users)
  return (
    <>
      {russianPhrasesRender(users.length)}
      {tableRender()}
    </>
  )
}

export default Usrs

import React from 'react'
import api from '../API'


const Usrs = () => {
  api.users.fetchAll()
  console.log( api.users.fetchAll())
  console.log( api.users.fetchProfessions())
  console.log( api.users.fetchQualities())
  return <h1>Users</h1>
}

export default Usrs

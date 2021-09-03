import React from 'react'
import api from '../API'

const Usrs = () => {
  api.users.fetchAll()
  return <h1>Users</h1>
}

export default Usrs

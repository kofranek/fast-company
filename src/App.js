import React, { useState } from 'react'
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import api from './API'

function App () {
  const [users, setUsers] = useState(initUsers())

  function initUsers () {
    const usrs = api.users.fetchAll()
    const newUsrs = usrs.map(el => ({ ...el, bookmark: false }))
    //console.log('newUsrs',newUsrs)
    return newUsrs
  }

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

  return (
    <div>
      <SearchStatus
        length={ users.length }
      />
      <Users
        onToggleBookmark={ handleBookmark }
        onDelete={ handleDelete }
        users={ users }
      />
    </div>
  );
}

export default App;
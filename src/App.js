import React, {useState, useEffect} from 'react'
import Users from './components/users'
//import SearchStatus from './components/searchStatus'
import api from './API'

function App() {
    const [users, setUsers] = useState()

    useEffect(() => {
        api.users.fetchAll().then((data) => initUsers(data));
    }, []);

    function initUsers(data) { //add to every user property bookmark
        const usrs = data
        //console.log('usrs',usrs)
        const newUsrs = usrs.map(el => ({...el, bookmark: false}))
        //console.log('newUsrs',newUsrs)
        setUsers(newUsrs)

    }

    function handleDelete(indx) {
        setUsers(users.filter(user => user._id !== indx))
    }

    function handleBookmark(id) {
        //console.log('handleBookmark id=', id)
        users.forEach(el => {
            if (el._id === id) {
                el.bookmark = !el.bookmark
            }
        })
        setUsers(users.filter(() => true))  //rerender all users
    }

    return (
        <div>
            {users && (
                <Users
                    onToggleBookmark={handleBookmark}
                    onDelete={handleDelete}
                    users={users}
                />
            )}

        </div>
    );
}

export default App;
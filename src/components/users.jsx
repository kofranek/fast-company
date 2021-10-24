import React, {useState, useEffect} from 'react'
import Pagination from './pagination'
import User from './user'
import {paginate} from '../utils/paginate'
import PropTypes from 'prop-types'
import api from '../API'
import GroupList from './groupList'
import SearchStatus from "./searchStatus";


const Users = ({users: allUsers, ...rest}) => {

    //const count = allUsers.length
    const pageSize = 2
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState(api.professions.fetchAll())
    const [selectedProf, setSelectedProf] = useState()
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    useEffect(() => {
        api.professions.fetchAll()
            .then((data) => setProfessions(data))
    }, [])

    const handleProfessionSelect = (item) => {
        setSelectedProf(item)
        //console.log('handelProfessionSelect', item)
    }
    //console.log('users professions=', professions)


    const filteredUsers = selectedProf
        ? allUsers.filter(usr => usr.profession === selectedProf)
        : allUsers
    const count = filteredUsers.length
    let users = paginate(filteredUsers, currentPage, pageSize)

    const clearFilter = () => {
        setSelectedProf(undefined)
    }

    //console.log('from users users=', users)


    if (users.length === 0) { //when the last page is active and we have deleted the last item from it
        if (currentPage > 1) {
            handlePageChange(currentPage - 1)
            users = paginate(allUsers, currentPage, pageSize)
        }
    }

    //className={"d-flex"}
    //className="d-flex flex-column flex-shrink-0 p-3"
    //classNames="d-flex flex-column"
    //className={"d-flex justify-content-center"}

    //console.log('Object.keys(professions).length',Object.keys(professions).length)

    function tableRender() {

        return (count > 0) &&
            (
                <div  className={"d-flex flex-row"}>
                    {(professions) && (
                        <div>
                            <GroupList
                                selectedItem={selectedProf}
                                items={professions}
                                onItemSelect={handleProfessionSelect}
                                // valueProperty = {'_id'}
                                // contentProperty = {'name'}
                            />
                            <button
                                className="btn btn-secondary mt-2"
                                onClick={clearFilter}
                            >Очистить
                            </button>
                        </div>
                    )}

                    <table className={'table table-sm'}>
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
                        {/*<tbody>{ rowRender() }</tbody>*/}
                        <tbody>
                        {users.map((row) => (
                            <User
                                key={row._id}
                                {...row}
                                {...rest}
                                // onDelete={ onDelete }
                                // onToggleBookmark={ onToggleBookmark }
                            />
                        ))}
                        </tbody>
                    </table>

                </div>
            )
    }

    //console.log('users.length=', users.length, 'users=', users)
    return (

        <div className="d-flex flex-column flex-shrink-0 p-3">
            <SearchStatus
                length={count}
            />
            <div>
                {tableRender()}
            </div>
            <div className={"d-flex justify-content-center"}>
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>

    )
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
}

export default Users
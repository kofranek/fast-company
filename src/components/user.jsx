import React from 'react';
import BookMark from './bookmark'
import Qualitie from './qualitie'
import PropTypes from 'prop-types'

const User = ({
                  name,
                  qualities,
                  profession,
                  completedMeetings,
                  rate,
                  bookmark,
                  onToggleBookmark,
                  _id,
                  onDelete,
              }) => {

    return (
        <tr>
            <td>{name}</td>
            <td>
                <Qualitie
                    _id={_id}
                    qualities={qualities}
                />
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate} / 5</td>
            <td>
                <BookMark bookmark={bookmark}
                          onToggleBookmark={onToggleBookmark}
                          _id={_id}
                />
            </td>
            <td>
                <button
                    className={'btn btn-danger'}
                    onClick={() => onDelete(_id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onToggleBookmark: PropTypes.func.isRequired,
    _id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default User;

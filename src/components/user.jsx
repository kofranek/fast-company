import React from 'react';
import BookMark from './bookmark'
import Qualitie from './qualitie'

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
  //console.log('user props', props)
  return (
    <tr>
      <td>{ name }</td>
      <td>
        <Qualitie
          _id={_id}
          qualities={qualities}
        />
      </td>
      <td>{ profession.name }</td>
      <td>{ completedMeetings }</td>
      <td>{ rate } / 5</td>
      <td>
        <BookMark bookmark={ bookmark }
                  onToggleBookmark={ onToggleBookmark }
                  _id={_id}
        />
      </td>
      <td>
        <button
          className={ 'btn btn-danger' }
          onClick={ () => onDelete(_id) }
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;

import React from 'react';
import Qualitie from './qualitie'
const User = (props) => {

  return (
    <tr key={ row._id }>
      <td>{ props.name }</td>
      <td>{ props.qualities
        .map(el => (
          <Qualities />
          )}
      </td>
      <td>{ props.profession.name }</td>
      <td>{ props.completedMeetings }</td>
      <td>{ row.rate } / 5</td>
      <td>
        <a href="#" onClick={ () => props.handleSelected(props._id) }>
          { iconSelected(props.selected) }
        </a>
      </td>
      <td>
        <button
          className={ 'btn btn-danger' }
          onClick={ () => props.handleDelete(props._id) }
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;

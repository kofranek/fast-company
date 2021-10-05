import React from 'react';

const User = (props) => {

  return (
    <tr key={ row._id }>
      <td>{ props.name }</td>
      <td>{ props.qualities
        .map(el =>
               <span
                 className={ 'badge m-1 bg-' + el.color }
                 key={ el._id }
               >{ el.name }</span>) }</td>
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

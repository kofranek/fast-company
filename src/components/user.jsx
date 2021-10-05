import React from 'react';

const User = (props) => {

  function iconSelected (selected) {
    //console.log('***bookMarks=', bookMarks,'*****')
    if (selected) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             className="bi bi-bookmark-fill" viewBox="0 0 16 16">
          <path
            d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
        </svg>
      )
    } else return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark"
           viewBox="0 0 16 16">
        <path
          d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
      </svg>
    )
  }

  return (
    <tr>
      <td>{ props.name }</td>
      <td>
        {props.qualities[0].name}
        {/*{ props.qualities*/}
        {/*.map(el =>*/}
        {/*       <span*/}
        {/*         className={ 'badge m-1 bg-' + el.color }*/}
        {/*         key={ el._id }*/}
        {/*       >{ el.name }</span>) }*/}
      </td>
      <td>{ props.profession.name }</td>
      <td>{ props.completedMeetings }</td>
      <td>{ props.rate } / 5</td>
      <td>
        <a
          href="#"
          // onClick={ () => props.handleSelected(props._id) }
          onClick={()=>console.log('item id ',props._id,' with name ',props.name,' will be selected')}
        >
          { iconSelected(props.selected) }
        </a>
      </td>
      <td>
        <button
          className={ 'btn btn-danger' }
          onClick={()=>console.log('item id ',props._id,' with name ',props.name,' will be deleted')}
          // onClick={ () => props.handleDelete(props._id) }
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;

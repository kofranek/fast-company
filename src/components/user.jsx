import React from 'react';
import BookMark from './bookmark'
import Qualitie from './qualitie'

const User = (props) => {
  // console.log('user props', props)
  return (
    <tr>
      <td>{ props.name }</td>
      <td>
        <Qualitie
          _id={props._id}
          qualities={props.qualities}
        />
      </td>
      <td>{ props.profession.name }</td>
      <td>{ props.completedMeetings }</td>
      <td>{ props.rate } / 5</td>
      <td>
        <BookMark bookmark={ props.bookmark }
                  onToggleBookmark={ props.onToggleBookmark }
                  _id={props._id}
                  //onClick={()=>props.onToggleBookmark(props._id)}
        />
      </td>
      <td>
        <button
          className={ 'btn btn-danger' }
          //onClick={()=>console.log('item id ',props._id,' with name ',props.name,' will be deleted')}
          // onClick={ () => props.handleDelete(props._id) }
          onClick={ () => props.onDelete(props._id) }
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;

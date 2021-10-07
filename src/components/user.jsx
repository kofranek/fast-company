import React from 'react';
import BookMark from './bookmark'

const User = (props) => {
  // console.log('user props', props)

  return (
    <tr>
      <td>{ props.name }</td>
      <td>
        {/*{props.qualities[0].name}*/ }
        { props.qualities
          .map(el =>
                 <span
                   className={ 'badge m-1 bg-' + el.color }
                   key={ el._id }
                 >{ el.name }</span>) }
      </td>
      <td>{ props.profession.name }</td>
      <td>{ props.completedMeetings }</td>
      <td>{ props.rate } / 5</td>
      <td>
        <BookMark bookmark={ props.bookmark }
                  onClick={ () => console.log('cliked at props._id', props._id) }
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

import React from 'react';
import PropTypes from 'prop-types'

const GroupList = ({ items }) => {
  console.log('GroupList items=',items)
  console.log('GrouPlist: Object.keys(items)=',Object.keys(items))
  console.log('names=',
    Object.keys(items).map((el)=>(
      items[el].name
    ))
  )
  console.log('_id=',
    Object.keys(items).map((el)=>(
      items[el]._id
    ))
  )

  return (
    <ul className="list-group">
      {Object.keys(items).map((item)=>(
        <li key={items[item]._id} className={"list-group-item"}>{items[item].name}</li>
      ))}
    </ul>
  );
};

GroupList.propTypes = {
  items: PropTypes.object.isRequired,
}
export default GroupList;


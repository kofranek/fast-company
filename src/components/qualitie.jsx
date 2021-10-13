import React from 'react'

const Qualitie = ({qualities}) => {
  //console.log('Qualitie props', props)
  return (
    qualities
      .map(el =>
             <span
               className={ 'badge m-1 bg-' + el.color }
               key={ el._id }
             >{ el.name }</span>)
  )
}
export default Qualitie
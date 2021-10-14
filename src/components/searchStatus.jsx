import React from 'react'

const SearchStatus = (props) => {
//console.log('SearchStatus', props)

  const russianPhrasesRender = number => {
    if (number === 0) {
      return <span className={ 'badge bg-danger' }>Никто с тобой не тусанет</span>
    }
    const variableStringPart =
      number === 1 || number > 4 ? 'человек тусанет' : 'человека тусанут'
    const russianPhrase = number + ' ' + variableStringPart + ' с тобой сегодня'
    return <span className={ 'badge bg-primary' }> { russianPhrase } </span>
  }

  return (
    russianPhrasesRender(props.length)
  )

}

export default SearchStatus
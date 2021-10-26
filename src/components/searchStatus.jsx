import React from 'react'

const SearchStatus = (props) => {
//console.log('SearchStatus', props)

    const russianPhrasesRender = number => {
        //console.log('searchstatut number=',number)
        if (number === 0) {
            return (
                <h2>
                    <span className={'badge bg-danger'}>Никто с тобой не тусанет</span>
                </h2>
            )
        }
        const variableStringPart =
            number === 1 || number > 4 ? 'человек тусанет' : 'человека тусанут'
        const russianPhrase = number + ' ' + variableStringPart + ' с тобой сегодня'
        return (
            <h2>
                <span className={'badge bg-primary'}> {russianPhrase} </span>
            </h2>
        )
    }

    return (

        russianPhrasesRender(props.length)


    )

}

export default SearchStatus
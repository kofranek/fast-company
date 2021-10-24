//import _ from 'lodash'

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize
    //console.log('from paginate pageNumber=',pageNumber,'startIndex=',startIndex,'slice=',items.slice(startIndex, startIndex + pageSize))
    //return _(items).slice(startIndex).take(pageSize).value()
    return items.slice(startIndex, startIndex + pageSize) //vanilla javascript solution
}
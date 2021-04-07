export const changeCellValue = value => {
  return {
    type: 'NEW_CELL_VALUE',
    payload: value
  }
}

export const changeCellsArray = arr => {
  return {
    type: 'NEW_CELLS',
    payload: arr
  }
}

export const changeFilter = value => {
  return {
    type: 'NEW_FILTER_VALUE',
    payload: value
  }
}

export const changePage = pageNumber => {
  return {
    type: 'NEW_PAGE_VALUE',
    payload: pageNumber
  }
}

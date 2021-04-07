export const newCellValue = value => {
  return {
    type: 'CELL_VALUE',
    payload: value
  }
}

export const currentCellsArray = arr => {
  return {
    type: 'CELLS_CURRENT',
    payload: arr
  }
}

export const currentPage = pageNumber => {
  return {
    type: 'PAGE_CURRENT',
    payload: pageNumber
  }
}
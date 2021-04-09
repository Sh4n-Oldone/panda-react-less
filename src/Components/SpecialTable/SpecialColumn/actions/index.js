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

export const changePage = (value) => {
  return {
    type: 'CHANGE_PAGE_VALUE',
    payload: value
  }
}

export const addNewCell = (pos) => {
  return {
    type: 'NEW_CELL',
    payload: { pos, value: ''}
  }
}

export const loadUserCells = (cellsArr) => {
  return {
    type: 'LOAD_CELLS',
    payload: cellsArr
  }
}

export const toTopFilter = () => {
  return {
    type: 'FILTER_TO_TOP'
  }
}

export const toDownFilter = () => {
  return {
    type: 'FILTER_TO_DOWN'
  }
}
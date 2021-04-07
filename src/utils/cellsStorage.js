const CELLS = 'localCellsStorage'

export const setLocalCells = (data) => {
  localStorage.setItem(CELLS, JSON.stringify(data))
}

export const getLocalCells = () => {
  return localStorage.getItem(CELLS)
}

export const removeLocalCells = () => {
  localStorage.removeItem(CELLS)
}
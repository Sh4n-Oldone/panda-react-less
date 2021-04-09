const CELLS = 'localColumnsStorage'

export const setLocalData = (data) => {
  localStorage.setItem(CELLS, JSON.stringify(data))
}

export const getLocalData = () => {
  return localStorage.getItem(CELLS)
}

export const removeLocalData = () => {
  localStorage.removeItem(CELLS)
}
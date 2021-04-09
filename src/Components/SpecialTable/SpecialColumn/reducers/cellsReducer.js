// const defaultCells = [{pos: '1', value: ''}, {pos: '2', value: ''}, {pos: '3', value: ''}]

const defaultCells = []

export const cellsReducer = (state = defaultCells, action) => {
  switch(action.type) {
    case 'NEW_CELL':
      return [...state, action.payload]
    case 'NEW_CELL_VALUE':
      return [...state, action.payload]
    case 'NEW_CELLS':
      return action.payload
    case 'LOAD_CELLS':
      return action.payload
    default:
      return state
  }
}
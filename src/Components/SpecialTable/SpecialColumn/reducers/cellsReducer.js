const defaultCells = [{pos: 'default1', value: ''}, {pos: 'default2', value: ''}, {pos: 'default3', value: ''}]

// const defaultCells = []

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
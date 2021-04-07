export const cellReducer = (state = '', action) => {
  switch(action.type) {
    case 'NEW_CELL_VALUE':
      return action.payload
    default:
      return state
  }
}
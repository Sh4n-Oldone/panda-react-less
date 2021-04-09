export const filterReducer = (state = '', action) => {
  switch(action.type) {
    case 'NEW_FILTER_VALUE':
      return action.payload
    default:
      return state
  }
}
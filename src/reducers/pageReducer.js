export const pageReducer = (state = 1, action) => {
  switch(action.type) {
    case 'CHANGE_PAGE_VALUE':
      return action.payload
    default:
      return state
  }
}
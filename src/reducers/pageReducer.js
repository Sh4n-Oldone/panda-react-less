export const pageReducer = (state = 1, action) => {
  switch(action.type) {
    case 'INCREASE_PAGE_VALUE':
      return state + 1
    case 'DECREASE_PAGE_VALUE':
      return state - 1
    default:
      return state
  }
}
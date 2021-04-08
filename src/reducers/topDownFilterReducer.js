export const topDownFilterReducer = (state = 'default', action) => {
  switch(action.type) {
    case 'FILTER_TO_TOP':
      return 'toTop'
    case 'FILTER_TO_DOWN':
      return 'toDown'
    default:
      return state
  }
}
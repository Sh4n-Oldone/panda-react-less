import {cellsReducer} from './cellsReducer'
import {filterReducer} from './filterReducer'
import {pageReducer} from './pageReducer'
import {topDownFilterReducer} from './topDownFilterReducer'
import {combineReducers} from 'redux'

const reducers = combineReducers({
  cellsReducer,
  filterReducer,
  topDownFilterReducer,
  pageReducer
})

export default reducers
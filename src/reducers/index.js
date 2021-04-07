import {cellsReducer} from './cellsReducer'
import {cellReducer} from './cellReducer'
import {filterReducer} from './filterReducer'
import {pageReducer} from './pageReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  cellsReducer,
  filterReducer,
  cellReducer,
  pageReducer
})

export default reducers
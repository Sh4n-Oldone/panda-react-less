import React, { useEffect } from 'react'
import './SpecialColumn.css'
import SpecialCell from '../SpecialCell/SpecialCell'
import Pagination from '../Pagination/Pagination'
import { v4 as uuid } from 'uuid'
import { connect, useDispatch } from 'react-redux'
import {
  changeFilter, 
  changeCellsArray, 
  toTopFilter,
  toDownFilter,
  addNewCell, 
  loadUserCells
} from '../../actions'
import paginationSlice from '../../utils/paginationSlice'
import config from '../../utils/config.json'
import { setLocalCells, getLocalCells, removeLocalCells } from '../../utils/cellsStorage'

const SpecialColumn = ({cells, page, filterState, filterTopDown}) => {
  const dispatch = useDispatch()
  const handleChange = (event) => dispatch(changeFilter(event.target.value))
  const handleFilter = () => {
    if (filterState === '') {
      if (filterTopDown === 'toTop') {
        return cells.sort((a, b) => b.value.length - a.value.length)
      }
      if (filterTopDown === 'toDown') {
        return cells.sort((a, b) => a.value.length - b.value.length)
      }
    }
    return cells.filter(item => 
            item.value.toUpperCase().includes(filterState.toUpperCase()) ? item : ''
          )
  }
  const handleCellChanges = (pos, newValue) => {
    const newarr = cells.filter(item => item.pos === pos ? item.value=newValue : item)
    dispatch(changeCellsArray(newarr))
  }
  const handleAddCell = () => {
    dispatch(addNewCell(uuid()))
  }
  const handleRemoveCell = (pos) => {
    const newarr = cells.filter(item => item.pos === pos ? '' : item)
    dispatch(changeCellsArray(newarr))
  }
  const handleSaveStatusToLocal = (data) => {
    setLocalCells(data)
  }
  const changeFilterTopOrDown = () => {
    if(filterTopDown === 'toDown') {
      dispatch(toTopFilter())
    }
    if(filterTopDown === 'toTop') {
      dispatch(toDownFilter())
    }
    if(filterTopDown === 'default') {
      dispatch(toTopFilter())
    }
  }

  useEffect(() => {
    dispatch(loadUserCells(JSON.parse(getLocalCells())))
  }, [])

  return (
    <section
      className='special-column'
    >

      <input
        type='text'
        className='special-cell'
        value={filterState}
        onChange={handleChange}
        name='filterInput'
        placeholder='Filter'
      />

      <button 
        onClick={handleAddCell}
      >Add New Cell</button>
      <button 
        onClick={() => {handleSaveStatusToLocal(cells)}}
      >Save changes</button>

      <button
        onClick={() => {changeFilterTopOrDown()}}
      >MY TABLE</button>

      <ul 
        className='special-column__cells-list'
      >
        {handleFilter().map((cell) => 
          <SpecialCell 
            key={cell.pos}
            value={cell.value}
            pos={cell.pos}
            handleChange={handleCellChanges}
            removeCell={handleRemoveCell}
          />
        )}
      </ul>

      <Pagination />

    </section>
  )
}

const mapStateToProps = (state) => {
  return { 
    cells: state.cellsReducer,
    page: state.pageReducer,
    filterState: state.filterReducer,
    filterTopDown: state.topDownFilterReducer
   }
}

export default connect(mapStateToProps)(SpecialColumn)
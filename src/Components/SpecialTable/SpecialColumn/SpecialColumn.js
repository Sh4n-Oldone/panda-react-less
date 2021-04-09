import React, { useEffect } from 'react'
import './SpecialColumn.css'
import SpecialCell from './SpecialCell/SpecialCell'
import Pagination from './Pagination/Pagination'
import { v4 as uuid } from 'uuid'
import { connect, useDispatch } from 'react-redux'
import {
  changeFilter, 
  changeCellsArray, 
  toTopFilter,
  toDownFilter,
  addNewCell, 
  loadUserCells
} from './actions'
import paginationSlice from '../utils/paginationSlice'
import config from '../utils/config.json'

const SpecialColumn = ({cells, page, filterState, filterTopDown, tableName, stateCallback, localState}) => {
  const dispatch = useDispatch()
  const itemsOnPage = config.CELLS_ON_PAGE
  const handleChange = (event) => dispatch(changeFilter(event.target.value))
  const handleFilter = () => {
    const filteredCells = cells.filter(item => 
      item.value.toUpperCase().includes(filterState.toUpperCase()) ? item : ''
    )
    if (filterState === '') {
      if (filterTopDown === 'toTop') {
        const cellsArray = cells.sort((a, b) => b.value.length - a.value.length)
        return paginationSlice(cellsArray, page, itemsOnPage)
      }
      if (filterTopDown === 'toDown') {
        const cellsArray = cells.sort((a, b) => a.value.length - b.value.length)
        return paginationSlice(cellsArray, page, itemsOnPage)
      }
    }
    if(filterTopDown === 'toTop') {
      const cellsArray = filteredCells.sort((a, b) => b.value.length - a.value.length)
      return paginationSlice(cellsArray, page, itemsOnPage)
    }
    if(filterTopDown === 'toDown') {
      const cellsArray = filteredCells.sort((a, b) => a.value.length - b.value.length)
      return paginationSlice(cellsArray, page, itemsOnPage)
    }
    return paginationSlice(filteredCells, page, itemsOnPage)
  }
  const handleCellChanges = (pos, newValue) => {
    const newarr = cells.filter(item => item.pos === pos ? item.value=newValue : item)
    dispatch(changeCellsArray(newarr))
    stateCallback(tableName, cells)
  }
  const handleAddCell = () => {
    dispatch(addNewCell(uuid()))
  }
  const handleRemoveCell = (pos) => {
    const newarr = cells.filter(item => item.pos === pos ? '' : item)
    dispatch(changeCellsArray(newarr))
  }
  // const handleSaveStatusToLocal = (data) => {
  //   setLocalCells(data)
  // }
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
    const globalStateData = JSON.parse(localState)
    if(localState) {
      dispatch(changeCellsArray(
        globalStateData.find((obj, index) => {
          if (obj.table === tableName) {
            return globalStateData[index]
          }
        }).values
      ))
    }
  }, [])

  return (
    <section
      className='special-column'
    >
      
      <div className='special-column__control-block'>
        <input
          type='text'
          className='special-column__special-cell'
          value={filterState}
          onChange={handleChange}
          name='filterInput'
          placeholder='Filter'
        />

        <button 
          onClick={handleAddCell}
        >Add New Cell</button>
        {/* <button 
          onClick={() => {handleSaveStatusToLocal(cells)}}
        >Save changes</button> */}
      </div>

      <div className='special-column__cells-block'>
        <button
          onClick={() => {changeFilterTopOrDown()}}
          className='special-column__cells-block_button'
        >{tableName}</button>

        <ul 
          className='special-column__cells-list'
        >
          {handleFilter()?.map((cell) => 
            <SpecialCell 
              key={cell.pos}
              value={cell.value}
              pos={cell.pos}
              handleChange={handleCellChanges}
              removeCell={handleRemoveCell}
            />
          )}
        </ul>
      </div>

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
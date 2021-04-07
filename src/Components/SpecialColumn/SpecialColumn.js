import React, { useEffect } from 'react'
import './SpecialColumn.css'
import SpecialCell from '../SpecialCell/SpecialCell'
import Pagination from '../Pagination/Pagination'
import { v4 as uuid } from 'uuid';
import { connect, useDispatch } from 'react-redux'
import {changeFilter, changeCellsArray, changeCellValue, addNewCell, loadUserCells} from '../../actions'
import paginationSlice from '../../utils/paginationSlice'
import config from '../../utils/config.json'
import { setLocalCells, getLocalCells, removeLocalCells } from '../../utils/cellsStorage'

const SpecialColumn = ({cells, page, filterState}) => {
  const dispatch = useDispatch()
  const handleChange = (event) => dispatch(changeFilter(event.target.value))
  const handleFilter = () => {
    if (filterState === '') {
      return cells
    }
    return cells.filter(item => 
            item.value.toUpperCase().includes(filterState.toUpperCase()) ? item : ''
          )
  }
  const handleCellChanges = (id, newValue) => {
    const newarr = cells.filter(item => item.id === id ? item.value=newValue : item)
    dispatch(changeCellsArray(newarr))
  }
  const addCell = () => {
    dispatch(addNewCell(uuid()))
  }
  const handleRemoveCell = (id) => {
    const newarr = cells.filter(item => item.id === id ? '' : item)
    dispatch(changeCellsArray(newarr))
  }
  const saveStatusToLocal = (data) => {
    setLocalCells(data)
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

      <button onClick={addCell}>Add New Cell</button>
      <button onClick={() => {saveStatusToLocal(cells)}}>Save changes</button>

      <ul className='special-column__cells-list'>
        {handleFilter().map((cell) => 
          <SpecialCell 
            key={cell.id}
            value={cell.value}
            id={cell.id}
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
    filterState: state.filterReducer
   }
}

export default connect(mapStateToProps)(SpecialColumn)
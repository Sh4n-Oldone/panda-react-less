import React from 'react'
import './SpecialColumn.css'
import SpecialCell from '../SpecialCell/SpecialCell'
import { connect, useDispatch } from 'react-redux'
import {changeFilter, changePage, changeCellsArray, changeCellValue} from '../../actions'
import paginationSlice from '../../utils/paginationSlice'
import config from '../../utils/config.json'

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
      />

      {handleFilter().map((cell, i) => 
        <SpecialCell 
          key={i}
          value={cell.value}
        />
      )}

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
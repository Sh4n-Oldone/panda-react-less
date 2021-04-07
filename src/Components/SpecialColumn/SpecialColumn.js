import React, { useState } from 'react'
import './SpecialColumn.css'
import SpecialCell from '../SpecialCell/SpecialCell'
import { connect } from 'react-redux'
import paginationSlice from '../../utils/paginationSlice'
import config from '../../utils/config.json'


const SpecialColumn = props => {
  const [inputFilterState, setInputFilterState] = useState('')
  const handleChange = (event) => setInputFilterState(event.target.value)

  const handleFilter = () => {
    if (inputFilterState === '') {
      return props.cells
    }
    return props.cells.filter(item => 
            item.value.toUpperCase().includes(inputFilterState.toUpperCase()) ? item : ''
          )
  }
  

  return (
    <section
      className='special-column'
    >
      <input
        type='text'
        className='special-cell'
        value={inputFilterState}
        onChange={handleChange}
        name='filterInput'
      />

      {handleFilter().map((cell, i) => 
        <SpecialCell 
          key={i}
          cellName={cell.value}
          value={cell.value}
        />
      )}

    </section>
  )
}

const mapStateToProps = (state) => {
  return { 
    cells: state.cells,
    page: state.currentPage
   }
}

export default connect(mapStateToProps)(SpecialColumn)
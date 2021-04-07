import React, { useState } from 'react'
import './SpecialCell.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { newCellValue } from '../../actions'

const SpecialCell = ({cellName, value}) => {
  const [inputCellState, setInputCellState] = useState('')
  const handleChange = (event) => setInputCellState(event.target.value)

  

  return (
    <li className='special-cell'>
      <input
        type='text'
        className='special-cell__input'
        value={value}
        onChange={handleChange}
        name={cellName}
      />
    </li>
  )
}

const mapStateToProps = (state) => {
  return { 
    cell: state.cell
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCellValue: bindActionCreators(newCellValue, dispatch)
  }
}

export default connect(mapStateToProps)(SpecialCell)
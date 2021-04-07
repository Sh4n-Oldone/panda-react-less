import React from 'react'
import './SpecialCell.css'
// import { connect, useDispatch } from 'react-redux'
// import {changeCellValue} from '../../actions'

const SpecialCell = ({id, value,  removeCell, handleChange}) => {
  return (
    <li className='special-cell'>
      <input
        type='text'
        className='special-cell__input'
        value={value}
        onChange={(e) => {handleChange(id, e.target.value)}}
      />
      <button 
        onClick={() => {removeCell(id)}}
        className='special-cell__del-button'
      >del</button>
    </li>
  )
}

export default SpecialCell
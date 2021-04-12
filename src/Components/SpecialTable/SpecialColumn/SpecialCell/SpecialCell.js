import React from 'react'
import './SpecialCell.css'

const SpecialCell = ({pos, value, removeCell, handleChange}) => {
  return (
    <li className='special-cell'>
      <input
        type='text'
        className='special-cell__input'
        value={value}
        onChange={(e) => {handleChange(pos, e.target.value)}}
      />
      <button 
        onClick={() => {removeCell(pos)}}
        className='special-cell__del-button'
      ></button>
    </li>
  )
}

export default SpecialCell
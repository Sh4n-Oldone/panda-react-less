import React, { useEffect, useState } from 'react'
import './SpecialCell.css'

export default function SpecialCell({cellName, filter}) {
  const [inputCellState, setInputCellState] = useState('')
  const [isCellVisible, setIsCellVisible] = useState(true)
  const handleChange = (event) => setInputCellState(event.target.value)
  const handleFilter = () => {
    if (inputCellState.toUpperCase().search(filter.toString().toUpperCase()) === -1) {
      setIsCellVisible(false)
    }
  }

  useEffect(() => {
    handleFilter()
  }, [filter, inputCellState])

  return (
    <li className={`special-cell${isCellVisible ? '' : ' special-cell_disabled'}`}>
      <input
        type='text'
        className='special-cell__input'
        value={inputCellState}
        onChange={handleChange}
        name={cellName}
      />
    </li>
  )
}

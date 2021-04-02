import React, { useEffect, useState } from 'react'
import './SpecialColumn.css'
import SpecialCell from '../SpecialCell/SpecialCell'


export default function SpecialColumn({ cellsArr }) {
  const [inputFilterState, setInputFilterState] = useState('')

  const handleChange = (event) => setInputFilterState(event.target.value)

  

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

      {cellsArr.map(cell => 
        <SpecialCell 
          key={}
          cellName={}
          filter={inputFilterState}
        />
      )}

    </section>
  )
}

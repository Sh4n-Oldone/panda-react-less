import React, { useEffect, useState } from 'react'
import './App.css'
import SpecialColumn from '../SpecialColumn/SpecialColumn'
import config from '../../utils/config.json'
import paginationSlice from '../../utils/paginationSlice'


export default function App() {

  const [currentPage, setCurrentPage] = useState(1)
  const [currentCellsArray, setCurrentCellsArray] = useState([])
  
  const handleArraySlice = () => {
    return paginationSlice(currentCellsArray, currentPage, config.CELLS_ON_PAGE)
  }

  return (
    <div className='App'>
      <div className='page'>

        <SpecialColumn 
          cellsArr={handleArraySlice}
        />

      </div>
    </div>
  )
}

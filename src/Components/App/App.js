import React from 'react'
import './App.css'
import { NAMES_OF_TABLES } from '../SpecialTable/utils/config.json'
import SpecialTable from '../SpecialTable/SpecialTable'


export default function App() {

  return (
    <div className='App'>
      <div className='page'>


      <SpecialTable
        arrOfNames={NAMES_OF_TABLES}
      />


      </div>
    </div>
  )
}

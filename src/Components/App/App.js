import React from 'react'
import './App.css'
import SpecialTable from '../SpecialTable/SpecialTable'


export default function App() {

  return (
    <div className='App'>
      <div className='page'>


      <SpecialTable
        arrOfNames={['table1', 'table2', 'table3']}
      />


      </div>
    </div>
  )
}

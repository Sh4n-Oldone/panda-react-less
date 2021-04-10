import React from 'react'
import './SpecialTable.css'
import SpecialColumn from './SpecialColumn/SpecialColumn'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './SpecialColumn/reducers'
import {setLocalData, getLocalData} from './utils/columnsStorage'

const newColumn = (tableName, stateCallback, localData) => {
  const store = createStore(reducers);

  return  <Provider store={store} key={tableName}>
            <SpecialColumn 
              stateCallback={stateCallback}
              tableName={tableName}
              localState={localData}
            />
          </Provider>
}

export default function SpecialTable({arrOfNames}) {
  let generatorOfGlobalState = arrOfNames.map(item => {return { table: item, values: []}})

  const handleColumnsChanges = (tableName, tableState) => {
    generatorOfGlobalState.find((obj, index) => {
      if (obj.table === tableName) {
        generatorOfGlobalState[index] = {table: tableName, values: tableState}
        return true
      }
    })
  }

  return (
    
    <section className='special-table'>
      <div className='special-table__columns'>
        {arrOfNames.map(item =>
        newColumn(item, handleColumnsChanges, getLocalData()))}
      </div>
      <button 
        onClick={() => {setLocalData(generatorOfGlobalState)}}
        className='special-table__save-button'
      >GLOBAL SAVE</button>
    </section>

  )
}
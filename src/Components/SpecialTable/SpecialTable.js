import React from 'react'
import './SpecialTable.css'
import SpecialColumn from './SpecialColumn/SpecialColumn'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './SpecialColumn/reducers'
import {setLocalData, getLocalData} from './utils/columnsStorage'

const newColumn = (tableName, stateCallback, local) => {
  const store = createStore(reducers);

  return  <Provider store={store} key={tableName}>
            <SpecialColumn 
              stateCallback={stateCallback}
              tableName={tableName}
              localState={local}
            />
          </Provider>
}

export default function SpecialTable({arrOfNames}) {
  let pre = arrOfNames.map(item => {return { table: item, values: []}})

  const handleColumnsChanges = (tableName, tableState) => {
    pre.find((obj, index) => {
      if (obj.table === tableName) {
        pre[index] = {table: tableName, values: tableState}
        return true
      }
    })
  }

  return (
    
    <section className='special-table'>
      <button onClick={() => {setLocalData(pre)}}>GLOBAL SAVE</button>
      {arrOfNames.map(item =>
        newColumn(item, handleColumnsChanges, getLocalData()))}
    </section>

  )
}
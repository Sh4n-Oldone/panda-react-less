import React from 'react'

import SpecialColumn from './SpecialColumn/SpecialColumn'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './SpecialColumn/reducers'

const newColumn = (tableName) => {
  const store = createStore(reducers);

  return  <Provider store={store}>
            <SpecialColumn 
              tableName={tableName}
            />
          </Provider>
}


export default function SpecialTable({arrOfNames}) {

  return (

    arrOfNames.map(item => newColumn(item))

  )
}
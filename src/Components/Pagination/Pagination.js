import React from 'react'
import './Pagination.css'
import { connect, useDispatch } from 'react-redux'
import {changePage} from '../../actions'
import config from '../../utils/config.json'

const Pagination = ({page, cells}) => {
  const dispatch = useDispatch()
  const increasePageNumber = () => {
    if(cells.length > (page*config.CELLS_ON_PAGE)) {
      dispatch(changePage(page + 1))
    }
  }
  const decreasePageNumber = () => {
    if(page > 1) {
      dispatch(changePage(page - 1))
    }
  }

  return (
    <div className='pagination'>
        <button 
          className='pagination__button'
          onClick={() => {decreasePageNumber()}}
        >back</button>
        <div className='pagination__page-number'>{page}</div>
        <button 
          className='pagination__button'
          onClick={() => {increasePageNumber()}}
        >forward</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { 
    page: state.pageReducer,
    cells: state.cellsReducer
   }
}

export default connect(mapStateToProps)(Pagination)
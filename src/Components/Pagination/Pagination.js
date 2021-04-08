import React from 'react'
import './Pagination.css'
import { connect, useDispatch } from 'react-redux'
import {increasePage, decreasePage} from '../../actions'

const Pagination = ({page, cells}) => {
  const dispatch = useDispatch()
  const increasePageNumber = () => {
    if(cells.length > (page*50)) {
      dispatch(increasePage())
    }
  }
  const decreasePageNumber = () => {
    if(page > 1) {
      dispatch(decreasePage())
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
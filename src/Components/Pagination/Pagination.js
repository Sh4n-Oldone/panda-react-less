import React from 'react'
import './Pagination.css'
import { connect, useDispatch } from 'react-redux'
import {changePage} from '../../actions'

const Pagination = ({page}) => {


  return (
    <div className='pagination'>
        <button className='pagination__button'>back</button>
        <button className='pagination__button'>{page}</button>
        <button className='pagination__button'>forward</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { 
    page: state.pageReducer
   }
}

export default connect(mapStateToProps)(Pagination)
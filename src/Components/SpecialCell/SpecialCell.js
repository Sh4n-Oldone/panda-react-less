import React, { useState } from 'react'
import './SpecialCell.css'
// import { connect, useDispatch } from 'react-redux'
// import {changeCellValue} from '../../actions'

const SpecialCell = ({value}) => {
  // const dispatch = useDispatch()
  // const handleChange = (event) => dispatch(changeCellValue(event.target.value))

  return (
    <li className='special-cell'>
      <input
        type='text'
        className='special-cell__input'
        value={value}
        // onChange={}
      />
    </li>
  )
}

// const mapStateToProps = (state) => {
//   return { 
//     cell: state.cellReducer
//    }
// }

// export default connect(mapStateToProps)(SpecialCell)

export default SpecialCell
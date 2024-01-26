import React from 'react'
import './style.scss'
const index = ({code, message}) => {
  return (
    <div className='error'>
      <div className='error-code'>{code}</div>
      <div className='error-text'>{message}</div>
    </div>
  )
}

export default index
import React from 'react'
import './style.scss'
import up_arrow from '../../assets/up-arrow.png'
const index = () => {
  return (
    <div className='input'>
        <input type='text' placeholder='Message ChatGPT...'/>
        <div className='send-btn'>
          <img src={up_arrow}/>
        </div>
    </div>
  )
}

export default index
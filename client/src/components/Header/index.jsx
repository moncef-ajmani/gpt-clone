import React from 'react'
import upload_icon from '../../assets/telecharger.png'
import './style.scss'
const index = () => {
  return (
    <div className='header'>
        <div className='header__version'>
            <h1>ChatGPT <span>5.0</span></h1>
        </div>
        <div className='header__share'>
            <img src={upload_icon}/>
        </div>
    </div>  
  )
}
export default index
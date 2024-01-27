import React, { useRef } from 'react'
import './style.scss'
import up_arrow from '../../assets/up-arrow.png'

const index = ({sendMessage,setInput}) => {
  const inputRef = useRef()
  const handleClick = () =>{
    console.log(inputRef.current.value)
    sendMessage(inputRef.current.value)
  }
  return (
    <div className='input'>
        <input type='text' placeholder='Message ChatGPT...' ref={inputRef}/>
        <div className='send-btn' onClick={handleClick}>
          <img src={up_arrow}/>
        </div>
    </div>
  )
}

export default index
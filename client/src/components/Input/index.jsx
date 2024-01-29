import React, { useRef } from 'react'
import './style.scss'
import up_arrow from '../../assets/up-arrow.png'

const index = ({sendMessage,setInput}) => {
  const inputRef = useRef()

  const handleClick = (e) =>{
    e.preventDefault()
    sendMessage(inputRef.current.value)
    inputRef.current.value = ""
    window.scrollTo({
      top:window.scrollHeight,
      behavior:'smooth'
    })
  }
  return (
    <form onSubmit={handleClick}>
      <div className='input'>
        <input type='text' placeholder='Message ChatGPT...' ref={inputRef}/>
        <div className='send-btn' onClick={handleClick}>
          <img src={up_arrow}/>
        </div>
      </div>
    </form>
    
  )
}

export default index
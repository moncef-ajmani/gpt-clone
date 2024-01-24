import React from 'react'
import './style.scss'

const Message = ({username,text}) => {
  return (
    <div className="message">
        <div className='message__avatar'></div>
        <div className="message__content">
            <div className='message__content-username'>{username}</div>
            <div className='message__content-text'>{text}</div>
        </div>
        
    </div>
  )
}

export default Message
import React from 'react'
import './style.scss'
import ReactMarkdown from 'react-markdown';
const Message = ({username,text,loading}) => {
  return (
    <div className="message">
        <div className={`message__avatar ${username}`}></div>
        <div className="message__content">
            <div className='message__content-username '>{username}</div>
            {loading?'...':<div className='message__content-text'><ReactMarkdown>{text}</ReactMarkdown></div>}
            
        </div>
        
    </div>
  )
}

export default Message
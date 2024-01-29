import React, {useRef, useEffect} from 'react'
import './style.scss'
import Message from './Message'

const index = ({messages}) => {
  return (
    <div className='chat'>
      {messages.map(({role,content},index)=><Message username={role} text={content} key={index} />)}
    </div>
  )
}

export default index
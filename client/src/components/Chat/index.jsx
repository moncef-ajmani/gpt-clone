import React from 'react'
import './style.scss'
import Message from './Message'

const index = ({messages}) => {
  const text = `It looks like you entered the word "test." How can I assist you today? If you have any questions or if there's a specific topic you'd like information on, feel free to let me know!`
  return (
    <div className='chat'>
      {messages.map(({role,content},index)=><Message username={role} text={content} key={index}/>)}
    </div>
  )
}

export default index
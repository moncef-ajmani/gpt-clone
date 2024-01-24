import React from 'react'
import './style.scss'
import Message from './Message'

const index = () => {
  const text = `It looks like you entered the word "test." How can I assist you today? If you have any questions or if there's a specific topic you'd like information on, feel free to let me know!`
  return (
    <div className='chat'>
      <Message username="You" text={text}/>
      <Message username="ChatGPT" text={text}/>
      <Message username="ChatGPT" text={text}/>
      <Message username="ChatGPT" text={text}/>
      <Message username="ChatGPT" text={text}/>
      <Message username="ChatGPT" text={text}/>
      <Message username="ChatGPT" text={text}/>
      <Message username="ChatGPT" text={text}/>
      <Message username="ChatGPT" text={text}/>
      <Message username="ChatGPT" text={text}/>
    </div>
  )
}

export default index
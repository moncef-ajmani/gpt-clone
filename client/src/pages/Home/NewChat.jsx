import React, { useState } from 'react'
import Signature from '../../components/Signature'
import Input from '../../components/Input'
import Welcome from '../../components/Welcome'
import axios from '../../api/axios'
import { Navigate } from 'react-router'

const NewChat = () => {
  const [conversationId,setConversationId] = useState(null)
  const sendMessage = (content) =>{
    axios.post("/conversations",content,{
      headers: {
        'Content-Type': 'text/plain',
      }}
    )
    .then(({data})=>{
      setConversationId(data.conversationId)
    })
    .catch(err=>console.log(err))
  }
  return (
    <>
      {conversationId && (
          window.location.href = `/c/${conversationId}`
        )}
        <div className='appContainer'>
            <div className='content'>
                <Welcome/>
            </div>
            </div>
            <div className="footer">
            <div className='container'>
                <Input sendMessage={sendMessage} />
                <Signature/>
            </div>
        </div>
    </>
  )
}

export default NewChat
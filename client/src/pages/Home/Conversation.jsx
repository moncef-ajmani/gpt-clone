import React, { useEffect, useState } from 'react'
import Signature from '../../components/Signature'
import Input from '../../components/Input'
import Chat from '../../components/Chat'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios'

const Conversation = () => {
    const { id } = useParams()
    const [messages,setMessages] = useState([])

    useEffect(()=>{
        axios.get(`conversations/${id}`)
        .then(({data})=>{
            setMessages(data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[id,messages])
    const sendMessage = (content) =>{
        axios.post("/conversations/"+id,content,{
          headers: {
            'Content-Type': 'text/plain',
          }}
        )
        .then(({data})=>{
          setMessages([...messages,content,data.message.content])
        })
        .catch(err=>console.log(err))
      }
    return (
    <>
        <div className='appContainer'>
        <div className='content'>
            <Chat messages={messages}/>
        </div>
        
        </div>
        <div className="footer">
        <div className='container'>
            <Input sendMessage={sendMessage}/>
            <Signature/>
        </div>
        </div>
    </>
    
  )
}

export default Conversation
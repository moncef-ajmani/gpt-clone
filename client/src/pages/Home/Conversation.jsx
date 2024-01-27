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
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])
    return (
    <>
        <div className='appContainer'>
        <div className='content'>
            <Chat messages={messages}/>
        </div>
        
        </div>
        <div className="footer">
        <div className='container'>
            <Input/>
            <Signature/>
        </div>
        </div>
    </>
    
  )
}

export default Conversation
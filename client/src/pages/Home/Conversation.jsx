import React, { useEffect, useLayoutEffect, useState } from 'react'
import Signature from '../../components/Signature'
import Input from '../../components/Input'
import Chat from '../../components/Chat'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios'
import { scrollToBottom } from '../../utils/scroll'
const Conversation = () => {
    const { id } = useParams()
    const [messages,setMessages] = useState([])
    const [status,setStatus] = useState("")

    const fetchMessages = () =>{
      axios.get(`conversations/${id}`)
      .then(({data})=>{
          setMessages(data)
          if(data.length == 0){
            window.location.href = "/"
          }
      })
      .catch(err=>{
          console.log(err)
      })
      
    }
    useEffect(() => {
      fetchMessages()
    }, [id]);

    
   
    const sendMessage = (content) => {
      setStatus("clean")
      const fakeMessages = [
        { role: 'user', content: content },
        { role: 'system', content: "..."},
      ];
      setMessages((prevMessages) => [...prevMessages, ...fakeMessages]);

        axios.post(`/conversations/${id}`, content, {
          headers: {
            'Content-Type': 'text/plain',
          },
        })
        .then(()=>{
          setStatus("clean")
          fetchMessages()
        })
        .catch((error)=>{
          setMessages((prevMessages) => prevMessages.filter((msg) => !fakeMessages.includes(msg)));
          setStatus("error")
        })
    };
    
    return (
    <>
        <div className="appContainer">
          <div className="content">
            <Chat messages={messages} />
          </div>
        </div>
        <div className="footer">
          <div className="container">
            {status == "error" && <div className='error'>Faied try again!!</div>} 
            <Input sendMessage={sendMessage}/>
            <Signature />
          </div>
        </div>
    </>
    
  )
}

export default Conversation
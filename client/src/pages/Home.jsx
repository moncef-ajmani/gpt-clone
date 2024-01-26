import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Signature from '../components/Signature'
import Input from '../components/Input'
import Chat from '../components/Chat'

const Home = () => {
  return (
    <>
      <Sidebar/>
        <div className='main'>
          <Header/>
          <div className='appContainer'>
            <div className='content'>
              <Chat/>
            </div>
            
          </div>
          <div className="footer">
            <div className='container'>
              <Input/>
              <Signature/>
            </div>
          </div>
      </div>
    </>
  )
}

export default Home
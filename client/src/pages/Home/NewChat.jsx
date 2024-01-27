import React from 'react'
import Signature from '../../components/Signature'
import Input from '../../components/Input'
import Welcome from '../../components/Welcome'
const NewChat = () => {
  return (
    <>
        <div className='appContainer'>
            <div className='content'>
                <Welcome/>
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

export default NewChat
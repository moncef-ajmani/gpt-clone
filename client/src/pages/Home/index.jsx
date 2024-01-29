import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import { Outlet,Navigate } from 'react-router-dom'

import { useAuth } from '../../Contexts/AuthContext'
import { scrollToBottom } from '../../utils/scroll'

export default function(){
 
  return (
    <>
      <Sidebar/>
      <div className='main'>
        <Header/>
        <Outlet/>
        <div id='bottom'></div>
      </div>
    </>
  )
}

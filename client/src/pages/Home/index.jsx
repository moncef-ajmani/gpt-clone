import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'

export default function(){
  return (
    <>
      <Sidebar/>
      <div className='main'>
        <Header/>
        <Outlet/>
      </div>
    </>
  )
}

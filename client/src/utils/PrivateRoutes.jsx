import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const storedUser = localStorage.getItem('authUser');
  return (
    <>
      {storedUser ? <Outlet/> : <Navigate to="/auth/login" />}
    </>
  )
}

export default PrivateRoutes
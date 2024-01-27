import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext'

const PrivateRoutes = () => {
  const { isLoggedIn } = useAuth()
  return (
    isLoggedIn  
    ? <Outlet/>
    : <Navigate to="/auth/login"/>
  )
}

export default PrivateRoutes
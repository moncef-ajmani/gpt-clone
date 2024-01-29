import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {

  return (
    localStorage.getItem("authUser")
    ? <Outlet/>
    : <Navigate to="/auth/login"/>
  )
}

export default PrivateRoutes
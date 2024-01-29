import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route, RouterProvider } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'
import PrivateRoutes from './PrivateRoutes'
import Home from '../pages/Home'
import Auth from '../pages/Auth'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import NewChat from '../pages/Home/NewChat'
import Conversation from '../pages/Home/Conversation'
import { useAuth } from '../Contexts/AuthContext'


const Router = () => {
  const { isLoggedIn } = useAuth()
    const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<Home />} exact>
          <Route element={<PrivateRoutes/>}>
            <Route index element={<NewChat />} />

            <Route path="/c/:id" element={<Conversation />} />  
          </Route>
        </Route>
        {/* <Route path="/auth" element={<Auth />}> */}
          <Route  path="/auth/login" element={<Auth><Login /></Auth>} />
          <Route path="/auth/register" element={<Auth><Register /></Auth>} />
        {/* </Route> */}
          
        <Route path="*" element={<ErrorMessage code="404" message="This page could not be found."/>} />
      </Route>
        )
    )
    return (
        <RouterProvider router={router}/>
    )
}

export default Router
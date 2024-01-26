import React from 'react'
import './style.scss'
import btn_play from '../../assets/button-play.png';
import { Navigate, Outlet } from 'react-router-dom';

export default function index({children}) {
  let auth = {'token':false}
  return (
    <>
      {auth.token ?<Navigate to="/"/>:(
        <div className='auth'>
        <div className='col-7'>
          <div className='auth__hero'>
            <div className='auth__hero-logo'>Devcef</div>
              <div className='auth__hero-content'>
                <div className='auth__hero-title'>Welcome back!</div>
                <div className='auth__hero-text'>Get access to your Orders, Wishlist and Recommendations.</div>
                <div className='auth__hero-btn'><span><img src={btn_play}/></span>Watch demo</div>
              </div>
            </div>
        </div>
        <div className='col-5'>
          {children}
          <Outlet/>
        </div>
      </div> 
      )}
      
    </>
    
  )
}

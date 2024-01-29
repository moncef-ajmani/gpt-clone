import React, { useEffect } from 'react'
import './style.scss'
import btn_play from '../../assets/button-play.png';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext'

export default function index() {
  return (
    <>
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
          <Outlet/>
        </div>
      </div>
    </>
    
  )
}

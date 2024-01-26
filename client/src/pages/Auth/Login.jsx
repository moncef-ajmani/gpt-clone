import React, { useEffect, useRef } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  const emailRef = useRef()
  const passRef = useRef()

  useEffect(()=>{
    emailRef.current.focus()
  },[])

  const handleSubmit = () =>{
    
  }
  return (

    <div className='login'>
      <div className='title'>Sign In</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="inputEmail" placeholder='Enter Email' ref={emailRef}/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword" placeholder='Enter Password' ref={passRef}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
        </div>
        <button type="submit">Sign In</button>
      </form>
      <hr/>
      <p>Don't have an account? <Link to="/auth/register">Sign Up</Link></p>
    </div>
  )
}

export default Login
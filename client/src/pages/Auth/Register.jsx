import React, { useContext, useEffect, useRef } from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../../Contexts/AuthContext'
import axios from '../../api/axios'

const Register = () => {
  const { login } = useAuth()
  const userRef = useRef()
  const emailRef = useRef()
  const passRef = useRef()


  useEffect(()=>{
    emailRef.current.focus()
  },[])

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post("/auth/register",{
      "username":userRef.current.value,
      "email":emailRef.current.value,
      "password":passRef.current.value
    })
    .then(({data})=>{
        console.log(data)
        login(data.token)
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className='register'>
      <div className='title'>Sign Up</div>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="inputUsername" className="form-label" >Username</label>
          <input type="text" className="form-control" ref={userRef} id="inputUsername" placeholder='Enter Username'/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label" >Email address</label>
          <input type="email" className="form-control" ref={emailRef} id="inputEmail" placeholder='Enter Email'/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label" >Password</label>
          <input type="password" className="form-control" id="inputPassword" placeholder='Enter Password' ref={passRef}/>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <hr/>
      <p>Aleardy have an account? <Link to="/auth/login">Sign In</Link></p>
    </div>
  )
}

export default Register
import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='register'>
      <div className='title'>Sign Up</div>
      <form>
      <div className="mb-3">
          <label htmlFor="inputUsername" className="form-label">Username</label>
          <input type="email" className="form-control" id="inputUsername" placeholder='Enter Username'/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="inputEmail" placeholder='Enter Email'/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword" placeholder='Enter Password'/>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <hr/>
      <p>Aleardy have an account? <Link to="/auth/login">Sign In</Link></p>
    </div>
  )
}

export default Register
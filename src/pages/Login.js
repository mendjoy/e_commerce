import React from 'react'
import { Link } from 'react-router-dom'

//css
import './LoginAndRegister.css'

//icons
import { FiUser } from 'react-icons/fi'

const Login = () => {
  return (
    <div className='form-container'>
        <div className='login-area'>
            <h4><FiUser size={28} color='#2B2B2B'/> Login</h4>
            <form className='form'>
                <input type="email" placeholder='E-mail'/>
                <input type="password" placeholder='Password' />
                <div className='button-container'>
                    <input className='sign-btn'  type="submit" value='Sign in' />
                </div>
                
            </form>
            <p>Does not have an account? <Link to='/register'>Register</Link></p>
        </div>
    </div>
  )
}

export default Login
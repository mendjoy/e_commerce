import React from 'react'
import { Link } from 'react-router-dom'

//icons
import { FiUserPlus } from 'react-icons/fi'

//css 
import './LoginAndRegister.css'

const Register = () => {
  return (
    <div className='register-container'>
        <div className='register-area'>
            <h4><FiUserPlus size={28} color='#2B2B2B'/> Register</h4>
            <form className='form'>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Lastname' />
                <input type="email" placeholder='E-mail'/>
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Confirm password'/>

                <div className='button-container'>
                    <input className='sign-btn'  type="submit" value='Sign Up' />
                </div>
            </form>
            <p>Already have an account? <Link to='/login'>Login</Link></p>

        </div>

    </div>
  )
}

export default Register
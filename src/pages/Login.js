import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

//css
import './LoginAndRegister.css'

//icons
import { FiUser } from 'react-icons/fi'
//hooks
import { useFirebaseAuth } from '../hooks/useFirebaseAuth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login, error: authError,  loading } = useFirebaseAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')
    const user = { email,password}
    const res = await login(user)
  }

  useEffect( () => {

    if(authError){
      setError(authError);

    }

  },[authError]);


  return (
    <div className='form-container'>
        <div className='login-area'>
            <h4><FiUser size={28} color='#2B2B2B'/> Login</h4>
            <form className='form' onSubmit={handleSubmit}>
                <input type="email" 
                placeholder='E-mail'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>

                <input type="password" 
                placeholder='Password'
                required
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>

                <div className='button-container'>
                    {!loading &&<input className='sign-btn'  type="submit" value='Sign in' />}
                    {loading &&<input className='sign-btn'  type="submit" value='Wait...' />}
                    { error && <p className="error">{error}</p>}
                </div>
                
            </form>
            <p>Does not have an account? <Link to='/register'>Register</Link></p>
        </div>
    </div>
  )
}

export default Login
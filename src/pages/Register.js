import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
//icons
import { FiUserPlus } from 'react-icons/fi'
//css 
import './LoginAndRegister.css'
//custom hook 
import { useFirebaseAuth } from '../hooks/useFirebaseAuth'


const Register = () => {

  const { createUser, error: authError, loading } = useFirebaseAuth()

  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    const user = {
        name, 
        lastName,
        email,
        password
      }

    if (password !== confirmPassword){
        return setError("Passwords don't appear to match");   
    }

    const res = await createUser(user);
  }

    useEffect( () => {
        if(authError){
        setError(authError);

        }
  },[authError])

   
  return (
    <div className='register-container'>
        <div className='register-area'>
            <h4><FiUserPlus size={28} color='#2B2B2B'/> Register</h4>
            <form className='form' onSubmit={handleSubmit}>

                <input type="text" 
                placeholder='Name'
                value={name} 
                onChange={(e) => setName(e.target.value)} />

                <input type="text" 
                placeholder='Lastname'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}/>

                <input type="email" 
                placeholder='E-mail'
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>

                <input type="password" 
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
              
                <input type="password" 
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}/>

                <div className='button-container'>
                    {!loading && <input className='sign-btn'  type="submit" value='Sign Up' />}
                    {loading &&  <input className='sign-btn' disabled  type="submit" value='Wait...' />}
                    { error && <p className="error">{error}</p>}
                </div>
            </form>
            <p>Already have an account? <Link to='/login'>Login</Link></p>

        </div>

    </div>
  )
}

export default Register
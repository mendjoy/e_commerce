import React from 'react'
import { Link } from 'react-router-dom'

//css 
import './Navbar.css'

//icons
import { FiSearch, FiShoppingCart, FiUser, FiHeart } from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav>
        <div className='nav-container'>
            <div>
                <h1 className='logo'><Link to='/'>Divine Sparkle</Link></h1>
            </div>
            <div className='search-container'>
                <label>
                    <input type="text" placeholder='What are you looking for?' />
                    <FiSearch size={23} color='#2B2B2B'/>
                </label>
            </div>
            <div className='links-container'>
                <ul>
                    <li><Link><FiHeart  size={20} color='#2B2B2B'/> Wishlist</Link></li>
                    <li><Link to='/login'><FiUser size={20} color='#2B2B2B'/> Login</Link></li>
                    <li><Link><FiShoppingCart size={20} color='#2B2B2B'/> Cart(0)</Link></li>
                </ul>
            </div>
        </div>
        <div className='links-category'>

            <ul>
                <li> <Link to="/">Jewelery</Link></li>
            </ul>
            <ul>
                <li> <Link to="/watches">Watches</Link></li>
            </ul>
            <ul>
                <li> <Link to="/sunglasses">Sunglasses</Link></li>
            </ul>
            <ul>
                <li> <Link to="/bags">Bags</Link></li>
            </ul>
            <ul>
                <li> <Link to="/shoes">Shoes</Link></li>
            </ul>
        </div>
      
    </nav>
  )
}

export default Navbar
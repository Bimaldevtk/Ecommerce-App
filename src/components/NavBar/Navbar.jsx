import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='nav-links'>
          
          <Link to="/Home" className='nav-item'>Home</Link>
          <div className='nav-item'>About</div>
          <div className='nav-item'>Contact</div>
          <Link to="/" className='nav-item'>Sign Up</Link>
        </div>


      </div>
       
      
    </div>
  )
}

export default Navbar

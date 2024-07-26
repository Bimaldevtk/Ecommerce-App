import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sigin.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Sigin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('User signed in!');
      navigate('/Home');
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Error signing in. Please try again.');
    }
  };

  return (
    <div>
      <div className='maindiv'>
        <div className='cartpic'>
          <img src="cart.png" alt="sidepic" />
        </div>
        <div className='form'>
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>
          <form className='form-grp' onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder='Email'
              required
            />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder='Password'
              required
            />
            <button type="submit">Login</button>
          </form>
          <p>
            <Link to="/Forgot">Forgot Password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sigin;

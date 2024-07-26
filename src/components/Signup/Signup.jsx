import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import {auth,provider} from '../Firbase/Firebase';
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User signed up!');
      navigate('/Home');
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up. Please try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/Home');
    } catch (error) {
      setError(error.message);
    }
  };


 
  

  return (
    <div>
      <div className='maindiv'>
        <div className='cartpic'>
          <img src="cart.png" alt="sidepic" />
        </div>
        <div className='form'>
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <form className='form-grp' onSubmit={handleSignUp}>
            <input type="text" placeholder='Name' />
            <input type="email" value={email} onChange={handleEmailChange} placeholder='Email' required />
            <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password' required />
            <button type='submit'>Create Account</button>
          </form>
          <button onClick={handleGoogleSignIn}>Sign Up With Google</button>
          <p>Already a member? <Link to="/Sigin">Sigin</Link></p>
          <p>Forgot Password</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

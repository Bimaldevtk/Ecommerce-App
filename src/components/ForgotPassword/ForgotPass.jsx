import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import "./Forgot.css"

const ForgotPass = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent!');
    } catch (error) {
      console.error('Error sending password reset email:', error);
      setMessage('Error sending password reset email. Please try again.');
    }
  };

  return (
    <div className='maindiv'>
      <div className='cartpic'>
        <img src="cart.png" alt="sidepic" />
      </div>
      <div className='rightdiv'>
      <div className='form'>
        <h1>Enter Your Email</h1>
      </div>
      <form className='form-grp' onSubmit={handlePasswordReset}>
        <input
        className='form-item'
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder='Enter Your Email'
          required
        />
        <button  className='submit-btn' type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPass;

import React, { useState } from 'react';
import Header from './Header';
import { BACKGROUND_IMG } from '../utils/constants';
const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsSignedIn(false);
  };
  return (
    <div>
      <Header />
      <div>
        <div class='w-full h-screen absolute'>
          <img
            src={BACKGROUND_IMG}
            alt='Background'
            class='w-full h-full object-cover'
          />
          <div class='absolute inset-0 bg-black/50'></div>
        </div>
        <form className='w-3/12 bg-black/60 text-white absolute mx-auto right-0 left-0 my-36 p-12'>
          <h1 className='font-bold text-3xl py-4'>
            {!isSignedIn ? 'Sign Up' : 'Sign In'}
          </h1>
          {!isSignedIn && (
            <input
              type='text'
              placeholder='Full Name'
              className='p-4 my-2 w-full bg-black/10 border border-gray-500 rounded-lg text-gray-300'
            />
          )}
          <input
            type='text'
            placeholder='Email Address'
            className='p-4 my-2 w-full bg-black/10 border border-gray-500 rounded-lg text-gray-300'
          />
          <input
            type='password'
            placeholder='Password'
            className='p-4 my-2 w-full bg-black/10 border border-gray-500 rounded-lg text-gray-300'
          />
          <button className='p-2 my-3 w-full bg-red-600 rounded-lg font-bold'>
            {!isSignedIn ? 'Sign Up' : 'Sign In'}
          </button>
          {isSignedIn && (
            <p className='py-4'>
              <span className='text-gray-400'>New to Netflix?</span>{' '}
              <button className='font-bold' onClick={handleSignUp}>
                Sign Up Now
              </button>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;

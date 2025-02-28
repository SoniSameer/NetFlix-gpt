import React, { useRef, useState } from 'react';
import Header from './Header';
import { BACKGROUND_IMG } from '../utils/constants';
import validateFormData from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [warning, setWarning] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignInButton = () => {
    const message = validateFormData(
      email.current.value,
      password.current.value
    );
    setWarning(message);

    if (!message && !isSignedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              'https://media.licdn.com/dms/image/v2/C5603AQHLrQmxn-ll6g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1638017176626?e=1746057600&v=beta&t=KevSR65LPIPbNylNYCbQ98oao5Cxv0N8GDm2Zx7ZQe0',
          })
            .then(() => {
              const { uid, email, password, displayName, photoURL } =
                auth.currentUser;
              dispatch(
                addUser({ uid, email, password, displayName, photoURL })
              );
              navigate('/browse');
            })
            .catch((error) => {
              setWarning(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setWarning(errorCode + '- ' + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setWarning(errorCode + '- ' + errorMessage);
        });
    }
  };

  const handleSignUp = (e) => {
    setIsSignedIn(!isSignedIn);
  };
  return (
    <div>
      <Header />
      <div>
        <div className='w-full h-screen absolute'>
          <img
            src={BACKGROUND_IMG}
            alt='Background'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/50'></div>
        </div>
        <form
          className='w-3/12 bg-black/60 text-white absolute mx-auto right-0 left-0 my-36 p-12'
          onSubmit={(e) => e.preventDefault()}
          autoComplete='on'
        >
          <h1 className='font-bold text-3xl py-4'>
            {!isSignedIn ? 'Sign Up' : 'Sign In'}
          </h1>
          {!isSignedIn && (
            <input
              ref={name}
              type='text'
              placeholder='Full Name'
              className='p-4 my-2 w-full bg-black/10 border border-gray-500 rounded-lg text-gray-300'
            />
          )}
          <input
            ref={email}
            type='text'
            placeholder='Email Address'
            className='p-4 my-2 w-full bg-black/10 border border-gray-500 rounded-lg text-gray-300'
          />
          <input
            ref={password}
            type='password'
            placeholder='Password'
            className='p-4 my-2 w-full bg-black/10 border border-gray-500 rounded-lg text-gray-300'
          />
          {warning && (
            <p className='text-bold text-red-600 text-sm py-2'>{warning}</p>
          )}
          <button
            className='p-2 my-3 w-full bg-red-600 rounded-lg font-bold'
            onClick={handleSignInButton}
          >
            {!isSignedIn ? 'Sign Up' : 'Sign In'}
          </button>

          <p className='py-4'>
            <span className='text-gray-400'>
              {isSignedIn ? 'New to Netflix? ' : 'Already registered? '}
            </span>{' '}
            <button className='font-bold' onClick={handleSignUp}>
              {isSignedIn ? 'Sign Up Now' : 'Sign In'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

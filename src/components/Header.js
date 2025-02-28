import React from 'react';
import { LOGO_URL, USER_ICON } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        navigate('/error');
      });
  };
  return (
    <div className='flex justify-between absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black'>
      <img src={LOGO_URL} alt='logo' className='w-64' />
      {user && (
        <div className='flex place-items-center'>
          <img
            src={user.photoURL ? user.photoURL : USER_ICON}
            alt='user-icon'
            className='cursor-pointer mx-2 my-6 w-10 h-10 rounded-full'
          />

          <button className='font-bold text-white' onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

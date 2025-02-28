import React from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  return (
    <div className='absolute z-10'>
      <img src={LOGO_URL} alt='logo' className='px-8 py-2 w-64 ml-36 mt-5' />
    </div>
  );
};

export default Header;

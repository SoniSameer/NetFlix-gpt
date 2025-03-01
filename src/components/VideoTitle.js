import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const VideoTitle = ({ title, description }) => {
  return (
    <div className='pt-[20%] px-24 absolute w-screen aspect-video bg-gradient-to-r from-black text-white'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{description}</p>
      <div>
        <button className='bg-white text-xl p-4 px-12 rounded-lg mr-2 text-black hover:bg-opacity-80'>
          <i className='fas fa-play'></i> Play
        </button>
        <button className='bg-gray-500 text-xl p-4 px-12 rounded-lg bg-opacity-50 text-white hover:bg-opacity-40'>
          <i class='fas fa-info-circle'></i>&nbsp; More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

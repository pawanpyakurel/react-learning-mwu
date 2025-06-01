import { useState } from 'react';

export const Header = () => {
  const [selected, setSelected] = useState('');

  return (
    <div className='flex flex-row justify-between items-center'>
      <button
        className='text-white font-bold'
        onClick={() => setSelected('today')}>
        Today
      </button>
      <button
        className='text-white'
        onClick={() => setSelected('mylist')}>
        My List
      </button>
      <button
        className='text-white'
        onClick={() => setSelected('news')}>
        News
      </button>
      <button
        className='text-white'
        onClick={() => setSelected('profile')}>
        Profile
      </button>
    </div>
  );
};

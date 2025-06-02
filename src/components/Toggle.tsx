import { useState } from 'react';
import { useSearchParams } from 'react-router';

export const Toggle = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const isChecked = searchParams.get('unit') === 'u';

  const handleToggle = (checked: boolean) => {
    setSearchParams((searchParams) => {
      searchParams.set('unit', checked ? 'u' : 'c');
      return searchParams;
    });
  };

  console.log(isChecked, '---->>>');
  return (
    <label className='inline-flex items-center cursor-pointer gap-2'>
      <span className='text-sm font-medium text-gray-300'>C</span>
      <input
        type='checkbox'
        value=''
        className='sr-only peer'
        checked={isChecked}
        onChange={(e) => handleToggle(e?.currentTarget?.checked)}
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
      <span className='text-sm font-medium text-gray-300'>F</span>
    </label>
  );
};

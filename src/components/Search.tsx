import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

export const Search = () => {
  const [searchLocation, setSearchLocation] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ userLocation: searchLocation });
  }, [searchLocation]);

  useEffect(() => {
    const previousSearch = searchParams.get('userLocation');

    setSearchLocation(previousSearch ?? '');
  }, []);

  return (
    <div>
      <input
        className='w-52 h-6 bg-yellow-50 border border-white rounded-md p-2'
        type='text'
        placeholder='Search'
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
      />
    </div>
  );
};

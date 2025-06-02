import { useSearchParams } from 'react-router';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('userLocation');

  const handleSearch = (value: string) => {
    setSearchParams((searchParams) => {
      searchParams.set('userLocation', value);
      return searchParams;
    });
  };

  return (
    <div>
      <input
        className='w-52 h-6 bg-yellow-50 border border-white rounded-md p-2'
        type='text'
        placeholder='Search'
        value={search ?? ''}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

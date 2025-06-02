import { useEffect, useState } from 'react';
import type { Weather } from '../types/apiResponseType';
import { useSearchParams } from 'react-router';
import { useDebounce } from './useDebounce';

export const useGetWeather = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, _setSearchParams] = useSearchParams();
  const searchLocation = searchParams.get('userLocation');

  const debouncedSearch = useDebounce(searchLocation ?? '');

  const getWeather = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://goweather.xyz/v2/weather/${
          !!debouncedSearch ? debouncedSearch : 'surkhet'
        }?unit=u`,
        {
          method: 'GET',
        }
      );

      const data: Weather = await res.json();
      setWeather({
        ...data,
        location: !!debouncedSearch ? debouncedSearch : 'surkhet',
      });
    } catch (err) {
      console.log(err?.response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, [debouncedSearch]);

  return { weather, loading };
};

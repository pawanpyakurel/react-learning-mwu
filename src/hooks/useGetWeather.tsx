import { useEffect, useState } from 'react';
import type { Weather } from '../types/apiResponseType';
import { useSearchParams } from 'react-router';
import { useDebounce } from './useDebounce';

export const useGetWeather = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, _setSearchParams] = useSearchParams();
  const searchLocation = searchParams.get('userLocation');
  const unit = searchParams.get('unit');

  const debouncedSearch = useDebounce(searchLocation ?? '');

  const debouncedUnit = useDebounce(unit ?? '');

  const getWeather = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://goweather.xyz/v2/weather/${
          !!debouncedSearch ? debouncedSearch : 'surkhet'
        }?unit=${debouncedUnit}`,
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
  }, [debouncedSearch, debouncedUnit]);

  return { weather, loading };
};

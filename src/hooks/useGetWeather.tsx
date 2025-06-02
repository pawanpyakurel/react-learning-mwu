import { useEffect, useState } from 'react';
import type { Weather } from '../types/apiResponseType';
import { useSearchParams } from 'react-router';

export const useGetWeather = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, _setSearchParams] = useSearchParams();
  const searchLocation = searchParams.get('userLocation');

  console.log(searchLocation, 'search location');

  const getWeather = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://goweather.xyz/v2/weather/${
          !!searchLocation ? searchLocation : 'surkhet'
        }?unit=u`,
        {
          method: 'GET',
        }
      );

      const data: Weather = await res.json();
      setWeather(data);
    } catch (err) {
      console.log(err?.response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, [searchLocation]);

  return { weather, loading };
};

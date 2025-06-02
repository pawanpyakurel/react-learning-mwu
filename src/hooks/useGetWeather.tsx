import { useEffect, useState } from 'react';
import type { Weather } from '../types/apiResponseType';

export const useGetWeather = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://goweather.xyz/v2/weather/surkhet?unit=u`,
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
  }, []);

  return { weather, loading };
};

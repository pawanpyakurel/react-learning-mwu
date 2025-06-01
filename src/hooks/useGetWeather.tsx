import { useEffect, useState } from 'react';
import type { Weather } from '../types/apiResponseType';

export const useGetWeather = () => {
  const [weather, setWeather] = useState<Weather | null>(null);

  const getWeather = async () => {
    try {
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
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return { weather };
};

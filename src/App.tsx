import { useEffect, useState } from 'react';
import { HeroCard } from './components/HeroCard';
import { Header } from './container/Header';
import type { Weather } from './types/apiResponseType';

function App() {
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

  console.log(weather, '---weather here');

  return (
    <div className='flex flex-col justify-center items-center gap-5 p-4'>
      <div className='w-full'>
        <Header />
      </div>
      <HeroCard temperature={weather?.temperature} />
      <button
        className='text-white bg-blue-500 p-2 rounded-md'
        onClick={getWeather}>
        Get Weather
      </button>
    </div>
  );
}

export default App;

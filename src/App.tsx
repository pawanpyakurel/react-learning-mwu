import { useEffect } from 'react';
import { HeroCard } from './components/HeroCard';
import { Header } from './container/Header';

function App() {
  const getWeather = async () => {
    try {
      const res = await fetch(
        `https://goweather.xyz/v2/weather/surkhet?unit=u`,
        {
          method: 'GET',
        }
      );

      console.log(res);
    } catch (err) {
      console.log(err?.response);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className='flex flex-col justify-center items-center gap-5 p-4'>
      <div className='w-full'>
        <Header />
      </div>
      <HeroCard />
      <button
        className='text-white bg-blue-500 p-2 rounded-md'
        onClick={getWeather}>
        Get Weather
      </button>
    </div>
  );
}

export default App;

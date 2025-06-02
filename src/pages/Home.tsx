import { HeroCard } from '../components/HeroCard';
import { Search } from '../components/Search';
import { Toggle } from '../components/Toggle';
import { Header } from '../container/Header';
import { useGetWeather } from '../hooks/useGetWeather';

function Home() {
  const { weather, loading } = useGetWeather();
  console.log(weather, '---weather here');

  return (
    <div className='flex flex-col justify-center items-center gap-5 p-4'>
      <div className='w-full'>
        <Header />
      </div>
      <div className='flex gap-4 justify-between flex-row p-4 items-center'>
        <Toggle />
        <Search />
      </div>
      <HeroCard
        temperature={weather?.temperature}
        wind={weather?.wind}
        loading={loading}
        location={weather?.location}
      />
    </div>
  );
}

export default Home;

import { HeroCard } from './components/HeroCard';
import { Header } from './container/Header';
import { useGetWeather } from './hooks/useGetWeather';

function App() {
  const { weather } = useGetWeather();
  console.log(weather, '---weather here');

  return (
    <div className='flex flex-col justify-center items-center gap-5 p-4'>
      <div className='w-full'>
        <Header />
      </div>
      <HeroCard
        temperature={weather?.temperature}
        wind={weather?.wind}
      />
    </div>
  );
}

export default App;

import { HeroCard } from './components/HeroCard';
import { Header } from './container/Header';

function App() {
  return (
    <div className='flex flex-col justify-center items-center gap-5 p-4'>
      <div className='w-full'>
        <Header />
      </div>
      <HeroCard />
    </div>
  );
}

export default App;

type HeroCardProps = {
  location?: string;
  temperature?: number | string;
  humidity?: number | string;
  visibility?: number | string;
  airPressure?: number | string;
  wind?: number | string;
};

export const HeroCard = ({
  location,
  temperature = '...',
  humidity = '...',
  visibility = '...',
  airPressure = '...',
  wind = '...',
}: HeroCardProps) => {
  return (
    <div className='justify-between text-white w-[400px] h-[300px] flex flex-col  items-center p-3 bg-purple-800 border rounded-2xl'>
      <h3 className='text-2xl font-bold capitalize'>{location ?? 'Surkhet'}</h3>
      <div className='w-fit flex flex-row items-center gap-4'>
        <h3>temperature</h3>
        <h1>{temperature}</h1>
      </div>
      <div className='uppercase flex justify-between w-full flex-row gap-2 '>
        <div className=''>
          <h4>humidity</h4>
          <h3>{humidity}</h3>
        </div>
        <div>
          <h4>visibility</h4>
          <h3>{visibility}</h3>
        </div>
        <div>
          <h4>air pressure</h4>
          <h3>{airPressure}</h3>
        </div>
        <div>
          <h4>wind</h4>
          <h3>{wind}</h3>
        </div>
      </div>
    </div>
  );
};

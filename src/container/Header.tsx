import { useState } from 'react';
import { Button } from '../components/Button';

export const Header = () => {
  const [selected, setSelected] = useState('Today');

  return (
    <div className='flex flex-row justify-between items-center'>
      <Button
        selected={selected}
        setSelected={setSelected}
        label='Today'
      />
      <Button
        selected={selected}
        setSelected={setSelected}
        label='List'
      />
      <Button
        selected={selected}
        setSelected={setSelected}
        label='News'
      />
      <Button
        selected={selected}
        setSelected={setSelected}
        label='Profile'
      />
    </div>
  );
};

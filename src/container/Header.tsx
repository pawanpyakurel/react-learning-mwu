import { useState } from 'react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router';

export const Header = () => {
  const [selected, setSelected] = useState('Today');

  const navigation = useNavigate();

  const onListClick = (type: string) => {
    navigation('/list');
    setSelected(type);
  };

  return (
    <div className='flex flex-row justify-between items-center'>
      <Button
        selected={selected}
        setSelected={setSelected}
        label='Today'
      />
      <Button
        selected={selected}
        setSelected={onListClick}
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

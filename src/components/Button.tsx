import type React from 'react';

type ButtonProps = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  label: string;
};

export const Button = ({ selected, setSelected, label }: ButtonProps) => {
  return (
    <button
      className={`text-white cursor-pointer ${
        selected === label ? 'font-bold underline' : ''
      }`}
      onClick={() => setSelected(label)}>
      {label}
    </button>
  );
};

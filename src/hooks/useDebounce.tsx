import { useEffect, useState } from 'react';

export const useDebounce = (text: string, time = 500) => {
  const [debouncedText, setDebouncedText] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedText(text);
    }, time);

    return () => clearTimeout(timeout);
  }, [text]);

  return debouncedText;
};

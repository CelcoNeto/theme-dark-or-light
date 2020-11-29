import { useEffect, useState } from 'react';

const usePersistedTheme = (key: string, initialState: any) => {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);
    const setedTheme = storageValue ? JSON.parse(storageValue) : initialState;
    return setedTheme;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default usePersistedTheme;

import { useEffect, useState } from 'react';

const useThemeMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches 
    ) {
        setTheme('dark')
      
    }
  }, []);

  return { theme, toggleTheme }
};

export { useThemeMode }
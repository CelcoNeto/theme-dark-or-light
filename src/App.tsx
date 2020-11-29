import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/headers';
import GlobalStyle from './styles/globals';
import dark from './styles/themes/dark';
import ligth from './styles/themes/ligth';
import usePersistedState from './utils/hooks/usePersistedTheme';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState('theme', ligth);

  const toggleTheme = () => setTheme(theme.title === 'ligth' ? dark : ligth);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;

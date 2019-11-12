import React from 'react';
import MainScreen from './components/MainScreen';
import { ThemeProvider } from 'styled-components';
import theme from './elements/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainScreen />
    </ThemeProvider>
  );
}

export default App;

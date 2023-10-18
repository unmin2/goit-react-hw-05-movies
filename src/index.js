import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    bernred: '#eba4c0',
  },
  radii: {
    sm: '4px',
    md: '6px',
    lg: '25px',
  },
  spacing: value => `${value * 8}px`,
  rem: value => `${value / 16}rem`
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-05-movies">
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
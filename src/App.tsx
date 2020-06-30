import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './hooks';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router>
      <GlobalStyle />

      <AppProvider>
        <Routes />
      </AppProvider>
    </Router>
  );
}

export default App;

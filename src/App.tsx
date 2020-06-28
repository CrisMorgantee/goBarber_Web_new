import React from 'react';
import { AuthProvider } from './hooks/AuthContext';
import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      {/* <SignUp /> */}
    </>
  );
}

export default App;

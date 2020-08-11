import React from 'react';
import SignUp from './components/SignUp';

interface AppProps {
  theme: 'dark' | 'light',
}

function App({ theme }: AppProps) {
  return (
  <div className={theme}>
    <SignUp />
  </div>
  );
}

export default App;

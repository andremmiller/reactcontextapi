import React from 'react'
import Routes from './config/routes'
import './App.css'
import { UsersProvider } from './context/UsersContext';

function App() {
  return (
    <div className="App">
      <div className="mobile-container">
        <div className="header">
          <h1>Context API</h1>
        </div>
        <UsersProvider>
          <Routes />
        </UsersProvider>
      </div>
    </div>
  );
}

export default App;

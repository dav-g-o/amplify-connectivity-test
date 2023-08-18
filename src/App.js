import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

import Login from './components/login';
import Home from './components/home';

Amplify.configure(awsExports);

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  function updateAuthStatus(authStatus) {
    setisAuthenticated(authStatus);
  }

  return (
    <div>
      <Routes>
        <Route path='*' element={ <Home isAuthenticated={ isAuthenticated } updateAuthStatus={updateAuthStatus} /> } />
        <Route  path='/' exact= { true } element= { <Home isAuthenticated={ isAuthenticated } updateAuthStatus={updateAuthStatus} /> } />
        <Route path='/login' element= { <Login updateAuthStatus={updateAuthStatus} /> } /> 
      </Routes>
    </div>
  );
}

export default App;

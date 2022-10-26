import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './pages/Landing/Landing.js';
import Home from './pages/Home/Home.js';
import CountryDetail from './pages/CountryDetail/CountryDetail.js';
import CreateActivity from './pages/CreateActivity/CreateActivity.js';
import './assets/styles/globalStyles.css';

function App() {
  return <>
    <Route exact path='/' component={LandingPage} />
    <Route path='/home' component={Home} />
    <Route path='/country/:idCountry' component={CountryDetail} />
    <Route path='/create' component={CreateActivity} />
  </>
}

export default App;

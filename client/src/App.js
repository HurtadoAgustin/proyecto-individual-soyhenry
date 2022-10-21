import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.js';
import Home from './pages/Home.js';
import CountryDetail from './pages/CountryDetail.js';
import CreateActivity from './pages/CreateActivity.js';

function App() {
  return <>
    <Route exact path='/' component={LandingPage} />
    <Route path='/home' component={Home} />
    <Route path='/country/:idCountry' component={CountryDetail} />
    <Route path='/create' component={CreateActivity} />
  </>
}

export default App;

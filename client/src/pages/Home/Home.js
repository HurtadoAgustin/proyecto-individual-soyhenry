import React from 'react';
import { Link } from 'react-router-dom';
import CountryList from '../../containers/CountryList/CountryList.js';
import ListFilters from '../../containers/ListFilters/ListFilters.js';
import './Home.css';

function Home() {
  return <>
    <header>
      <Link to='/'>
        <button>Volver LandingPage</button>
      </Link>
      <Link to='/create'>
        <button>Crear actividad</button>
      </Link>
    </header>
    <hr />
    <div>
      <ListFilters />
      <hr />
      <CountryList />
    </div>
  </>
}

export default Home;
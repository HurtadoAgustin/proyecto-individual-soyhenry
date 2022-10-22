import React from 'react';
import { Link } from 'react-router-dom';
import CountryList from '../containers/CountryList.js';

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
    <div>
      <CountryList />
    </div>
  </>
}

export default Home;
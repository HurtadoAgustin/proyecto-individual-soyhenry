import React from 'react';
import { Link } from 'react-router-dom';
import CountryList from '../../containers/CountryList/CountryList.js';
import ListFilters from '../../containers/ListFilters/ListFilters.js';
import PageCounter from '../../components/PageCounter/PageCounter.js';
import './Home.css';

function Home() {
  return <>
    <header className='home__header'>
      <div className='home__links'>
        <Link to='/'>
          <button>Volver LandingPage</button>
        </Link>
        <Link to='/create'>
          <button>Crear actividad</button>
        </Link>
      </div>
      <ListFilters />
    </header>
    <main className='home__main'>
      <CountryList />
    </main>
    <footer>
      <PageCounter />
    </footer>
  </>
}

export default Home;
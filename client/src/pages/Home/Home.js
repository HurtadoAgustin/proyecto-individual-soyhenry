import React from 'react';
import { Link } from 'react-router-dom';
import CountryList from '../../containers/CountryList/CountryList.js';
import ListFilters from '../../containers/ListFilters/ListFilters.js';
import PageCounter from '../../components/PageCounter/PageCounter.js';
import './Home.css';

function Home() {
  return <>
    <header className='home--header'>
      <div className='home--header__links'>
        <Link to='/'>
          <button>LandingPage</button>
        </Link>
        <Link to='/create'>
          <button>Create new Activity</button>
        </Link>
      </div>
      <ListFilters />
    </header>
    <main className='home--main'>
      <CountryList />
    </main>
    <footer className='home--footer'>
      <PageCounter />
    </footer>
  </>
}

export default Home;
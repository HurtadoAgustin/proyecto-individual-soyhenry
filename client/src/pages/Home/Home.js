import React from 'react';
import { Link } from 'react-router-dom';
import CountryList from '../../containers/CountryList/CountryList.js';
import ListFilters from '../../containers/ListFilters/ListFilters.js';
import PageCounter from '../../components/PageCounter/PageCounter.js';
import './Home.css';

function Home() {
  return <>
    <header className='home--header'>
      <Link to='/'>
        <button className='home--header__links'>
          Go Landing
        </button>
      </Link>
      <div className='home--header__middle'>
        <h1>Country Searcher</h1>
        <ListFilters />
      </div>
      <Link to='/create'>
        <button className='home--header__links'> 
          Create Activity!
        </button>
      </Link>
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
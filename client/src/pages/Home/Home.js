import React from 'react';
import Header from '../../containers/Header/Header.js';
import CountryList from '../../components/CountryList/CountryList.js';
import ListFilters from '../../components/ListFilters/ListFilters.js';
import PageCounter from '../../components/PageCounter/PageCounter.js';
import './Home.css';

function Home() {
  return <>
    <Header
      title='Country Searcher'
      link='Create Activity!'
      path='/create'
      color='orange'
    >
      <ListFilters />
    </Header>
    <main className='home--main'>
      <CountryList />
    </main>
    <footer className='home--footer'>
      <PageCounter />
    </footer>
  </>
}

export default Home;
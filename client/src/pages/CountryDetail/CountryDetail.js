import React from 'react';
import CountryDetailCard from '../../components/CountryDetailCard/CountryDetailCard.js';
import Header from '../../containers/Header/Header.js';
import './CountryDetail.css';

function CountryDetail(props) {
  const idCountry = props.match.params.idCountry;

  return <>
    <Header 
      title='Country Detail'
      link='Go Home'
      path='/home'
      color='orange'
    />
    <main className='detail--main'>
      <CountryDetailCard idCountry={idCountry}/>
    </main>
  </>
}

export default CountryDetail;
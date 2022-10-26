import React from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.css';

function CountryCard({id, name, flag, continent}) {
  return <div className='country-card'>
    <Link
      to={`/country/${id}`}
      className='country-card__link'
    >
      <h3
        className='
          country-card--text
          country-card--text__continent
        '
      >
        {continent}
      </h3>
      <h2
        className='
          country-card--text
          country-card--text__name
        '
      >
        {name}
      </h2>
      <img
        className='country-card--img'
        src={flag}
        alt='country flag'/>
    </Link>
  </div>
}

export default CountryCard;
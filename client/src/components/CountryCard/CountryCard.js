import React from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.css';

function CountryCard({id, name, flag, continent}) {
  return <Link
      to={`/country/${id}`}
      className='country-card--link'
    >
      <img
        className='country-card--img'
        src={flag}
        alt='country flag'/>
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
    </Link>
}

export default CountryCard;
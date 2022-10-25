import React from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.css';

function CountryCard({id, name, flag, continent}) {
  return <div>
    <Link to={`/country/${id}`}>{id}</Link>
    <h1>{name}</h1>
    <p>{continent}</p>
    <img src={flag} alt='country flag' width='150px' height='150px'/>
    <hr/>
  </div>
}

export default CountryCard;
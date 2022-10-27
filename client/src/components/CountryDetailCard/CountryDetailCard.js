import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry, clearCountry } from '../../redux/actions.js';
import './CountryDetailCard.css';

function CountryDetail({ idCountry }) {
  const dispatch = useDispatch();
  const country = useSelector(state => state.country);

  useEffect(() => {
    dispatch(getCountry(idCountry));
    return () => {
      dispatch(clearCountry());
    };
  }, [dispatch, idCountry]);

  return <div className='card-detail--container'>
    <img
      className='card-detail--flag'
      src={country.flag}
      alt='country flag'
    />
    <div className='card-detail--info'>
      <div className='card-detail--info__info'>
        <h2>
          {country.name} <i>({country.id})</i>
        </h2>
        <h3>- {country.capital} -</h3>
        <span>Continent: {country.continent}</span>
        <span>Subregion: {country.subregion}</span>
        <span>Area: {country.area} m2</span>
        <span>Population: {country.population} people</span>
      </div>
      <div className='card-detail--info__activities-container'>
        {country.Activities?.length ? country.Activities.map(activity =>
          <div className='card-detail--info__activities-item'>
            <h3>{activity.name}</h3>
            <span>Duration: {activity.duration}m</span>
            <span>Difficulty: {activity.difficulty}</span>
            <span>Season: {activity.season}</span>
          </div>)
          : <div className='card-detail--info__activities-link'>
            <Link to='/create'>Add a new Activity!</Link>
          </div>
        }
      </div>
    </div>
  </div>
}

export default CountryDetail;
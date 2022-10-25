import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountry, clearCountry } from '../redux/actions.js';

function CountryDetail(props) {
  const idCountry = props.match.params.idCountry;
  const dispatch = useDispatch();
  const countryDetail = useSelector(state => state.country);

  useEffect(() => {
    dispatch(getCountry(idCountry));
    return () => {
      dispatch(clearCountry());
    };
  }, [dispatch, idCountry]);

  return <>
    <Link to='/home'><button>GO HOME</button></Link>
    <p>{countryDetail.id}</p>
    <h1>{countryDetail.name}</h1>
    <h2>{countryDetail.capital}</h2>
    <p>{countryDetail.continent}</p>
    <p>{countryDetail.subregion}</p>
    <p>{countryDetail.area}m2</p>
    <p>{countryDetail.population} people</p>
    <img src={countryDetail.flag} alt='country flag' width='450px' height='450px'/>
    <div>
      {countryDetail.Activities?.map(activity => <div>
        <h2>{activity.name}</h2>
        <p>{activity.duration}</p>
        <h3>{activity.difficulty}</h3>
        <p>{activity.season}</p>
      </div>)}
    </div>
  </>
}

export default CountryDetail;
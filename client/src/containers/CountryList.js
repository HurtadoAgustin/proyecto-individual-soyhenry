import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries, getCountriesByName } from '../redux/actions.js';
import CountryCard from '../components/CountryCard.js';

function CountryList() {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries);
  const filters = useSelector(state => state.filters);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    dispatch(
      (!filters.text)
        ? getAllCountries()
        : getCountriesByName(filters.text)  
    );
  }, [dispatch, filters]);
  
  useEffect(() => {
    let data = [...countries];
    data = (!!filters.typeAlpha)
      ? data.sort((a,b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
      : data.sort((a,b) => a.population - b.population)
    ;
    if(!filters.sortAsc) data = data.reverse();
    if(!!filters.continent) data = data.filter(country => country.continent === filters.continent);
    
    setCountryList(data);
  },[countries, filters])

  return <>
    {countryList?.map(country => <CountryCard
      key={country.id}
      id={country.id}
      name={country.name}
      flag={country.flag}
      continent={country.continent}
    />)}
  </>
}

export default CountryList;
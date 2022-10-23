import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries, getCountriesByName } from '../redux/actions.js';
import CountryCard from '../components/CountryCard.js';

function CountryList() {
  const dispatch = useDispatch();
  const countryList = useSelector(state => state.countries);
  const filters = useSelector(state => state.filters);

  useEffect(() => {
    dispatch(
      (!filters.text)
        ? getAllCountries()
        : getCountriesByName(filters.text)
    );
  }, [dispatch, filters]);

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
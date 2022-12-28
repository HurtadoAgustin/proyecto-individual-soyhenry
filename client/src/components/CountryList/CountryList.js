import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, clearError } from '../../redux/actions.js';
import { filterQueryParser } from '../../utils/parsers.js';
import CountryCard from '../CountryCard/CountryCard.js';
import ErrorHandler from '../ErrorHandler/ErrorHandler.js';

function CountryList() {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries);
  const filters = useSelector(state => state.filters);
  const error = useSelector(state => state.error);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    dispatch(clearError());
    dispatch(getCountries(filterQueryParser(filters)));
  }, [dispatch, filters]);
  
  useEffect(() => {
    let data = [...countries];
    if(!data.length) return;
    
    const COUNTRIES_PER_PAGE = 9;
    const dataPerPage = [];
    for(let i = 0; i < COUNTRIES_PER_PAGE; i++){
      let el = (COUNTRIES_PER_PAGE * filters.page) + i;
      if(data[el]) dataPerPage.push(data[el]);
    }

    if(!dataPerPage.length) return;
    setCountryList(dataPerPage);
  },[countries, filters])

  return <>
    { ( !error )
      ? countryList?.map(country =>
      <CountryCard
        key={country.id}
        id={country.id}
        name={country.name}
        flag={country.flag}
        continent={country.continent}
      />)
      : <ErrorHandler type='grey' message={error}/>
    }
  </>
}

export default CountryList;
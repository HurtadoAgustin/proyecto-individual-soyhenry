import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../redux/actions.js';
//import CountryCard from '../components/CountryCard.js';

function CountryList() {
  const dispatch = useDispatch();
  const countryList = useSelector(state => state.countries);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return <>
    {countryList?.map(country => <div>
        {country.id}
      </div>
    )}
  </>
}

export default CountryList;
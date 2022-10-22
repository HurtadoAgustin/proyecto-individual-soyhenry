import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../redux/actions.js';

function CountryDetail(props) {
  const idCountry = props.match.params.idCountry;
  const dispatch = useDispatch();
  const countryDetail = useSelector(state => state.country);

  useEffect(() => {
    dispatch(getCountry(idCountry));
  }, [dispatch, idCountry]);

  return <>
    <div>{countryDetail.name}</div>
  </>
}

export default CountryDetail;
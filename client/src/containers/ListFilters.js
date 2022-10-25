import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveFilters } from '../redux/actions.js';

const initialFilters = {
  page: 0,
  text: '',
  sortAsc: false, // true: sort ascending, false: sort descending
  typeAlpha: false, // true: alphabetical, false: population
  continent: '',
  activity: {},
}

function ListFilters() {
  const dispatch = useDispatch();
  const continents = useSelector(state => state.continents);
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    dispatch(saveFilters(filters));
  },[dispatch, filters]);

  const addPageHandler = () => setFilters(
    {...filters, page: filters.page + 1}
  );

  const discountPageHandler = () => {
    if(filters.page > 0) setFilters(
      {...filters, page: filters.page - 1}
  )};
  
  const onTextChangeHandler = (e) => setFilters(
    {...filters, text: e.target.value}
  );

  const onSortButtonHandler = () => setFilters(
    {...filters, sortAsc: !filters.sortAsc}
  );
  
  const onTypeButtonHandler = () => setFilters(
    {...filters, typeAlpha: !filters.typeAlpha}
  );
  
  const onContinentSelectHandler = (e) => setFilters(
    {...filters, continent: e.target.value}
  );

  return <>
    <button onClick={discountPageHandler}>-</button>
    <div>{filters.page}</div>
    <button onClick={addPageHandler}>+</button>
    <input type='text' value={filters.text} onChange={onTextChangeHandler}/>
    <button onClick={onSortButtonHandler}>
      {filters.sortAsc ? 'Sort Ascending' : 'Sort Descending'}
    </button>
    <button onClick={onTypeButtonHandler}>
      {filters.typeAlpha ? 'Alphabetical' : 'Population'}
    </button>
    <select
      value={filters.continent}
      onChange={onContinentSelectHandler}
    >
      <option value=''>All Continents</option>
      {continents?.map((continent, index) => <option
        value={continent}
        key={index}
      >{continent}</option>)}
    </select>
  </>
}

export default ListFilters;
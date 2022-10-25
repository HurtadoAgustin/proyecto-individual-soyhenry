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

  const onChangeHandler = (e) => setFilters(
    {...filters, [e.target.name]: e.target.value}
  );

  const onToggleHandler = (e) => setFilters(
    {...filters, [e.target.name]: !filters[e.target.name]}
  );

  const addPageHandler = () => setFilters(
    {...filters, page: filters.page + 1}
  );

  const discountPageHandler = () => {
    if(filters.page > 0) setFilters(
      {...filters, page: filters.page - 1}
  )};

  return <>
    <button
      onClick={discountPageHandler}
    >
      -
    </button>
    <div>{filters.page}</div>
    <button
      onClick={addPageHandler}
    >
      +
    </button>
    <input
      name='text'
      type='text'
      value={filters.text}
      onChange={onChangeHandler}
    />
    <button
      name='sortAsc'
      onClick={onToggleHandler}
    >
      {filters.sortAsc ? 'Sort Ascending' : 'Sort Descending'}
    </button>
    <button
      name='typeAlpha'
      onClick={onToggleHandler}
    >
      {filters.typeAlpha ? 'Alphabetical' : 'Population'}
    </button>
    <select
      name='continent'
      value={filters.continent}
      onChange={onChangeHandler}
    >
      <option value=''>All Continents</option>
      {continents?.map((continent, index) =>
        <option
          value={continent}
          key={index}
        >
          {continent}
        </option>)}
    </select>
  </>
}

export default ListFilters;
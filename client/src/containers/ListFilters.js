import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  </>
}

export default ListFilters;
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveFilters } from '../redux/actions.js';

function ListFilters() {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    page: 0,
    text: '',
    ascendent: false,
  });

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

  const onAscendentButtonHandler = () => setFilters(
    {...filters, ascendent: !filters.ascendent}
  );

  return <>
    <button onClick={discountPageHandler}>-</button>
    <div>{filters.page}</div>
    <button onClick={addPageHandler}>+</button>
    <input type='text' value={filters.text} onChange={onTextChangeHandler}/>
    <button onClick={onAscendentButtonHandler}>
      {filters.ascendent ? 'Ascendent' : 'Descendent'}
    </button>
  </>
}

export default ListFilters;
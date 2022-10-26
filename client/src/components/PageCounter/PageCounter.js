import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveFilters } from '../../redux/actions.js';
import { initialFilters } from '../../utils/initialObjects.js';
import './PageCounter.css';

function PageCounter() {
  const dispatch = useDispatch();
  const globalFilters = useSelector(state => state.filters);
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    dispatch(saveFilters(filters));
  },[dispatch, filters]);

  const addPageHandler = () => setFilters({...globalFilters, page: filters.page + 1});

  const discountPageHandler = () => {
    if(filters.page > 0) setFilters({...globalFilters, page: filters.page - 1});
  };

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
  </>
}

export default PageCounter;
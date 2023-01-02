import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveFilters } from '../../redux/actions.js';
import { INITIAL_FILTERS } from '../../utils/initialObjects.js';
import './PageCounter.css';

function PageCounter() {
  const dispatch = useDispatch();
  const globalFilters = useSelector(state => state.filters);
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  useEffect(() => {
    dispatch(saveFilters(filters));
    window.scrollTo(0, 0);
  },[dispatch, filters]);

  const addPageHandler = () => setFilters({...globalFilters, page: filters.page + 1});

  const discountPageHandler = () => {
    if(filters.page > 0) setFilters({...globalFilters, page: filters.page - 1});
  };

  return <div className='counter'>
    <button
      className='
        counter--items
        counter--items__button
      '
      onClick={discountPageHandler}
    >
      -
    </button>
    <div className='
      counter--items
      counter--items__number
    '>
      {globalFilters.page}
    </div>
    <button
      className='
        counter--items
        counter--items__button
      '
      onClick={addPageHandler}
    >
      +
    </button>
  </div>
}

export default PageCounter;
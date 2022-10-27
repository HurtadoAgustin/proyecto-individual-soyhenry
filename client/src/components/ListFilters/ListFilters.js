import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveFilters } from '../../redux/actions.js';
import { initialFilters } from '../../utils/initialObjects.js';
import './ListFilters.css';

function ListFilters() {
  const dispatch = useDispatch();
  const continents = useSelector(state => state.continents);
  const globalFilters = useSelector(state => state.filters);
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    dispatch(saveFilters(filters));
  },[dispatch, filters]);

  const onChangeHandler = (e) => setFilters(
    {...globalFilters, [e.target.name]: e.target.value}
  );

  const onToggleHandler = (e) => setFilters(
    {...globalFilters, [e.target.name]: !filters[e.target.name]}
  );

  return <div className='list-filters'>
    <input
      className='list-filters--searcher'
      name='text'
      type='search'
      value={filters.text}
      onChange={onChangeHandler}
    />
    <div className='list-filters--button__container'>
      <div
      className='list-filters--button'>
        <span>Order:</span>
        <button
          name='sortAsc'
          onClick={onToggleHandler}
        >
          {filters.sortAsc ? 'Ascending' : 'Descending'}
        </button>
      </div>
      <div 
        className='list-filters--button'>
        <span>Sort by:</span>
        <button
          name='typeAlpha'
          onClick={onToggleHandler}
        >
          {filters.typeAlpha ? 'Alphabetical' : 'Population'}
        </button>
      </div>
      <div className='list-filters--button'>
        <span>Filter by:</span>
        <select
          name='continent'
          value={filters.continent}
          onChange={onChangeHandler}
        >
          <option value=''>
            All Continents
          </option>
          {continents?.map((continent, index) =>
            <option
              className='list-filters--continents__item'
              value={continent}
              key={index}
              >
              {continent}
            </option>)}
        </select>
      </div>
    </div>
  </div>
}

export default ListFilters;
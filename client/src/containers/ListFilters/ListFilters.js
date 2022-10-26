import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveFilters } from '../../redux/actions.js';
import { initialFilters } from '../../utils/initialObjects.js';
import './ListFilters.css';

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

  return <div className='listfilters'>
    <input
      className='list-filters--searcher'
      name='text'
      type='searcher'
      value={filters.text}
      onChange={onChangeHandler}
    />
    <button
      className='list-filters--button__sort'
      name='sortAsc'
      onClick={onToggleHandler}
    >
      {filters.sortAsc ? 'Sort Ascending' : 'Sort Descending'}
    </button>
    <button
      className='list-filters--button__type'
      name='typeAlpha'
      onClick={onToggleHandler}
    >
      {filters.typeAlpha ? 'Alphabetical' : 'Population'}
    </button>
    <select
      className='list-filters--continents'
      name='continent'
      value={filters.continent}
      onChange={onChangeHandler}
    >
      <option
        className='list-filters--continents__item'
        value=''
      >
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
}

export default ListFilters;
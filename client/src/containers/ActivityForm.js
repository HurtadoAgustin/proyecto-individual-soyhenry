import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveFilters } from '../redux/actions.js';

const initialFormValues = {
  name: '',
  difficulty: 0,
  duration: 0,
  season: '',
  countries: [],
}
const SEASONS = ['summer', 'autumn', 'winter', 'spring'];


function ActivityForm() {
  const dispatch = useDispatch();
  const allCountriesNames = useSelector(state => state.allCountriesNames);
  const countriesRef = useRef('');

  const [formValues, setFormValues] = useState(initialFormValues);

  const onNameChangeHandle = ( e ) => {
    setFormValues({...formValues , name:e.target.value});
  };

  const onSubmitHandle = ( event ) => {
    event.preventDefault();
  }

  const onDifficultyChangeHandle = ( e ) => {
    setFormValues({...formValues , difficulty:e.target.value});
  }

  const onDurationChangeHandle = ( e ) => {
    setFormValues({...formValues , duration:e.target.value});
    console.log(e.target.name)
  }

  const onSeasonSelectHandler = ( e ) => {
    setFormValues({...formValues , season:e.target.value});
  }

  const onCountryAddHandler = () => {
    setFormValues({...formValues, countries: [...formValues.countries, countriesRef.current.value]})
  }

  return <form onSubmit={onSubmitHandle} >
    <div>
      <label>Name: </label>
      <input
        type='text'
        name='name'
        value={formValues.name}
        onChange={onNameChangeHandle}
      />
    </div>
    <br />
    <div>
      <label>Difficulty: </label>
      <input
        type='range'
        name='difficulty'
        min={0}
        max={5}
        step={1}
        value={formValues.difficulty}
        onChange={onDifficultyChangeHandle}
      />
      <div>{formValues.difficulty}</div>
    </div>
    <br />
    <div>
      <label>Duration: </label>
      <input
        type='range'
        name='duration'
        min={0}
        max={1440}
        step={15}
        value={formValues.duration}
        onChange={onDurationChangeHandle}
      />
      <div>{formValues.duration} minutos</div>
    </div>
    <br />
    <div>
      <label>Season: </label>
      <select
        value={formValues.season}
        onChange={onSeasonSelectHandler}
      >
        <option value=''></option>
        {SEASONS?.map((season, index) => <option
          value={season}
          key={index}
        >{season}</option>)}
      </select>
    </div>
    <hr />
    <div>
      <label>Countries: </label>
      <input list='opts' ref={countriesRef}/>
      <datalist id='opts'>
        {allCountriesNames?.map((country, index) =>
        <option value={country} key={index}>
          {country}
        </option>)}
      </datalist>
      <button onClick={onCountryAddHandler}>Add Country</button>
    </div>
    <br />
    <div style={{backgroundColor: 'red', height: '100px'}}>
      COUNTRIES
      <div>
        {[...formValues.countries].map((country, index) => <p key={index}>{country}</p>)}
      </div>
    </div>
    <hr />
    <button type='submit'>Create</button>
  </form>
}

export default ActivityForm;
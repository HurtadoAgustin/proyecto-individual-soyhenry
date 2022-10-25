import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

  const onChangeHandler = ( e ) => {
    setFormValues({...formValues , [e.target.name]:e.target.value});
  };

  const onCountryAddHandler = () => {
    setFormValues({...formValues, countries: [...formValues.countries, countriesRef.current.value]})
  }
  
  const onSubmitHandle = ( e ) => {
    e.preventDefault();
  }

  return <form onSubmit={onSubmitHandle} >
    <div>
      <label>Name: </label>
      <input
        name='name'
        type='text'
        value={formValues.name}
        onChange={onChangeHandler}
      />
    </div>
    <br />
    <div>
      <label>Difficulty: </label>
      <input
        name='difficulty'
        type='range'
        min={0}
        max={5}
        step={1}
        value={formValues.difficulty}
        onChange={onChangeHandler}
      />
      <div>{formValues.difficulty}</div>
    </div>
    <br />
    <div>
      <label>Duration: </label>
      <input
        name='duration'
        type='range'
        min={0}
        max={1440}
        step={15}
        value={formValues.duration}
        onChange={onChangeHandler}
      />
      <div>{formValues.duration} minutos</div>
    </div>
    <br />
    <div>
      <label>Season: </label>
      <select
        name='season'
        value={formValues.season}
        onChange={onChangeHandler}
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
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries, postActivity } from '../redux/actions.js';
import { initialFormValues } from '../utils/initialObjects.js';
import { SEASONS } from '../utils/constants.js';

function ActivityForm() {
  const dispatch = useDispatch();
  const allCountries = useSelector(state => state.allCountries);
  const countriesRef = useRef('');
  const [errorText, setErrorText] = useState('');

  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(()=>{
    dispatch(getAllCountries());
  },[dispatch]);
  
  /* ---- Handlers ---- */

  const onChangeHandler = ( e ) => {
    setFormValues({...formValues , [e.target.name]:e.target.value});
    setErrorText('');
  };

  const deleteSelectedHandler = ( e ) => {
    console.log(e.target)
    const newValues = [...formValues.countries].filter(el => el !== e.target.id);
    setFormValues({...formValues, countries: newValues})
  }
  
  const onResetHandler = () => {
    setFormValues(initialFormValues);
    countriesRef.current.value = '';
    setErrorText('');
  }

  /* ---- Form Validations ---- */
  
  const onCountryAddHandler = () => {
    if(!allCountries.length) return setErrorText('Error: please wait a second to call to the database');
    const countrySelected = countriesRef.current.value.toUpperCase();
    
    const countryFinder = ( country ) => {
      const countryName = country.name.toUpperCase();
      return country.id === countrySelected || countryName === countrySelected;
    }
    const isCountry = allCountries.find(countryFinder);
    if(!isCountry) return setErrorText('Error: write a real country.');
    
    const countryId = isCountry.id;
    const isRepeat = [...formValues.countries].find(country => country === countryId);
    if(!!isRepeat) return setErrorText('Error: country is already added.');

    setFormValues({...formValues, countries: [...formValues.countries, countryId]});
    countriesRef.current.value = '';
    setErrorText('');
  }
  
  const onSubmitHandler = ( e ) => {
    e.preventDefault();
    for(const input in formValues){
      if(!formValues[input] || formValues[input] === "0") return setErrorText(`Error: ${input} needed.`);
    }
    if(formValues.countries.length < 1) return setErrorText('Error: one country at least is needed.');
    if(formValues.name.length < 3) return setErrorText('Error: name of activity too short.');
    // submit
    dispatch(postActivity(formValues));
    onResetHandler();
  }

  return <form onSubmit={onSubmitHandler} >
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
      <div>
        {formValues.duration} minutos
      </div>
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
        {SEASONS?.map((season, index) =>
          <option
            value={season}
            key={index}
          >
            {season}
          </option>  
        )}
      </select>
    </div>
    <hr />
    <div>
      <label>Countries: </label>
      <input
        list='opts'
        ref={countriesRef}
      />
      <datalist id='opts'>
        {allCountries?.map(country =>
          <option
            value={country.name}
            key={country.id}
          >
            {country.id}
          </option>
        )}
      </datalist>
      <button
        type='button'
        onClick={onCountryAddHandler}
      >
        Add Country
      </button>
    </div>
    <br />
    <div style={{backgroundColor: 'red', height: '100px'}}>
      COUNTRIES
      <div>
        {[...formValues.countries].map((country, index) => 
          <div key={index}>
            {country}
            <button
              id={country}
              type='button'
              onClick={deleteSelectedHandler}
            >
              X
            </button>
          </div>
        )}
      </div>
    </div>
    <hr />
    <button type='submit'>
      Create
    </button>
    <button
      type='button'
      onClick={onResetHandler}
    >
      Reset
    </button>
    <p>{errorText}</p>
  </form>
}

export default ActivityForm;
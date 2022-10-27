import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries, postActivity } from '../../redux/actions.js';
import { initialFormValues } from '../../utils/initialObjects.js';
import { SEASONS } from '../../utils/constants.js';
import './ActivityForm.css';

function ActivityForm() {
  const dispatch = useDispatch();
  const allCountries = useSelector(state => state.allCountries);
  const countriesRef = useRef('');
  const [errorText, setErrorText] = useState('');
  const [formValues, setFormValues] = useState(initialFormValues);
  const [countriesFlags, setCountriesFlags] = useState([]);

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
    setCountriesFlags([...countriesFlags].filter(el => el.id !== e.target.id))
  }
  
  const onResetHandler = () => {
    setFormValues(initialFormValues);
    setCountriesFlags([]);
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
    const country = allCountries.find(countryFinder);
    if(!country) return setErrorText('Error: write a real country.');
    
    const isRepeat = [...formValues.countries].find(el => el === country.id);
    if(!!isRepeat) return setErrorText('Error: country is already added.');
    
    setFormValues({...formValues, countries: [...formValues.countries, country.id]});
    setCountriesFlags([...countriesFlags, {id: country.id, flag: country.flag}]);
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

  return <form id='form' onSubmit={onSubmitHandler}>
    <div className='form--container'>
      <div className='form--field'>
        <label>Name: </label>
        <input
          className='form--input'
          name='name'
          type='text'
          value={formValues.name}
          onChange={onChangeHandler}
          autoComplete='off'
        />
      </div>
      <div className='form--field'>
        <label>Difficulty: </label>
        <input
          className='form--field__range'
          name='difficulty'
          type='range'
          min={0}
          max={5}
          step={1}
          value={formValues.difficulty}
          onChange={onChangeHandler}
        />
        <span>{formValues.difficulty}</span>
      </div>
      <div className='form--field'>
        <label>Duration: </label>
        <input
          className='form--field__range'
          name='duration'
          type='range'
          min={0}
          max={1440}
          step={15}
          value={formValues.duration}
          onChange={onChangeHandler}
        />
        <span>
          {formValues.duration} minutos
        </span>
      </div>
      <div className='form--field'>
        <label>Season: </label>
        <select
          className='form--field__season'
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
      <div className='form--field'>
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
      <div className='form--field form--field__options'>
        <button type='submit'>
          Create
        </button>
        <button
          type='button'
          onClick={onResetHandler}
        >
          Reset
        </button>
        {errorText && <span>{errorText}</span>}
      </div>
    </div>
    <div className='form--field__country-list'>
      <span>Countries Selected:</span>
      <div className='country-list--container'>
        {[...countriesFlags].map(country => 
          <div key={country.id} >
            <img src={country.flag} alt='country selected'/>
            <button
              id={country.id}
              type='button'
              onClick={deleteSelectedHandler}
            >
              X
            </button>
          </div>
        )}
      </div>
    </div>
  </form>
}

export default ActivityForm;
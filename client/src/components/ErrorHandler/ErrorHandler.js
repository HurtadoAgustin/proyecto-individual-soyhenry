import React from 'react';
import './ErrorHandler.css';

function CountryList({ type, message }) {

  return <span className={`error-handler--${type}`}>
      {message}
    </span>
}

export default CountryList;
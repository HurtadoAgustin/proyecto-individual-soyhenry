import React from 'react';
import { Link } from 'react-router-dom';
import ActivityForm from '../../containers/ActivityForm/ActivityForm.js';
import './CreateActivity.css';

function CreateActivity() {
  return <>
    <Link to='/home'>
      <button>GO HOME</button>
    </Link>
    <ActivityForm />
  </>
}

export default CreateActivity;
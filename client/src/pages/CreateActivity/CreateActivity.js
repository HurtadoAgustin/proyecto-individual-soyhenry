import React from 'react';
import Header from '../../containers/Header/Header.js';
import ActivityForm from '../../containers/ActivityForm/ActivityForm.js';
import './CreateActivity.css';

function CreateActivity() {
  return <>
    <Header
      title='Activity Creator'
      link='Go Home'
      path='/home'
      color='blue'
    />
    <ActivityForm />
  </>
}

export default CreateActivity;
import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
  return (
  <main className='landing__background'>
    <Link
      to='/home'
    >
      <button className='landing__button'>
        Start Journey
      </button>
    </Link>
  </main>)
}

export default Landing;
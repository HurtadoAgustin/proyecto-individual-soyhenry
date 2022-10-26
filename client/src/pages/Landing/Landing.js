import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
  return (
  <main className='landing--background'>
    <Link to='/home'>
      <button className='landing--button'>
        Start Journey
      </button>
    </Link>
  </main>)
}

export default Landing;
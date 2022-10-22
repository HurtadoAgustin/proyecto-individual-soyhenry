import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return <div className='back'>
    <Link to='/home'>
      <button>GO HOME</button>
    </Link>
  </div>
}

export default LandingPage;
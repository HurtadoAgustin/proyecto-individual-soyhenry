import React from 'react';
import { Link } from 'react-router-dom';

function CreateActivity() {
  return <>
    <Link to='/home'>
      <button>GO HOME</button>
    </Link>
  </>
}

export default CreateActivity;
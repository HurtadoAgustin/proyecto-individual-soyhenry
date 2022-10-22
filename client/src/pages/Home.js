import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return <>
    <header>
      <Link to='/'>
        <button>Volver LandingPage</button>
      </Link>
      <Link to='/create'>
        <button>Crear actividad</button>
      </Link>
    </header>
  </>
}

export default Home;
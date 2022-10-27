import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
  return <header className='header'>
      <Link to='/'>
        <button className='header__link'>
          Go Landing
        </button>
      </Link>
      <div className='header__middle'>
        <h1>{props.title}</h1>
        {props.children}
      </div>
      <Link to={props.path}>
        <button className='header__link'> 
          {props.link}
        </button>
      </Link>
    </header>
}

export default Header;
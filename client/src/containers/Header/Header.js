import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
  const { title, path, link, color } = props;
  return <header className={`header header--${color}`}>
    <Link to='/'>
      <button className={`header--link header--link__${color}`}>
        <span>Go Landing</span>
      </button>
    </Link>
    <div className='header--middle'>
      <h1>{title}</h1>
      {props.children}
    </div>
    <Link to={path}>
      <button className={`header--link header--link__${color}`}> 
        <span>{link}</span>
      </button>
    </Link>
  </header>
}

export default Header;
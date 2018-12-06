import React from 'react';
import logo from './logo.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
       <nav  className="black">
    <div className="nav-wrapper">
    <Link to={`/`}>
      <a href="/" className="brand-logo ">
      <img className="logo" src={logo} />
      </a>
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Reload Robots</a></li>

      </ul>
    </div>
  </nav>
    </div>
  )
}

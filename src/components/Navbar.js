import React from 'react';
import logo from './logo.png'

export default function Navbar() {
  return (
    <div>
       <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo ">
      <img className="logo" src={logo} />
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">-</a></li>
        <li><a href="badges.html">--</a></li>
        <li><a href="collapsible.html">---</a></li>
      </ul>
    </div>
  </nav>
    </div>
  )
}

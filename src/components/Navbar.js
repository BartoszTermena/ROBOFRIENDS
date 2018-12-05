import React from 'react';
import logo from './logo.png'

export default function Navbar() {
  return (
    <div>
       <nav  className="black">
    <div className="nav-wrapper">
      <a href="/" className="brand-logo ">
      <img className="logo" src={logo} />
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">-</a></li>
        <li><a href="/">--</a></li>
        <li><a href="/">---</a></li>
      </ul>
    </div>
  </nav>
    </div>
  )
}

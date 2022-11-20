import React from 'react';
import { MdBolt } from 'react-icons/md';
import '..//App.css';

const Nav = () => {
  return (
    // Import into the home page. Will be a sticky nav bar
    <div>
      {/* Header */}
      <div className="center">
        <h1 className="header"><img className="logo" src={MdBolt} alt="electric logo" />Onesimo Electric</h1>
      </div>

      {/* Navbar */}
      <div className="list-group left">
        <ul className="list-items">
          <li className="home">
            <a className="home-btn" href="">Home</a>
          </li>
          <li className="quote">
            <a className="req-btn" href="">Request Quote</a>
          </li>
          <li className="contact">
            <a className="contact-btn" href="">Contact Us</a>
          </li>
          <li className="emerg">
            <a className="emerg-btn" href="">Emergency</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;
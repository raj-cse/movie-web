import React from 'react';
import './Header.css';
import logo from '../../Image/ffTiYckswWi9iJ3Oj4vRm-transformed.png';
import searchIcon from '../../Image/logo.svg';

export const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <img className='header-icon' src={logo} alt="Movie Zone Logo" />
        <ul className='nav-list'>
          <li className='nav-item'>Home</li>
          <li className='nav-item'>Genre</li>
          <li className='nav-item'>Movies</li>
          <li className='nav-item'>Contact</li>
        </ul>
      </div>

      <div className='search-box'>
        <input type="text" placeholder='Search' />
        <img src={searchIcon} alt="Search" className='search-icon' />
        <div className='sign-in'>
          <button className='sign-button'>Sign In</button>
        </div>
      </div>
    </div>
  );
};

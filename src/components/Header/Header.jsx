import React, { useState } from 'react';
import './Header.css';
import logo from '../../Image/ffTiYckswWi9iJ3Oj4vRm-transformed.png';
import searchIcon from '../../Image/logo.svg';
import hamburgerIcon from '../../Image/icons8-line-width-24-removebg-preview.png';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${query}`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsGenreOpen(false); // Close genre dropdown when toggling menu
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const toggleGenre = () => {
    setIsGenreOpen(!isGenreOpen);
  };

  return (
    <div className='header'>
      <div className='left-container'>
        <img className='header-icon' src={logo} alt="Movie Zone Logo" />
        <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <li className='nav-item'>Home</li>
          <li 
            className={`nav-item genre-item ${isGenreOpen ? 'open' : ''}`} 
            onClick={toggleGenre}
          >
            Genre
            <ul className={`genre-dropdown ${isGenreOpen ? 'open' : ''}`}>
              <li>Action</li>
              <li>Comedy</li>
              <li>Drama</li>
              <li>Horror</li>
              <li>Romance</li>
              <li>Sci-Fi</li>
              {/* Add more genres as needed */}
            </ul>
          </li>
          <li className='nav-item'>Movies</li>
          <li className='nav-item'>Contact</li>
        </ul>
      </div>

      <div className='right-container'>
        <div className='search-box'>
          <input 
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder='Search' 
          />
          <img src={searchIcon} alt="Search" className='search-icon' onClick={handleSearch} />
        </div>
        
        <div className='sign-in'>
          <button className='sign-button'>Sign In</button>
        </div>

        <img
          src={hamburgerIcon}
          alt="Hamburger Menu"
          className='hamburger-icon'
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
};

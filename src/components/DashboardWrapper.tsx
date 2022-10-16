import React from 'react';
import {
  Avatar,
  bellIcon,
  caretDownBlue,
  Logo,
  searchIcon,
} from '../assets/strings/exports';

const DashboardWrapper = () => {
  return (
    <div>
      <header>
        <img src={Logo} alt='lendsqr-logo' />
        <form>
          <input
            type='search'
            name='search'
            id='search'
            placeholder='Search for anything'
          />
          <button type='submit'>
            <img src={searchIcon} alt='search-icon' />
          </button>
        </form>
        <div>
          <a href='/'>Docs</a>

          <img src={bellIcon} alt='notifications' />
          <img src={Avatar} alt='current-user' />
          <p>Adejidi</p>
          <img src={caretDownBlue} alt='' />
        </div>
      </header>
    </div>
  );
};

export default DashboardWrapper;

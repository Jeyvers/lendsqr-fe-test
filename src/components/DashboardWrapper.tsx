import { FormEvent } from 'react';
import {
  Avatar,
  bellIcon,
  caretDownBlue,
  Logo,
  searchIcon,
} from '../assets/strings/exports';
import { Children } from '../assets/strings/model';
import styles from '../css/dashboard.module.css';

const DashboardWrapper = ({ children }: Children) => {
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={Logo} alt='lendsqr-logo' />
        <form className={styles.searchForm} onSubmit={handleSearch}>
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
        <div className={styles.profile}>
          <a href='/'>Docs</a>

          <img src={bellIcon} alt='notifications' />

          <div>
            <img className={styles.Avatar} src={Avatar} alt='current-user' />
            <p>Adejidi</p>
            <img src={caretDownBlue} alt='' />
          </div>
        </div>
      </header>
      <aside className={styles.aside}>ASIDE</aside>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default DashboardWrapper;

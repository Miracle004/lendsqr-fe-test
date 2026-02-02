import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* Hamburger Menu */}
        <button className={styles.hamburger} onClick={onMenuClick} type="button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="#213F7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Logo */}
        <Link to="/dashboard" className={styles.logo}>
          <img src="/icons/lendsqr_logo.svg" alt="Lendsqr" />
        </Link>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for anything"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button className={styles.searchButton} type="button">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5.5 0C2.46243 0 0 2.46243 0 5.5C0 8.53757 2.46243 11 5.5 11C6.74031 11 7.87886 10.5784 8.78568 9.87116L12.4573 13.5428C12.8478 13.9334 13.4809 13.9334 13.8714 13.5428C14.2619 13.1523 14.2619 12.5192 13.8714 12.1287L10.1997 8.45704C10.907 7.55022 11.3286 6.41168 11.3286 5.17136C11.3286 2.13379 8.86614 -0.328644 5.82857 -0.328644L5.5 0ZM5.5 2C7.433 2 9 3.567 9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2Z" fill="white"/>
            </svg>
          </button>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <Link to="/docs" className={styles.link}>Docs</Link>
          
          <button className={styles.iconButton} type="button">
            <img src="/icons/np_notification_2425223_000000 1.svg" alt="Notifications" />
          </button>

          <div className={styles.userMenu}>
            <img src="/icons/acct_avatar.svg" alt="User" className={styles.avatar} />
            <span className={styles.userName}>Adedeji</span>
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" className={styles.dropdown}>
              <path d="M4 5L0.535898 0.5L7.4641 0.5L4 5Z" fill="#213F7D"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

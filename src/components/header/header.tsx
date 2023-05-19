import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <header>
      <div className={styles.navigation_wrapper}>
        <h1 className={styles.app_header}>Викторина!!!</h1>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import styles from './header.module.css';
import '../../globals.css';

function Header() {


  const rootClasses = [styles.navigation_wrapper, `container`].join(' ');

  return (
    <header>
      <div className={rootClasses}>
        <h1 className={styles.header_text}>Викторина!!!</h1>
      </div>
    </header>
  );
}

export default Header;

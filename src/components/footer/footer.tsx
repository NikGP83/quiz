import React from 'react';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.app_footer}>
      <span className={styles.footer_text}>Created by &copy;Nikolay Golovin</span>
    </footer>
  );
}

export default Footer;

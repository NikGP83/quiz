import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header>
      <div className='navigation-wrapper'>
        <h1 className='app-header'>Викторина, выбери категорию вопросов!</h1>
        <ul>
          <li>
            <Link href='#'>Frontend</Link>
          </li>
          <li>
            <Link href='#'>Backend</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

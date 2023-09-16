import React from 'react';
import './Header.scss'

export default function Header() {
  return (
    <header className="header-container">
      <div>
        <a href="#/">
          <h1>Online Shopping Store</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
        </a>
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  )
}

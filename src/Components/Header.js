import React from 'react'
import './Header.css';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <div className="header-wrapper">
      <div className="title">
        <h1>T O D O L I S T</h1>
      </div>
      <div className="theme">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Header

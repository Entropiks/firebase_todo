import React from 'react'
import './ThemeToggle.css';

function ThemeToggle() {
  return (
    <div>
      <div className="button r" id="button-1">
        <input type="checkbox" className="checkbox" />
        <div className="knobs"></div>
        <div className="layer"></div>
      </div>
    </div>
  )
}

export default ThemeToggle

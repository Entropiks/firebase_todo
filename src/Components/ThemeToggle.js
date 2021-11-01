import React from 'react'
import './ThemeToggle.css';

function ThemeToggle() {
  return (
    <div>
      <div className="button r" id="button-1">
        {/* When the input is clicked here, we need to change styles */}
        <input type="checkbox" className="checkbox" />
        <div className="knobs"></div>
        <div className="layer"></div>
      </div>
    </div>
  )
}

export default ThemeToggle

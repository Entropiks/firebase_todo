import React from 'react';
import './UserInput.css';

function UserInput() {
  return (
    <div className="input-wrapper">
      <div className="input-toggle">
        <div className="checkmark"></div>
      </div>
      <div className="input-field">
        <form>
          <input type="text" placeholder="Enter an item.." autofocus></input>
        </form>
      </div>
    </div>
  )
}

export default UserInput

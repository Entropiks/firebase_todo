import React, { useState } from 'react';
import './UserInput.css';

function UserInput() {

  // new state variable for when a user inputs something
  const [item, setUserItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`item: ${item}`);
  }

  return (
    <div className="input-wrapper">
      <div className="input-toggle">
        <div className="checkmark"></div>
      </div>
      <div className="input-field">
        <form onSubmit={handleSubmit}>
          <input 
            value={item}
            type="text" 
            placeholder="Enter an item.."
            onChange={e => setUserItem(e.target.value)}
            />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  )
}

export default UserInput



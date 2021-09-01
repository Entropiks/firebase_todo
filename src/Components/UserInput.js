import React, { useState } from 'react';
import './UserInput.css';

function UserInput() {

  // new state variable for when a user inputs something
  const [items, setItems] = useState([]);
  const [item, setItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: new Date().getTime(),
      text: item,
      completed: false
    }

    setItems([...items].concat(newItem))
    setItem("")
  }

  return (
    <div className="input-wrapper">
      <div className="input-toggle">
        <div className="checkmark"></div>
      </div>
      <div className="input-field">
        {/* handleSubmit runs when button with type submit is clicked */}
        <form onSubmit={handleSubmit}>
          <input
            type="text" 
            placeholder="Enter an item.."
            onChange={(e) => setItem(e.target.value)} value={item}
            />
          <input type="submit" value="Submit"/>
        </form>
      </div>
      {/* move this to another component? */}
      {items.map((item) => <div key={item.id}>{item.text}</div>)}
    </div>
  )
}

export default UserInput



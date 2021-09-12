import React, { useState } from 'react';
import './UserInput.css';

function UserInput() {

  // new state variable for when a user inputs something
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);
  
  function handleSubmit(e) {
    e.preventDefault();

    // If nothing entered, alert the user, returning null stops it from being added to items state
    if (!item) {
      alert("please enter something");
      return null;
    }

    const newItem = {
      id: new Date().getTime(),
      text: item,
      completed: false
    }

    // concat joins the items together with the new entered item - adds to setItem
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
            className="userInputField"
            />
          <button type="submit" value="Submit" className="button-submit">Submit</button>
        </form>
      </div>
      {/* we want to pass item instead */}
      {/* {items.map((item) => <UserItem items={items} key={item.id}/>)} */}
    </div>
  )
}

export default UserInput



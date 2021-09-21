import React from 'react'
import './UserInput.css'

function AddItem() {

  const inputHandler = (e) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <div className="input-wrapper">
      <div className="input-toggle">
        <div className="checkmark"></div>
      </div>
      <div className="input-field">
        {/* handleSubmit runs when button with type submit is clicked */}
        <form>
          <input
            type="text" 
            placeholder="Enter an item.."
            onChange={inputHandler}
            className="userInputField"
            />
          <button type="submit" value="Submit" className="button-submit">Submit</button>
        </form>
      </div>
      {/* we want to pass item instead */}
      {/* {items.map((item) => <UserItem items={items} key={item.id}/>)} */}
    </div>
    </div>
  )
}

export default AddItem


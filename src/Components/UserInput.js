import React, { useState } from 'react';
import './UserInput.css';

function UserInput({ setInputText }) {

  // const inputTextHandler = (e) => {
  //   e.preventDefault();
  //   setInputText(e.target.value); 
  //   console.log(setInputText);
  // }

  const inputTextHandler = function(e) {
    e.preventDefault();
    setInputText(e.target.value);
    console.log(setInputText);
  }

  return (
    <div className="input-wrapper">
      <div className="input-field"> 
        <form>
          <input type="text" onChange={inputTextHandler}/>
          <button className="button-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default UserInput



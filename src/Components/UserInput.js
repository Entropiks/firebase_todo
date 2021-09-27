import React from 'react';
import './UserInput.css';

function UserInput({ inputText, setInputText, userList, setUserList }) {

  const inputTextHandler = function(e) {
    e.preventDefault();
    setInputText(e.target.value);
  }

  const submitHandler = function(e) {
    e.preventDefault();
    console.log("button clicked");
    setUserList([ ...userList, {text: inputText, completed: false, id: Math.random() * 1000 }]);
    console.log(userList);
    setInputText("");
  }

  return (
    <div className="input-wrapper">
      <div className="input-field"> 
        <form>
          <input value={inputTextHandler} type="text" onChange={inputTextHandler}/>
          <button onClick={submitHandler} className="button-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default UserInput



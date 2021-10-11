import React from 'react';
import './UserInput.css';

function UserInput({ inputText, setInputText, userList, setUserList }) {

  const inputTextHandler = function(e) {
    e.preventDefault();
    setInputText(e.target.value);
  }

  // prevent default, if inputtext does not exist, alert else set the userlist with the available userlist and props
  const submitHandler = function(e) {
    e.preventDefault();
    if (!inputText) {
      alert('please enter something');
    } else {
      setUserList([ ...userList, {text: inputText, completed: false, id: Math.random() * 1000 }]);
      // set InputText state to blank and also reset the form to clear the visual value
      setInputText('');
      document.getElementById('form-input').reset();
    }
  }

  const filterHandler = function(e) {
    console.log(e);
  }

  return (
    <div className="input-wrapper">
      <div className="input-field"> 
        <form id="form-input">
          <input className="input-field" placeholder="Enter something here.." type="text" onChange={inputTextHandler}/>
          <button onClick={submitHandler} className="button-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default UserInput



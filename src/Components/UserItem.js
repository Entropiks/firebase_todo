import React from 'react'
import './UserItem.css'

function UserItem({text}) {

  const deleteHandler = function(e) {
    alert("delete was pressed, lets remove it");
  }

  return (
    <div>
      <div className="useritem-wrapper"> 
        <div className="wrapper">
          <div className="checkmark" />
          <li className="user-item"><p>{text}</p></li>
        </div>
        <button onClick={deleteHandler} className="button-submit">Delete</button>
      </div>
    </div>
  )
}

export default UserItem

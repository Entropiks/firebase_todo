import React from 'react'
import './UserItem.css'

function UserItem({text, userList, setUserList, item }) {

  const deleteHandler = function(e) {
    console.log(item.id);
    // set the userList state to everything that does not match the item.id that is clicked when deleted is clicked
    setUserList(userList.filter((el) => el.id !== item.id));
  }

  const completedHandler = function(e) {
      setUserList(userList.map((el) => {
        if(el.id === item.id) {
          return {
            ...el, completed: !item.completed
          }
        }
        return el;
      }))
  }

  return (
    <div>
      <div className={`useritem-wrapper ${item.completed ? "completed" : ''} `}> 
        <div className="wrapper">
          <div onClick={completedHandler} className="checkmark" >
          <li className="user-item">
            <p>{text}</p>
          </li>
          </div>
        </div>
        <button onClick={deleteHandler} className="button-submit">Delete</button>
      </div>
    </div>
  )
}

export default UserItem

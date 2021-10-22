import React from 'react'
import './UserItem.css'
import CheckIcon from '../assets/icon-check.svg';
import DeleteIcon from '../assets/icon-cross.svg';

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
      <div className={`useritem-wrapper ${item.completed ? "useritem-wrapper-completed" : ''} `}> 
        <div className="wrapper">
          <div onClick={completedHandler} className={`checkmark ${item.completed ? "completed" : ''} `}>
          {/* <span className="completed-check" /> */}
          <li className="user-item">
            <p>{text}</p>
          </li>
          </div>
        </div>
        <img src={DeleteIcon} onClick={deleteHandler} className="button-delete"/>
      </div>
    </div>
  )
}

export default UserItem

import React from 'react'
import './UserItem.css'

function UserItem({text}) {
  return (
    <div className="useritem-wrapper">
      <li className="user-item">{text}</li>
      <div className="button-wrapper">
        <button>CHECK</button>
        <button>DELETE</button>
      </div>
    </div>
  )
}

export default UserItem

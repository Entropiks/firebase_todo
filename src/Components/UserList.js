import React from 'react'
import UserItem from './UserItem'
import './UserList.css'

function UserList({items}) {
  console.log(items);
  return (
    <div className="user-list">
      <ul className="list-wrapper">
        {items.map((item) => (
          <UserItem text={item.text}/>
        ))}
      </ul>
    </div>
  )
}

export default UserList

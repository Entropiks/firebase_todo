import React, { useState } from 'react'
import UserItem from './UserItem'
import UserInput from './UserInput'

function UserList() {

  const [inputText, setInputText] = useState("");
  const [userList, setUserList] = useState([]);

  return (
    <div>
      <UserInput 
        inputText={inputText}
        setInputText={setInputText}
        userList={userList}
        setUserList={setUserList} 
      />
      <div className="list-wrapper">
        <ul className="ul-wrapper">
         {userList.map(item => (
           <UserItem 
              item={item}
              userList={userList}
              setUserList={setUserList} 
              text={item.text} 
              key={item.id} 
            />
         ))}
        </ul>
      </div>
    </div>
  )
}

export default UserList

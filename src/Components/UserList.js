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
        setUserList={setUserList} />
      <UserItem />
    </div>
  )
}

export default UserList

import React, { useState } from 'react'
import UserItem from './UserItem'
import UserInput from './UserInput'

function UserList() {

  const [inputText, setInputText] = useState("");

  return (
    <div>
      <UserInput setInputText={setInputText}/>
      <UserItem />
      <p>{inputText}</p>
    </div>
  )
}

export default UserList

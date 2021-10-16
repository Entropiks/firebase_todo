import React, { useState, useEffect } from 'react'
import UserItem from './UserItem'
import UserInput from './UserInput'
import ListFooter from './ListFooter';

function UserList() {

  const [inputText, setInputText] = useState("");
  const [userList, setUserList] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    getLocalStorageUserList();
  }, [])

  // Everytime the userList changes, run this function which is being used to filter the list based on the filter clicked
  useEffect(() => {
    saveLocalStorageUserList();
    filterHandler();
  }, [userList, filterStatus]);

  // Set up some local storage
  const saveLocalStorageUserList = () => {
    localStorage.setItem("userList", JSON.stringify(userList));
  }

  // Set up some local storage
  const getLocalStorageUserList = () => {
    if (localStorage.getItem("userList") === null ) {
      localStorage.setItem("userList", JSON.stringify([]));
    } else {
      let storedUserList = JSON.parse(localStorage.getItem("userList"));
      setUserList(storedUserList);
    }
  }

  const filterHandler = () => {
    switch(filterStatus) {
      case 'completed' : setFilteredItems(userList.filter(item => item.completed === true));
      break;
      case 'uncompleted' : setFilteredItems(userList.filter(item => item.completed === false));
      break;
      default: setFilteredItems(userList);
    }
  }

  console.log(filteredItems);

  return (
    <div>
      <UserInput 
        inputText={inputText}
        setInputText={setInputText}
        userList={userList}
        setUserList={setUserList}
      />
      <div className="list-wrapper">
        <ListFooter 
          setFilterStatus={setFilterStatus}
          filterStatus={filterStatus}
          userList={userList}
          setUserList={setUserList}
        />
        <ul className="ul-wrapper">
         {filteredItems.map(item => (
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

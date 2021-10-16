import React from 'react'
import './ListFooter.css'

function ListFooter({ setFilterStatus, userList, setUserList }) {

  const filterHandler = function(e) {
    setFilterStatus(e.target.value);

    // lets set active on the clicked class for styling
    e.target.classList.toggle('active');
  }

  function clearList() {
    console.log("clicked");
    setUserList([]);
  }

  return (
    <div className="list-footer">
      {/* We need to pass the number of only completed items instead */}
      <p>{userList.length} Items</p> 
      <div className="filter">
        <button value="all" onClick={filterHandler}>All</button>
        <button value="completed" onClick={filterHandler}>Completed</button>
        <button value="uncompleted" onClick={filterHandler}>Uncompleted</button>
      </div>
      <div onClick={clearList} className="clear-list">
        <p>Clear Completed</p>
      </div>
    </div>
  )
}

export default ListFooter

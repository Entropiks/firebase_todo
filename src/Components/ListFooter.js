import React from 'react'
import './ListFooter.css'

function ListFooter({ filterStatus, setFilterStatus, userList, setUserList }) {

  const filterHandler = function(e) {
    setFilterStatus(e.target.value);
    
    // if filterStatus equal 'all'
    // add active class to all button
    // if (filterStatus === "all") {
    //   console.log("all");
    //   document.getElementById("all").classList.add("active");
    // } else {
    //   document.getElementById("all").classList.remove("active");
    // }

    // lets set active on the clicked class for styling
    // e.target.classList.toggle('active');
  }

  // Set the state of userList to an empty array when users hits the clear button
  function clearList() {
    setUserList([]);
  }

  return (
    <div className="list-footer">
      {/* We need to pass the number of only completed items instead */}
      <p>{userList.length} Items</p> 
      <div className="filter">
        <button id="all" value="all" onClick={filterHandler}>All</button>
        <button value="completed" onClick={filterHandler}>Completed</button>
        <button value="uncompleted" onClick={filterHandler}>Uncompleted</button>
      </div>
      <div onClick={clearList} className="clear-list">
        <p>Clear</p>
      </div>
    </div>
  )
}

export default ListFooter

import React from 'react'
import './NoticeBar.css'

function NoticeBar() {

  return (
    <div className="noticebar-wrapper">
      <div className="noticebar">
        {/* we want to pass in alert text, eg: enter something */}
        <p className="noticebar-text">Oops. Please enter something!</p>
      </div>
    </div>
  )
}

export default NoticeBar

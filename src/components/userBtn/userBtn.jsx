import { useState } from 'react'
import './userBtn.css'

const UserBtn = () => {
  const [open, setOpen] = useState(false)
  //TEMP USER BEFORE BACKEND INTEGRATION
  const currentUser = true
  return currentUser ? (
    <div className="userBtn">
      <img
        src="/general/noAvatar.png"
        alt="no-avatar"
      />
      <img
        onClick={() => setOpen((prev) => !prev)}
        src="/general/arrow.svg"
        alt="arrow"
        className="arrow"
      />
      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Setting</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a
      href="/"
      className="loginLink"
    >
      Login/Sign Up
    </a>
  )
}

export default UserBtn

import { useState } from 'react'
import './userBtn.css'
import Image from '../image/image'

const UserBtn = () => {
  const [open, setOpen] = useState(false)
  //TEMP USER BEFORE BACKEND INTEGRATION
  const currentUser = true
  return currentUser ? (
    <div className="userBtn">
      <Image
        path="/general/noAvatar.png"
        alt="no-avatar"
      />
      <Image
        path="/general/arrow.svg"
        onClick={() => setOpen((prev) => !prev)}
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

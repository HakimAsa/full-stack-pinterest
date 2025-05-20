import { useState } from 'react'
import './userBtn.css'
import Image from '../image/image'
import authApi from '../../api/auth'
import useApi from '../../hooks/useApi'
import { useNavigate } from 'react-router'

const UserBtn = () => {
  const [open, setOpen] = useState(false)
  const logout = useApi(authApi.logoutUser)
  const navigate = useNavigate()

  const handleLogout = async () => {
    const res = await logout.request()
    if (!res?.ok) return
    navigate('/auth')
  }
  //TEMP USER BEFORE BACKEND INTEGRATION
  const currentUser = true
  return currentUser ? (
    <div className="userBtn">
      <Image
        path="/general/noAvatar.png"
        alt="no-avatar"
      />
      <div onClick={() => setOpen((prev) => !prev)}>
        <Image
          path="/general/arrow.svg"
          alt="arrow"
          className="arrow"
        />
      </div>
      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Setting</div>
          <div
            className="userOption"
            onClick={handleLogout}
          >
            Logout
          </div>
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

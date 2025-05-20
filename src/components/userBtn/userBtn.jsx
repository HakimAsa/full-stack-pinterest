import { useState } from 'react'
import './userBtn.css'
import Image from '../image/image'
import authApi from '../../api/auth'
import useApi from '../../hooks/useApi'
import { Link, useNavigate } from 'react-router'
import useAuthStore from '../../store/authStore'

const UserBtn = () => {
  const [open, setOpen] = useState(false)
  const logout = useApi(authApi.logoutUser)
  const navigate = useNavigate()
  const { currentUser } = useAuthStore()

  console.log(currentUser)

  const handleLogout = async () => {
    const res = await logout.request()
    if (!res?.ok) return
    navigate('/auth')
  }

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
    <Link
      to="/auth"
      className="loginLink"
    >
      Login/Sign Up
    </Link>
  )
}

export default UserBtn

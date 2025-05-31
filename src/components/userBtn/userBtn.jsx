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
  const { currentUser, removeCurrentUser } = useAuthStore()

  const handleLogout = async () => {
    const res = await logout.request()
    if (!res?.ok || !currentUser) {
      navigate('/auth')
      return
    }
    removeCurrentUser()
    navigate('/auth')
  }

  return currentUser ? (
    <div className="userBtn">
      <Image
        src={currentUser.profilePicture || '/general/noAvatar.png'}
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
          <Link
            to={`/profile/${currentUser.username}`}
            className="userOption"
          >
            Profile
          </Link>
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

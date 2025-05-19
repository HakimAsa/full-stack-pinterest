import { useState } from 'react'
import './auth.css'
import Image from '../../components/image/image'
import PrimaryBtn from '../../components/button/primaryBtn'
import { Link, useNavigate } from 'react-router'
import authApi from '../../api/auth'
import useApi from '../../hooks/useApi'

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false)
  const navigate = useNavigate()

  const register = useApi(authApi.registerUser)
  const login = useApi(authApi.loginUser)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle form submission logic here
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    isRegister ? await register.request(data) : await login.request(data)
    navigate('/')
  }
  return (
    <div className="auth">
      <div className="authContainer">
        <Image
          width={36}
          height={36}
          path="/general/brandpinclear.png"
          alt="logo"
        />
        <h1>{isRegister ? 'Create an account' : 'Login to your account'}</h1>
        {isRegister ? (
          <form
            key="registerForm"
            onSubmit={handleSubmit}
          >
            <div className="formGroup">
              <label htmlFor="username">Username</label>
              <input
                type="username"
                id="username"
                name="username"
                required
                placeholder="Enter your username"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="displayName">Name</label>
              <input
                type="displayName"
                id="displayName"
                name="displayName"
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter your password"
              />
            </div>
            <PrimaryBtn
              type="submit"
              text="Register"
            />

            <p onClick={() => setIsRegister(false)}>
              Do you have an account? <b>Login</b>
            </p>
            {register.error && <p className="error">{register.message}</p>}
          </form>
        ) : (
          <form
            key="loginForm"
            onSubmit={handleSubmit}
          >
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter your password"
              />
            </div>
            <PrimaryBtn
              type="submit"
              text="Login"
            />

            <p onClick={() => setIsRegister(true)}>
              Don't have an account? <b>Register</b>
            </p>
            {login.error && <p className="error">{login.message}</p>}
            <p className="forgotPassword">
              <Link to="/forgot-password">Forgot Password?</Link>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

export default Auth

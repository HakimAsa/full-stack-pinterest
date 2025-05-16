import './auth.css'
import Image from '../../components/image/image'
import PrimaryBtn from '../../components/button/primaryBtn'
import { Link } from 'react-router'
import { useState } from 'react'

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
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
          <form key="registerForm">
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
              <label htmlFor="name">Name</label>
              <input
                type="name"
                id="name"
                name="name"
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
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          <form key="loginForm">
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
            {error && <p className="error">{error}</p>}
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
